import { Box, Text, Image, Icon } from "@skynexui/components";
import { useState, useEffect, useCallback } from "react";
import appConfig from "../../config.json";
import api from "../api";

function ListaMensagens({ filtraMensagens, userImage }) {
	const [listaMensagens, setListaMensagens] = useState([]);
	
	useEffect(() => {
		api.getMensagens().then((dados) => setListaMensagens(dados));
		const subscription = api.escutaEmTempoReal((novaMensagem) => {
			//Para reusar um valor de referência array/objeto passar função para o setState
			// Para pegar o valor atual do estado
			setListaMensagens((valoratual) => {
				return [novaMensagem, ...valoratual];
			});
		});

		return () => {
			subscription.unsubscribe();
		};
	}, []);

	const handleDeletaMensagem = useCallback((mensagemId) => {
		api.deletaMensagem(mensagemId).then(() => {
			api.getMensagens().then((mensagens) => {
				setListaMensagens(mensagens);
			});
		});
	}, []);
    
    function formataData(string) {
		let time = new Date(string).toLocaleTimeString().substring(0, 5);
		let data;
		if (new Date().getDay() - new Date(string).getDay() === 0) {
			data = "Hoje";
		} else if(new Date().getDay() - new Date(string).getDay() === 1){
            time = "Ontem, às: " +  new Date(string).toLocaleTimeString().substring(0, 5);
            data = '';
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
			{listaMensagens.map((mensagem) => {
				return (
					<Text
						key={mensagem.id}
						tag="li"
						styleSheet={{
							borderRadius: "5px",
							padding: "6px",
							userSelect: "none",
							position: "relative",
							backgroundColor:
								mensagem.userImage === userImage
									? `${appConfig.theme.colors.primary[700]}71`
									: appConfig.theme.colors.secondary[600],
							width: "50%",
							transition: ".4s",
							cursor:
								mensagem.userImage === userImage
									? "pointer"
									: "inherit",
							margin:
								mensagem.userImage === userImage
									? "0 10% 12px 40%"
									: "0 40% 12px 10%",
							hover: {
								backgroundColor:
									mensagem.userImage === userImage
										? `${appConfig.theme.colors.primary[700]}51`
										: `${appConfig.theme.colors.secondary[600]}81`,
							},
						}}
						onDoubleClick={() => {
							if (mensagem.userImage === userImage)
								filtraMensagens(mensagem.id);
						}}
					>
						<Box
							styleSheet={{
								width: "90%",
								wordBreak: "break-all",
								padding: "5px",
							}}
						>
							{mensagem.texto.startsWith(":sticker:") ? (
								<Image
									styleSheet={{
										maxWidth: "130px",
									}}
									src={mensagem.texto.replace(
										":sticker:",
										""
									)}
								/>
							) : (
								<Text
									styleSheet={{
										whiteSpace: "pre-line",
										width: "10%",
									}}
								>
									{mensagem.texto}
								</Text>
							)}
						</Box>
						{userImage === mensagem.userImage && (
							<Icon
								name="FaTrash"
								size="1.6ch"
								styleSheet={{
									opacity: ".8",
									cursor: "pointer",
									position: "absolute",
									top: "5px",
									right: "5px",
								}}
								onClick={() => {
									handleDeletaMensagem(mensagem.id);
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
									src={ mensagem.userImage }
								/>
								<Text
									tag="strong"
									styleSheet={{ fontSize: "15px" }}
								>
									{mensagem.userImage === userImage
										? "Você"
										: mensagem.de.length < 10 ? mensagem.de : `${mensagem.de.replace('_', ' ').substring(0, 10)}...`}
								</Text>
							</Box>
							<Text
								styleSheet={{
									fontSize: "10px",
									marginLeft: "8px",
									color: appConfig.theme.colors.neutrals[300],
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

export default ListaMensagens;
