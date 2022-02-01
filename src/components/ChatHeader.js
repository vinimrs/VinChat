import { Box, Text, Image } from "@skynexui/components";
import { useRouter } from "next/router";
import flaticon from "../../public/flaticon.png";
import appConfig from "../../config.json";
import api from "../api";

function ChatHeader() {
	const roteamento = useRouter();
	const username = roteamento.query.username;
	return (
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
						backgroundColor: appConfig.theme.colors.neutrals["050"],
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
	);
}

export default ChatHeader;
