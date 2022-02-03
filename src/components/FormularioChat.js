import { useCallback, useState } from 'react';
import {Box, TextField, Icon} from '@skynexui/components';
import { BotaoAbreStickers } from './BotaoAbreStickers';
import appConfig from '../../config.json';
import api from '../api';

function FormularioChat({ username }) {
	const [mensagem, setMensagem] = useState("");
    
    function handleNovaMensagem(novaMensagem) {
		if (novaMensagem) {
            api.setMensagem(novaMensagem, username).then(() => setMensagem(''))
        };
        
    }

    return (
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
				onChange={(e) => setMensagem(e.target.value)}
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
					backgroundColor: appConfig.theme.colors.neutrals[800],
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
						color: appConfig.theme.colors.neutrals["200"],
					},
				}}
			/>
			<BotaoAbreStickers
				onStickerClick={useCallback((sticker) => {
					handleNovaMensagem(`:sticker:${sticker}`);
				},[])}
			/>
		</Box>
	);
}

export default FormularioChat;
