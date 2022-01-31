import {
	Box,
	Text,
	TextField,
	Image,
	Button,
	Icon,
} from "@skynexui/components";
import React, { useEffect, useState } from "react";
import appConfig from "../config.json";
import api from "../api";
import { useRouter } from "next/router";
import { ButtonSendSticker } from "../src/components/ButtonSendSticker";

export default function ChatPage() {
	const roteamento = useRouter();
	const username = roteamento.query.username;
	const [mensagem, setMensagem] = useState("");
	const [listaMensagens, setListaMensagens] = useState([]);

	useEffect(() => {
		api.getMensagens().then((dados) => setListaMensagens(dados));
        const subscription = api.escutaEmTempoReal((novaMensagem) => {
            //Para reusar um valor de referência array/objeto passar função para o setState
            // Para pegar o valor atual do estado
            setListaMensagens((valoratual) => {
                console.log('valor atual:', valoratual);
                return [novaMensagem, ...valoratual]
            });
			setMensagem("");
        });

        return () => {
            subscription.unsubscribe();
        }
	}, []);

	function handleChange(e) {
		setMensagem(e.target.value);
	}

	function handleNovaMensagem(novaMensagem) {
		api.setMensagem(novaMensagem, username).then();
	}

	function handleDeletaMensagem(mensagemId) {
		api.deletaMensagem(mensagemId).then(() => {
			api.getMensagens().then((mensagens) => {
				setListaMensagens(mensagens);
			});
		});
	}

	return (
		<Box
			styleSheet={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: appConfig.theme.colors.primary[500],
				backgroundImage: `url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundBlendMode: "multiply",
				color: appConfig.theme.colors.neutrals["000"],
			}}
		>
			<Box
				styleSheet={{
					display: "flex",
					flexDirection: "column",
					flex: 1,
					boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
					borderRadius: "5px",
					backgroundColor: appConfig.theme.colors.neutrals[700],
					height: "100%",
					maxWidth: "95%",
					maxHeight: "95vh",
					padding: "32px",
				}}
			>
				<Header />
				<Box
					styleSheet={{
						position: "relative",
						display: "flex",
						flex: 1,
						height: "80%",
						backgroundColor: appConfig.theme.colors.neutrals[600],
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
						}}
					>
						<TextField
							value={mensagem}
							placeholder="Insira sua mensagem aqui..."
							type="textarea"
							onChange={handleChange}
							onKeyPress={(e) => {
								if (e.key === "Enter") {
									e.preventDefault();
									handleNovaMensagem(mensagem);
								}
							}}
							styleSheet={{
								width: "100%",
								border: "0",
								resize: "none",
								borderRadius: "5px",
								padding: "6px 8px",
								backgroundColor:
									appConfig.theme.colors.neutrals[800],
								marginRight: "12px",
								color: appConfig.theme.colors.neutrals[200],
							}}
						/>
						<Button
							type="submit"
							label="Enviar"
							fullWidth
							buttonColors={{
								contrastColor:
									appConfig.theme.colors.neutrals["000"],
								mainColor: appConfig.theme.colors.primary[500],
								mainColorLight:
									appConfig.theme.colors.primary[400],
								mainColorStrong:
									appConfig.theme.colors.primary[600],
							}}
							styleSheet={{
								maxWidth: "100px",
							}}
							onClick={(e) => {
								e.preventDefault();
								handleNovaMensagem(mensagem);
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
	return (
		<>
			<Box
				styleSheet={{
					width: "100%",
					marginBottom: "16px",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<Text variant="heading5">Chat</Text>
				<Button
					variant="tertiary"
					colorVariant="neutral"
					label="Logout"
					href="/"
                    onClick={() => {
                        api.handleGithubLogout();
                    }}
				/>
			</Box>
		</>
	);
}

function MessageList({ mensagens, filtraMensagens, username }) {
	return (
		<Box
			tag="ul"
			styleSheet={{
				overflow: "auto",
				display: "flex",
				scrollbarWidth: "none",
				flexDirection: "column-reverse",
				flex: 1,
				color: appConfig.theme.colors.neutrals["000"],
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
							marginBottom: "12px",
							marginRight: "35px",
							hover: {
								backgroundColor:
									appConfig.theme.colors.neutrals[700],
							},
						}}
					>
						<Box
							styleSheet={{
								marginBottom: "8px",
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								paddingRight: "20px",
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
								<Text tag="strong">{mensagem.de}</Text>
								<Text
									styleSheet={{
										fontSize: "10px",
										marginLeft: "8px",
										color: appConfig.theme.colors
											.neutrals[300],
									}}
									tag="span"
								>
									{new Date().toLocaleDateString()}
								</Text>
							</Box>
							{username === mensagem.de && (
								<Icon
									name="FaTrash"
									size="1.6ch"
									styleSheet={{
										opacity: ".8",
										cursor: "pointer",
									}}
									onClick={() => {
										filtraMensagens(mensagem.id);
									}}
								/>
							)}
						</Box>
						{mensagem.texto.startsWith(":sticker:") ? (
							<Image
								styleSheet={{
									maxWidth: "130px",
								}}
								src={mensagem.texto.replace(":sticker:", "")}
							/>
						) : (
							mensagem.texto
						)}
					</Text>
				);
			})}
		</Box>
	);
}
