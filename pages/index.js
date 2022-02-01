import {
	Box,
	Button,
	TextField,
	Image,
	Text,
	Icon,
} from "@skynexui/components";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import appConfig from "../config.json";
import defaultImage from "../public/default.jpg";
import githubImg from "../public/github.png";
import backgroundImg from "../public/bg2.jpg";
import api from "../api";

// Exemplo de styled.Jsx
function Title({ children, tag }) {
	const Tag = tag;
	return (
		<>
			<Tag>{children}</Tag>

			<style jsx>{`
				${tag} {
					font-size: 24px;
					font-weigth: 600;
					color: ${appConfig.theme.colors.neutrals["000"]};
				}
			`}</style>
		</>
	);
}

Title.defaultProps = {
	tag: "h1",
};

export default function PaginaInicial() {
	const [username, setUsername] = useState("");
	const [usernameData, setUsernameData] = useState({});
	const [userValido, setUserValido] = useState(false);
	const [logando, setLogando] = useState(true);
	const [loaded, setLoaded] = useState(false);
	const roteamento = useRouter();

	function handleChange(e) {
		setUsername(e.target.value);
		validaUsername(e.target.value);
		setLogando(false);
		setLoaded(false);
	}

	function handleSubmit(e) {
		e.preventDefault();
		roteamento.push(`/chat?username=${username}`);
	}

	function validaUsername(user) {
		fetch(`https://api.github.com/users/${user}`)
			.then((resp) => resp.json())
			.then((respConvert) => {
				if (respConvert.message === "Not Found") setUserValido(false);
				else setUserValido(true);
				console.log("validou");
			})
			.catch((erro) => console.log(erro));
	}

	function carregaDadosUser(user) {
		fetch(`https://api.github.com/users/${user}`)
			.then((resp) => resp.json())
			.then((respConvert) => {
				setUsernameData(respConvert);
				setUserValido(true);
			})
			.catch((erro) => console.log(erro));
	}

	function carregaUser() {
		api.checkUser()
			.then((user) => {
				if (user) {
					setUsername(user.user_metadata.user_name);
					setLoaded(true);
					carregaDadosUser(user.user_metadata.user_name);
				}
			})
			.catch((error) => {
				throw new Error(error);
			});
	}

	useEffect(() => {
		carregaUser();
		window.addEventListener("hashchange", () => {
			carregaUser();
		});
		setLogando(false);
	}, []);

	console.log(backgroundImg);
	return (
		<>
			<Box
				styleSheet={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					backgroundImage: `url(${backgroundImg.src})`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					backgroundBlendMode: "multiply",
				}}
			>
				<Box
					styleSheet={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						flexWrap: "wrap",
						// width: "100%",
						background: " rgba( 255, 255, 255, 0.35 )",
						boxShadow: "0 0 32px 0 #E03D2340",
						backdropFilter: "blur( 4px )",
						maxWidth: "400px",
						borderRadius: "10px",
						padding: "32px",
						margin: "16px",
					}}
				>
					{/* Photo Area */}
					<Box
						styleSheet={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
							width: "100%",
							padding: "16px",
							background: "rgba( 255, 255, 255, 0.25 )",
							// background: 'rgba( 254, 72, 36, 0.4 )',
							// boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
							backdropFilter: "blur( 4px )",
							borderRadius: "10px",
							flex: 1,
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
								padding: "3px 10px",
								borderRadius: "2px",
								transition: ".4s all",
                                fontSize: '20px',
                                fontWeight:'700'
							}}
						>
							{username.length > 2
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
                                <Box styleSheet={{
                                    display: "flex",
									justifyContent: "center",
									alignItems: "center",
                                    margin: '10px 10px 0 0'
                                }}>
                                    <Icon
                                        name="FaUserCheck"
                                        size='2.5ch'
                                        // styleSheet={{
                                        // 	color: appConfig.theme.colors
                                        // 		.neutrals[200],
                                        // }}
                                    />
                                    <Text
                                        variant="body2"
                                        styleSheet={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            color: appConfig.theme.colors
                                                .neutrals[800],
                                            borderRadius: "2px",
                                            fontSize: '20px',
                                            fontWeight: 'bold',
                                            marginLeft: '8px'
                                        }}
                                    >
                                        {usernameData.followers}
                                    </Text>
                                
                                </Box>
								
                                <Box styleSheet={{
                                    display: "flex",
									justifyContent: "center",
									alignItems: "center",
                                    margin: '10px 0 0 10px'
                                }}>
								<Icon
									name="FaUserFriends"
                                    size='2.5ch'
								/>
                                    <Text
                                        variant="body4"
                                        styleSheet={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            color: appConfig.theme.colors
                                                .neutrals[800],
                                            borderRadius: "2px",
                                            fontSize: '20px',
                                            fontWeight: 'bold',
                                            marginLeft: '8px'
                                        }}
                                    >
                                        {usernameData.following}
                                    </Text>
                                </Box>
							</Box>
						)}
					</Box>
					{/* Photo Area */}
					{/* Formulário */}
					<Box
						as="form"
						styleSheet={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
							width: { xs: "100%", sm: "100%" },
							textAlign: "center",
							marginTop: "32px",
						}}
						onSubmit={handleSubmit}
					>
						<Text
							variant="h2"
							styleSheet={{
								color: appConfig.theme.colors.neutrals["100"],
								fontSize: "25px",
								fontWeight: "bold",
							}}
						>
							{userValido
								? `Bem-Vindo(a) ${username}, ao `
								: "Bem-Vindo(a) ao "}
							<Text
								styleSheet={{
									color: appConfig.theme.colors.secondary[
										"800"
									],
									fontSize: "25px",
									fontWeight: "bold",
									transition: ".4s",
								}}
							>
								{appConfig.name}!
							</Text>
						</Text>

						<Text
							variant="h3"
							styleSheet={{
								color: appConfig.theme.colors.neutrals["100"],
								fontSize: "20px",
								fontWeight: "bold",
								margin: "25px 0",
								textDecoration: `underline ${appConfig.theme.colors.primary[600]}`,
							}}
						>
							Faça o Login e Aproveite!
						</Text>

						<TextField
							fullWidth
							textFieldColors={{
								neutral: {
									textColor:
										appConfig.theme.colors.secondary[800],
									mainColor: "#fff",
									mainColorHighlight:
										appConfig.theme.colors.secondary[900],
									backgroundColor: `${appConfig.theme.colors.secondary["600"]}5a`,
								},
							}}
							styleSheet={{
                                transition: '.4s',

								border: `2px solid ${appConfig.theme.colors.secondary[800]}`,
								boxShadow: `inset 0px 0px 7px ${appConfig.theme.colors.secondary[800]}`,
								padding: "10px 15px",
								hover: {
									backgroundColor: `${appConfig.theme.colors.neutrals["000"]}5a`,
									boxShadow: `inset 0px 0px 7px ${appConfig.theme.colors.neutrals["000"]}5a`,
									border: `2px solid ${appConfig.theme.colors.neutrals[100]}5a`,
								},
								focus: {
									backgroundColor: `${appConfig.theme.colors.neutrals["000"]}5a`,
									boxShadow: `inset 0px 0px 7px ${appConfig.theme.colors.neutrals["000"]}5a`,
									border: `2px solid ${appConfig.theme.colors.neutrals[100]}5a`,
								},
								disabled: {
									backgroundColor: `${appConfig.theme.colors.secondary[900]}5a`,
								},
							}}
							onChange={(e) => {
								handleChange(e);
								if (userValido) carregaDadosUser(username);
							}}
							// onBlur={(e) => validaUsername(e.target.value)}
							required
							autoComplete="off"
							value={username || ""}
							disabled={loaded}
							placeholder="Insira seu username aqui..."
						/>
						<Button
							type="submit"
							label="Login"
							disabled={!userValido || logando}
							fullWidth
                            styleSheet={{
                                margin: '5px 0 3px 0',
                                padding: '10px 15px',
                                background: appConfig.theme.colors.primary[600],
                                transition: '.5s'
                            }}
							buttonColors={{
								contrastColor:
									appConfig.theme.colors.neutrals["000"],
								mainColor: appConfig.theme.colors.primary[800],
								mainColorLight:
									appConfig.theme.colors.primary[800],
								mainColorStrong:
									appConfig.theme.colors.primary[700],
							}}
						/>
						{!loaded ? (
							<Button
                            label="Login with Github"
								fullWidth
                                styleSheet={{
                                padding: '10px 15px',

                                }}
								buttonColors={{
									contrastColor:
										appConfig.theme.colors.neutrals["050"],
									mainColor:
										appConfig.theme.colors.neutrals["900"],
									mainColorLight:
										appConfig.theme.colors.neutrals["000"],
									mainColorStrong:
                                        appConfig.theme.colors.secondary[600],
								}}
								onClick={() => {
									api.githubLogin().then(() => {
										setLogando(true);
									});
								}}
							/> 
						) : (
							<Button
								label="Sign Out Github"
								fullWidth
                                styleSheet={{
                                    padding: '10px 15px',
    
                                    }}
								buttonColors={{
									contrastColor:
										appConfig.theme.colors.neutrals["050"],
									mainColor:
										appConfig.theme.colors.neutrals["900"],
									mainColorLight:
										appConfig.theme.colors.neutrals["000"],
									mainColorStrong:
										appConfig.theme.colors.neutrals["500"],
								}}
								onClick={() => {
									api.githubLogout();
									setUsername("");
									setLoaded(false);
									setUserValido(false);
								}}
							/> 
						)}
					</Box>
					{/* Formulário */}
				</Box>
			</Box>
		</>
	);
}
