import { Box, Icon, Image, Text } from '@skynexui/components';
import appConfig from '../../config.json';
import githubImg from "../../public/github.png";

function InfosPaginaInicial({ username, userValido, usernameData }) {
	return (
		<Box
			styleSheet={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				padding: "16px 30px 16px 30px",
				backgroundColor: `${appConfig.theme.colors.neutrals["050"]}ea`,
				borderRadius: "10px",
				minHeight: "240px",
			}}
		>
			<Image
				styleSheet={{
					borderRadius: "10%",
					marginBottom: "16px",
					maxWidth: "200px",
				}}
				src={
					userValido && username.length > 2
						? `https://github.com/${username}.png`
						: githubImg.src
				}
			/>
			<Text
				variant="body4"
				styleSheet={{
					color: appConfig.theme.colors.neutrals[800],
					paddingBottom: "3px",
					borderRadius: "2px",
					transition: ".4s all",
					fontSize: "20px",
					fontWeight: "700",
				}}
			>
				{userValido && username.length > 2
					? usernameData.name
					: "Usuário Desconhecido"}
			</Text>
			{username.length > 2 && (
				<Box
					styleSheet={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<Box
						styleSheet={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							margin: "10px 10px 0 0",
						}}
					>
						<Icon name="FaUserCheck" size="2.5ch" />
						<Text
							variant="body2"
							styleSheet={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								color: appConfig.theme.colors.neutrals[800],
								borderRadius: "2px",
								fontSize: "20px",
								fontWeight: "bold",
								marginLeft: "8px",
							}}
						>
							{usernameData.followers}
						</Text>
					</Box>

					<Box
						styleSheet={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							margin: "10px 0 0 10px",
						}}
					>
						<Icon name="FaUserFriends" size="2.5ch" />
						<Text
							variant="body4"
							styleSheet={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								color: appConfig.theme.colors.neutrals[800],
								borderRadius: "2px",
								fontSize: "20px",
								fontWeight: "bold",
								marginLeft: "8px",
							}}
						>
							{usernameData.following}
						</Text>
					</Box>
				</Box>
			)}
		</Box>
	);
}

export default InfosPaginaInicial;