import { Box, Icon, Image, Text } from "@skynexui/components";
import { useEffect, useState } from "react";
import appConfig from "../../config.json";

function ChatInfoModal({ user, setModalIsOpen }) {
	const [userData, setUserData] = useState({});

	useEffect(() => {
		function carregaDadosUser(usuario) {
			fetch(`https://api.github.com/users/${usuario}`).then((resp) => {
				resp.json().then((respConvert) => {
					setUserData(respConvert);
				});
			});
		}

		carregaDadosUser(user);
	}, [user]);
	return (
		<Box
			as="article"
			styleSheet={{
				position: "absolute",
				zIndex: "100",
				top: "-250px",
				left: "-10px",
				width: {
					xs: "350px",
					md: "450px",
				},
				height: "250px",
				backgroundColor: `${appConfig.theme.colors.neutrals["900"]}ea`,
				borderRadius: "10px",
			}}
		>
			<Icon
				name="FaSignOutAlt"
				size="3ch"
				onClick={setModalIsOpen}
				styleSheet={{
					position: "absolute",
					top: "8px",
					right: "5px",
					cursor: "pointer",
					opacity: ".8",
					transition: ".5s",
					hover: {
						opacity: "1",
					},
				}}
			/>
			<Box
				styleSheet={{
					display: "flex",
					flexDirection: {
						xs: "column",
						md: "row",
					},
					alignItems: "center",
					justifyContent: "center",
					padding: "10px 0 0 0",
				}}
			>
				<Icon name="FaGithub" size="3ch" />
				<Text
					styleSheet={{
						color: appConfig.theme.colors.neutrals[100],
						fontSize: "16px",
						fontWeight: "bold",
						marginLeft: "10px",
					}}
				>
					<a
						rel="noreferrer"
						target="_blank"
						style={{
							color: appConfig.theme.colors.neutrals[100],
							textDecoration: "none",
						}}
						href={`https://github.com/${userData.login}`}
					>
						Github Profile
					</a>
				</Text>
			</Box>
			<Box
				styleSheet={{
					height: "80%",
					width: "100%",
					display: "flex",
					flexDirection: "row",
					padding: "10px",
					borderRadius: "10px",
				}}
			>
				<Box
					styleSheet={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "start",
						padding: "10px",
						flex: "1",
					}}
				>
					<Image
						src={`https://github.com/${userData.login}.png`}
						styleSheet={{
							width: {
								xs: "150px",
								md: "190px",
							},
							borderRadius: "50%",
						}}
						alt="Imagem do avatar do usuário."
					/>
					<Text
						styleSheet={{
							paddingTop: {
								xs: "12px",
								md: "7px",
							},
							fontSize: "15px",
						}}
					>
						{userData.name}
					</Text>
				</Box>

				<Box
					as="ul"
					styleSheet={{
						flex: "1.5",
						display: "flex",
						padding: "0px 10px 10px 10px",
						flexDirection: "column",
						alignItems: {
							xs: "flex-start",
							md: "flex-start",
						},
						borderLeft: `1px solid ${appConfig.theme.colors.neutrals["500"]}ea`,
					}}
				>
					{userData.bio && (
						<Box
							as="li"
							styleSheet={{
								display: "flex",
								alignItems: "center",
								justifyContent: "start",
								padding: "10px 0 0 0",
							}}
						>
							<Icon name="FaBook" size="2ch" />
							<Text
								styleSheet={{
									color: appConfig.theme.colors.neutrals[100],
									fontSize: "12px",
									marginLeft: "8px",
								}}
							>
								{userData.bio.length > 45
									? `${userData.bio.substring(0, 45)}...`
									: userData.bio}
							</Text>
						</Box>
					)}
					{userData.blog && (
						<Box
							as="li"
							styleSheet={{
								display: "flex",
								alignItems: "center",
								justifyContent: "start",
								padding: "10px 0 0 0",
							}}
						>
							<Icon name="FaGlobe" size="2ch" />
							<Text
								styleSheet={{
									color: appConfig.theme.colors.neutrals[100],
									fontSize: "12px",
									marginLeft: "8px",
								}}
							>
								<a
									rel="noreferrer"
									target="_blank"
									style={{
										color: appConfig.theme.colors
											.neutrals[100],
										textDecoration: "none",
									}}
									href={userData.blog}
								>
									{userData.blog}
								</a>
							</Text>
						</Box>
					)}
					{userData.created_at && (
						<Box
							as="li"
							styleSheet={{
								display: "flex",
								alignItems: "center",
								justifyContent: "start",
								padding: "10px 0 0 0",
							}}
						>
							<Icon name="FaCalendarDay" size="2ch" />
							<Text
								styleSheet={{
									color: appConfig.theme.colors.neutrals[100],
									fontSize: "12px",
									marginLeft: "8px",
								}}
							>
								{userData.created_at.substring(0, 10)}
							</Text>
						</Box>
					)}
					<Box
						as="li"
						styleSheet={{
							display: "flex",
							alignItems: "center",
							justifyContent: "start",
							padding: "10px 0 0 0",
						}}
					>
						<Icon name="FaFolderOpen" size="2ch" />
						<Text
							styleSheet={{
								color: appConfig.theme.colors.neutrals[100],
								fontSize: "12px",
								marginLeft: "8px",
							}}
						>
							{userData.public_repos}
						</Text>
					</Box>

					<Box
						as="li"
						styleSheet={{
							display: "flex",
							alignItems: "center",
							justifyContent: "start",
							padding: "10px 0 0 0",
						}}
					>
						<Icon name="FaUserCheck" size="2ch" />
						<Text
							styleSheet={{
								color: appConfig.theme.colors.neutrals[100],
								fontSize: "12px",
								marginLeft: "8px",
							}}
						>
							{userData.followers} seguidores
						</Text>
					</Box>
					<Box
						as="li"
						styleSheet={{
							display: "flex",
							alignItems: "center",
							justifyContent: "start",
							padding: "10px 0 0 0",
						}}
					>
						<Icon name="FaUsers" size="2ch" />
						<Text
							styleSheet={{
								color: appConfig.theme.colors.neutrals[100],
								fontSize: "12px",
								marginLeft: "8px",
							}}
						>
							{userData.following} seguindo
						</Text>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

export default ChatInfoModal;
