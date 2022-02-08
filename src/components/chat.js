import { Box, Icon } from "@skynexui/components";
import React, { useEffect, useState } from "react";
import ChatHeader from "../containers/ChatHeader";
import ChatMain from "../containers/ChatMain";
import appConfig from "../../config.json";
import { useRouter } from "next/router";
import api from "../api";

export default function ChatPage() {
    const roteamento = useRouter();
	const { username, provider } = roteamento.query;
    const [ userImage, setUserImage] = useState('');

    function pegaImageGoogle () {
        const user = api.checkUser();
        return user.user_metadata.avatar_url;
    }
    
    // possibilitando redimensionar o container
	const [drag, setDrag] = useState({
		active: false,
		x: "",
		y: "",
	});
	const [dims, setDims] = useState({
		w: 600,
		h: 700,
	});
	const startResize = (e) => {
		setDrag({
			active: true,
			x: e.clientX,
			y: e.clientY,
		});
	};
	const boxStyle = {
		maxWidth: `${dims.w}px`,
		height: `${dims.h}px`,
	};

	function resizeFrame(e) {
		const { active, x, y } = drag;
		if (active) {
			const xDiff = Math.abs(x - e.clientX);
			const yDiff = Math.abs(y - e.clientY);
			const newW = x > e.clientX ? dims.w - xDiff : dims.w + xDiff;
			const newH = y > e.clientY ? dims.h + yDiff : dims.h - yDiff;

			setDrag({ ...drag, x: e.clientX, y: e.clientY });
			setDims({ w: newW, h: newH });
		}
	}

	function stopResize() {
		setDrag({ ...drag, active: false });
	}

    useEffect(() => {
        const { username } = roteamento.query;
        // setDims({w:window.screen.width <= 992 ? 480 : 700, h:window.screen.height <= 992 ? 600 : 700});
        if(provider && provider === 'google'){
            setUserImage(pegaImageGoogle());
        } else if (username) {
            setUserImage(`https://github.com/${username}.png`);
        }
    }, [])

	return (
		<Box
			styleSheet={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				backgroundPosition: "center",
				backgroundImage: 'url(/bg2.jpg)',
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundBlendMode: "multiply",
				backdropFilter: "blur( 4px )",
				transition: ".5s all",
			}}
			onMouseMove={resizeFrame}
			onMouseUp={stopResize}
		>
			<Box
				styleSheet={{
					display: "flex",
					flexDirection: "column",
					flex: 1,
					borderRadius: "5px",
					backgroundColor: `${appConfig.theme.colors.secondary[900]}ca`,
					maxWidth: boxStyle.maxWidth,
					height: boxStyle.height,
					minWidth: {
                        sx: "350px",
                        lg: '500px'
                    },
					minHeight: "400px",
					padding: "32px",
					position: "relative",
				}}
			>
				<Icon
					name="FaCropAlt"
					size="2ch"
					onMouseDown={startResize}
					styleSheet={{
						position: "absolute",
						top: "0",
						right: "0",
						filter: "invert(100%)",
						cursor: drag.active ? "grabbing" : "grab",
						opacity: ".3",
						display: { md: "inherit", sm: "none" },
					}}
				/>
				<ChatHeader userImage={userImage} />
				<ChatMain userImage={userImage} username={username} />
			</Box>
		</Box>
	);
}
