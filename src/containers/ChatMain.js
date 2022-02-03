import { Box } from "@skynexui/components";
import appConfig from "../../config.json";
import FormularioChat from "../components/FormularioChat";
import ListaMensagens from "../components/ListaMensagens";
import { useRouter } from "next/router";
import api from "../api";
import { useCallback, useEffect, useState } from "react";

function ChatMain() {
	const roteamento = useRouter();
	const { username } = roteamento.query;

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
	}, [])

	return (
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

			<FormularioChat username={username} />
		</Box>
	);
}

export default ChatMain;
