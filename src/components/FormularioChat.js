import { useState } from "react";
import { Box, TextField, Icon } from "@skynexui/components";
import appConfig from "../../config.json";

function FormularioChat({ handleNovaMensagem }) {
	const [mensagem, setMensagem] = useState("");

	return (
		<Box
			as="form"
			styleSheet={{
				display: "flex",
				alignItems: "center",
				position: "relative",
				flex: "1",
			}}
		>
			<TextField
				value={mensagem}
				placeholder="Insira sua mensagem aqui..."
				type="textarea"
				onChange={(e) =>
                    setMensagem(e.target.value)}
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
                onKeyPress={(e) => {
                    console.log(e);
                    if(e.key === "Enter"){
                        e.preventDefault();
                        handleNovaMensagem(mensagem);
					    setMensagem("");

                    }
                }}
			/>

			<Icon
				type="submit"
				onClick={(e) => {
					e.preventDefault();
					handleNovaMensagem(mensagem);
					setMensagem("");
				}}
				name="FaPlaneArrival"
				size="3.2ch"
				styleSheet={{
					position: "absolute",
					right: "25px",
					bottom: "20px",
					color: appConfig.theme.colors.neutrals["300"],
					cursor: "pointer",
					transition: ".5s",
					hover: {
						color: appConfig.theme.colors.neutrals["200"],
					},
				}}
			/>
		</Box>
	);
}

export default FormularioChat;
