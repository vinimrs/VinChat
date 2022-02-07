import { Box } from "@skynexui/components";
import { useState, useEffect, useCallback } from "react";
import appConfig from "../../config.json";
import api from "../api";
import Mensagem from "./Mensagem";



function ListaMensagens({ userImage }) {
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
					<Mensagem mensagem={mensagem} userImage={userImage} handleDeletaMensagem={handleDeletaMensagem} />
				);
			})}
		</Box>
	);
}

export default ListaMensagens;
