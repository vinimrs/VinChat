import { Box, Text, Image, Icon } from "@skynexui/components";
import appConfig from "../../config.json";

function ListaMensagens({ mensagens, filtraMensagens, username }) {
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
							position: "relative",
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
						{username === mensagem.de && (
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
