import { Box, TextField, Icon } from "@skynexui/components";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import appConfig from "../../config.json";
import api from "../api";
import { ButtonSendSticker } from "../components/ButtonSendSticker";
import ChatHeader from "../components/ChatHeader";
import ListaMensagens from "../components/ListaMensagens";
import bgImg from "../../public/bg2.jpg";

export default function ChatPage() {
	const roteamento = useRouter();
	const username = roteamento.query.username;
	const [mensagem, setMensagem] = useState("");
	const [listaMensagens, setListaMensagens] = useState([]);

	// possibilitando redimensionar o container
	const [drag, setDrag] = useState({
		active: false,
		x: "",
		y: "",
	});
	const [dims, setDims] = useState({
		w: 500,
		h: 600,
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

	useEffect(() => {
		api.getMensagens().then((dados) => setListaMensagens(dados));
		const subscription = api.escutaEmTempoReal((novaMensagem) => {
			//Para reusar um valor de referência array/objeto passar função para o setState
			// Para pegar o valor atual do estado
			setListaMensagens((valoratual) => {
				return [novaMensagem, ...valoratual];
			});
			setMensagem("");
		});

		return () => {
			subscription.unsubscribe();
		};
	}, []);

	function handleChange(e) {
		setMensagem(e.target.value);
	}

	function handleNovaMensagem(novaMensagem) {
		if (novaMensagem) api.setMensagem(novaMensagem, username).then();
	}

	function handleDeletaMensagem(mensagemId) {
		api.deletaMensagem(mensagemId).then(() => {
			api.getMensagens().then((mensagens) => {
				setListaMensagens(mensagens);
			});
		});
	}

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

	return (
		<Box
			styleSheet={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				backgroundPosition: "center",
				backgroundImage: `url(${bgImg.src})`,
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
					minWidth: "350px",
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
				<ChatHeader />
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
					<ListaMensagens
						mensagens={listaMensagens}
						filtraMensagens={handleDeletaMensagem}
						username={username}
					/>

					<Box
						as="form"
						styleSheet={{
							display: "flex",
							alignItems: "center",
							position: "relative",
							// overflow: "hidden",
						}}
					>
						<TextField
							value={mensagem}
							placeholder="Insira sua mensagem aqui..."
							type="textarea"
							onChange={handleChange}
							onKeyPress={(e) => {
								if (e.key === "Enter" && e.shiftKey === false) {
									e.preventDefault();
									handleNovaMensagem(mensagem);
								}
							}}
							styleSheet={{
								width: "100%",
								border: "0",
								resize: "none",
								borderRadius: "5px",
								padding: "15px 55px 5px 15px",
								backgroundColor:
									appConfig.theme.colors.neutrals[800],
								marginRight: "12px",
								color: appConfig.theme.colors.neutrals[200],
							}}
						/>

						<Icon
							type="submit"
							onClick={(e) => {
								e.preventDefault();
								handleNovaMensagem(mensagem);
							}}
							name="FaPlaneArrival"
							size="3.2ch"
							styleSheet={{
								position: "absolute",
								right: "75px",
								bottom: "20px",
								color: appConfig.theme.colors.neutrals["300"],
								cursor: "pointer",
								transition: ".5s",
								hover: {
									color: appConfig.theme.colors.neutrals[
										"200"
									],
								},
							}}
						/>

						<ButtonSendSticker
							onStickerClick={(sticker) => {
								handleNovaMensagem(`:sticker:${sticker}`);
							}}
						/>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
