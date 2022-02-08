import { Box, Button } from "@skynexui/components";
import appConfig from "../../config.json";
import FormularioChat from "../components/FormularioChat";
import ListaMensagens from "../components/ListaMensagens";
import api from "../api";
import { useCallback, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import LoadingComponent from "../UI/LoadingComponent";
import { CSSTransition } from "react-transition-group";
import { useRouter } from "next/router";
import ChatHeader from "../components/ChatHeader";

const ListaStickers = dynamic(() => import("../components/ListaStickers"), {
	loading: () => (
		<Box
			styleSheet={{
				display: "flex",
				flexDirection: "column",
				borderRadius: "5px",
				backgroundColor: appConfig.theme.colors.neutrals[800],
				width: "100%",
				height: "300px",
				right: "30px",
				overflow: "hidden",
				zIndex: "1000",
				bottom: "30px",
				padding: "16px",
				boxShadow:
					"rgba(4, 4, 5, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.24) 0px 8px 16px 0px",
			}}
		>
			<LoadingComponent />
		</Box>
	),
});

function ChatMain() {
    const roteamento = useRouter();
	const { username, provider } = roteamento.query;
    const [ userImage, setUserImage] = useState('');
    const [isOpen, setOpenState] = useState(false);
    const [randomEmoji, setRandomEmoji] = useState(0);

    function pegaImageGoogle () {
        const user = api.checkUser();
        return user.user_metadata.avatar_url;
    }

	const handleNovaMensagem = useCallback(
		(novaMensagem) => {
			if (novaMensagem) {
				api.setMensagem(novaMensagem, username, userImage);
				console.log(userImage);
			}
		},
		[userImage, username]
	);

    useEffect(() => {
        if(provider === 'google'){
            setUserImage(pegaImageGoogle());
        } else if (username) {
            setUserImage(`https://github.com/${username}.png`);
        }
    }, [])

	console.log(userImage);
	return (
        <>
            <ChatHeader userImage={userImage} />
            <Box
                styleSheet={{
                    position: "relative",
                    display: "flex",
                    flex: 1,
                    height: "80%",
                    backgroundColor: appConfig.theme.colors.secondary[800],
                    flexDirection: "column",
                    borderRadius: "5px",
                    padding: "16px",
                    overflow: "hidden",
                }}
            >
                {/* <ListaMensagens
                    userImage={userImage}
                /> */}

                <Box
                    styleSheet={{
                        display: "flex",
                    }}
                >
                    {/* <FormularioChat
                        handleNovaMensagem={handleNovaMensagem}
                        username={username}
                        userImage={userImage}
                    /> */}
                    <Button
                        styleSheet={{
                            borderRadius: "50%",
                            padding: "0 3px 0 0",
                            minWidth: "50px",
                            minHeight: "50px",
                            fontSize: "20px",
                            marginBottom: "8px",
                            lineHeight: "0",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: appConfig.theme.colors.neutrals[400],
                        }}
                        label={appConfig.emojis.at(randomEmoji)}
                        onClick={() => {
                            setRandomEmoji(Math.floor(Math.random() * 10));
                            setOpenState(!isOpen);
                        }}
                    />
                </Box>
                
                <CSSTransition
                    in={isOpen}
                    timeout={300}
                    classNames="alert"
                    unmountOnExit
                >
                    {/* <ListaStickers
                        onStickerClick={(sticker) => {
                            handleNovaMensagem(`:sticker:${sticker}`);
                        }}
                        setOpenState={setOpenState}
                    /> */}
                </CSSTransition>
                <style global jsx>
                    {`
                        .alert-enter {
                            opacity: 0;
                            transform: scale(0.9);
                        }
                        .alert-enter-active {
                            opacity: 1;
                            transform: translateX(0);
                            transition: opacity 300ms, transform 300ms;
                        }
                        .alert-exit {
                            opacity: 1;
                        }
                        .alert-exit-active {
                            opacity: 0;
                            transform: scale(0.9);
                            transition: opacity 300ms, transform 300ms;
                        }
                    `}
                </style>
            </Box>
        </>
	);
}

export default ChatMain;
