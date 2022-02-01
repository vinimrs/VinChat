import { Box, Text, TextField, Image, Icon } from "@skynexui/components";
import React, { useEffect, useState } from "react";
import appConfig from "../config.json";
import api from "../api";
import { useRouter } from "next/router";
import { ButtonSendSticker } from "../src/components/ButtonSendSticker";
import bgImg from "../public/bg2.jpg";
import flaticon from "../public/flaticon.png";

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
				console.log("valor atual:", valoratual);
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

	function stopResize(e) {
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
				<Header />
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
					<MessageList
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
                            overflow: 'hidden',
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

function Header() {
	const roteamento = useRouter();
	const username = roteamento.query.username;
	return (
		<>
			<Box
				styleSheet={{
					width: "100%",
					marginBottom: "16px",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					userSelect: "none",
				}}
			>
				<Box
					styleSheet={{
						display: "flex",
						alignItems: "center",
					}}
				>
					<Image
						styleSheet={{
							width: "40px",
							marginRight: "5px",
						}}
						src={flaticon.src}
						alt="Logo da plataforma"
					/>
					<Text
						variant="heading5"
						styleSheet={{
							color: appConfig.theme.colors.neutrals["050"],
						}}
					>
						VinChat
					</Text>
				</Box>
				<Box
					styleSheet={{
						padding: "5px",
						display: "flex",
						alignItems: "center",
						transition: ".2s",
						borderRadius: "2px",
						cursor: "pointer",
						color: appConfig.theme.colors.neutrals["050"],
						hover: {
							backgroundColor:
								appConfig.theme.colors.neutrals["050"],
							color: appConfig.theme.colors.secondary[800],
						},
					}}
					onClick={() => {
						if (api.checkUser) api.githubLogout();
						roteamento.push("/");
					}}
				>
					<Image
						styleSheet={{
							borderRadius: "50%",
							maxWidth: "30px",
						}}
						src={`https://github.com/${username}.png`}
					/>
					<Text
						variant="heading5"
						styleSheet={{
							paddingLeft: "10px",
							fontSize: "15px",
							// color: appConfig.theme.colors.neutrals["050"],
						}}
					>
						Logout
					</Text>
				</Box>
			</Box>
		</>
	);
}

function MessageList({ mensagens, filtraMensagens, username }) {
	function formataData(string) {
		var time = new Date(string).toLocaleTimeString().substring(0, 5);
		var data;
		if (new Date().getDay() - new Date(string).getDay() === 0) {
			data = "Hoje";
		} else {
			time =
				new Date(string).toLocaleDateString() +
				", às: " +
				new Date(string).toLocaleTimeString().substring(0, 5);
			data = "";
		}
		return `${time} ${data}`;
	}

	return (
		<Box
			tag="ul"
			styleSheet={{
				overflow: "auto",
				display: "flex",
				scrollbarWidth: "none",
				flexDirection: "column-reverse",
				flex: 1,
				color: appConfig.theme.colors.neutrals["050"],
				marginBottom: "16px",
				marginRight: "-35px",
			}}
		>
			{mensagens.map((mensagem) => {
				return (
					<Text
						key={mensagem.id}
						tag="li"
						styleSheet={{
							borderRadius: "5px",
							padding: "6px",
							userSelect: "none",
                            position: 'relative',
							backgroundColor:
								mensagem.de === username
									? `${appConfig.theme.colors.primary[700]}71`
									: appConfig.theme.colors.secondary[600],
							width: "50%",
							transition: ".4s",
							cursor:
								mensagem.de === username
									? "pointer"
									: "inherit",
							margin:
								mensagem.de === username
									? "0 10% 12px 40%"
									: "0 40% 12px 10%",
							hover: {
								backgroundColor:
									mensagem.de === username
										? `${appConfig.theme.colors.primary[700]}51`
										: `${appConfig.theme.colors.secondary[600]}81`,
							},
						}}
						onDoubleClick={() => {
							if (mensagem.de === username)
								filtraMensagens(mensagem.id);
						}}
					>
                            <Box styleSheet={{width: '90%', wordBreak: 'break-all',padding: '5px'}}>
                                {mensagem.texto.startsWith(":sticker:") ? (
                                    <Image
                                        styleSheet={{
                                            maxWidth: "130px",
                                        }}
                                        src={mensagem.texto.replace(":sticker:", "")}
                                    />
                                ) : (
                                    <Text
                                        styleSheet={{
                                            whiteSpace: "pre-line",
                                            width: '10%'
                                        }}
                                    >
                                        {mensagem.texto}
                                    </Text>
                                )}
                            </Box>
                            {username === mensagem.de && (
                                    <Icon
                                        name="FaTrash"
                                        size="1.6ch"
                                        styleSheet={{
                                            opacity: ".8",
                                            cursor: "pointer",
                                            position: 'absolute',
                                            top: '5px',
                                            right: '5px'
                                        }}
                                        onClick={() => {
                                            filtraMensagens(mensagem.id);
                                        }}
                                    />
                                )}
						<Box
							styleSheet={{
								marginTop: "8px",
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								paddingLeft: "5px",
							}}
						>
							<Box
								styleSheet={{
									display: "flex",
									alignItems: "center",
								}}
							>
								<Image
									styleSheet={{
										width: "20px",
										height: "20px",
										borderRadius: "50%",
										display: "inline-block",
										marginRight: "8px",
									}}
									src={`https://github.com/${mensagem.de}.png`}
								/>
								<Text
									tag="strong"
									styleSheet={{ fontSize: "15px" }}
								>
									{mensagem.de === username
										? "Você"
										: mensagem.de}
								</Text>
							</Box>
								<Text
									styleSheet={{
										fontSize: "10px",
										marginLeft: "8px",
										color: appConfig.theme.colors
											.neutrals[300],
									}}
									tag="span"
								>
									{formataData(mensagem.created_at)}
								</Text>
							
						</Box>
					</Text>
				);
			})}
		</Box>
	);
}
