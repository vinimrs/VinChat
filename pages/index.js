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
import flaticon from "../public/flaticon.png";
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
	const [userValido, setUserValido] = useState({
		valido: false,
		mensagem: "",
	});
	const [logando, setLogando] = useState(true);
	const [loaded, setLoaded] = useState(false);
	const roteamento = useRouter();

	function handleChange(e) {
		setUsername(e.target.value);
		carregaDadosUser(e.target.value);
		setLogando(false);
		setLoaded(false);
	}

	function handleSubmit(e) {
		e.preventDefault();
		roteamento.push(`/chat?username=${username.toLowerCase()}`);
	}

	function carregaDadosUser(user) {
		fetch(`https://api.github.com/users/${user}`)
			.then((resp) => {
				if (resp.status === 200) {
					resp.json().then((respConvert) => {
						setUsernameData(respConvert);
						setUserValido({ valido: true, mensagem: "" });
					});
				} else if (resp.status === 404) {
					setUserValido({
						valido: false,
						mensagem: "O usuário inserido não existe.",
					});
				} else if (resp.status === 403) {
					setUserValido({
						valido: false,
						mensagem: "Limite excedido para uso da API.",
					});
				} else if (username.length < 2 && !username.trim()) {
					setUserValido({ valido: false, mensagem: "" });
				} else {
					setUserValido({
						valido: false,
						mensagem: "Algo deu errado!",
					});
				}
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
					backgroundPosition: "center",
					backgroundBlendMode: "multiply",
				}}
			>
				<Box
					styleSheet={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						flexWrap: "wrap",
						backgroundColor: `${appConfig.theme.colors.secondary[800]}ca`,
						boxShadow:
							"0 0 32px 0 appConfig.theme.colors.secondary[800]",
						backdropFilter: "blur( 4px )",
						maxWidth: "400px",
						borderRadius: "10px",
						padding: "32px",
						margin: "16px",
					}}
				>
					{/* boas-vindas*/}
					<Box
						styleSheet={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
                            justifyContent: 'center'
						}}
					>
                        <Image styleSheet={{
                            marginTop: '-15px'
                        }} src={flaticon.src} alt="Logo da plataforma" />
						<Text
							variant="h2"
							styleSheet={{
								color: appConfig.theme.colors.neutrals["100"],
								fontSize: "25px",
								fontWeight: "bold",
                                margin: '0px 0 20px 0'
							}}
						>
							{userValido && username.length > 2
								? `Bem-Vindo(a) ${username}, ao `
								: "Bem-Vindo(a) ao "}
							<Text
								styleSheet={{
									color: appConfig.theme.colors.primary[
										"600"
									],
									fontSize: "25px",
									fontWeight: "bold",
									transition: ".4s",
								}}
							>
								{appConfig.name}!
							</Text>
						</Text>
					</Box>
					{/* boas-vindas*/}
					{/* Photo Area */}
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
								userValido.valido && username.length > 2
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
											color: appConfig.theme.colors
												.neutrals[800],
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
											color: appConfig.theme.colors
												.neutrals[800],
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
							marginTop: "22px",
						}}
						onSubmit={handleSubmit}
					>
						<Text
							variant="h3"
							styleSheet={{
								color: appConfig.theme.colors.neutrals["100"],
								fontSize: "20px",
								fontWeight: "bold",
								margin: "0 0 25px 0",
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
								transition: ".4s",
								padding: "12px 15px",
								backgroundColor: `${appConfig.theme.colors.neutrals["000"]}de`,
								boxShadow: `inset 0px 0px 7px ${appConfig.theme.colors.secondary[600]}5a`,
								border: `2px solid ${appConfig.theme.colors.secondary[300]}`,
								hover: {
									backgroundColor: `transparent`,
									boxShadow: `inset 0px 0px 7px ${appConfig.theme.colors.neutrals["000"]}5a`,
									border: `2px solid ${appConfig.theme.colors.neutrals[100]}5a`,
									color: `${appConfig.theme.colors.neutrals[100]}ea`,
								},
								focus: {
									backgroundColor: `${appConfig.theme.colors.neutrals["050"]}ea`,
									boxShadow: `inset 0px 0px 7px ${appConfig.theme.colors.neutrals["000"]}5a`,
									border: `2px solid ${appConfig.theme.colors.neutrals[100]}5a`,
									color: `${appConfig.theme.colors.neutrals[900]}ea`,
								},
								disabled: {
									backgroundColor: `${appConfig.theme.colors.secondary[900]}5a`,
								},
							}}
							onChange={(e) => {
								handleChange(e);
							}}
							autoComplete="off"
							value={username || ""}
							disabled={loaded}
							placeholder="Insira seu username aqui..."
							required
						/>
						<Button
							type="submit"
							label="Login"
							disabled={!userValido.valido || logando}
							fullWidth
							styleSheet={{
								margin: "10px 0 3px 0",
								padding: "10px 15px",
								background: appConfig.theme.colors.primary[600],
								hover: {
									backgroundColor:
										appConfig.theme.colors.neutrals["100"],
									color: appConfig.theme.colors.primary[700],
								},
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
								buttonColors={{
									contrastColor:
										appConfig.theme.colors.neutrals["900"],
									mainColor:
										appConfig.theme.colors.neutrals["100"],
									mainColorLight:
										appConfig.theme.colors.secondary[600],
									mainColorStrong:
										appConfig.theme.colors.neutrals["900"],
								}}
								styleSheet={{
									padding: "10px 15px",
									margin: "3px 0 5px 0",
									color: appConfig.theme.colors.neutrals[
										"900"
									],
									hover: {
										color: appConfig.theme.colors.neutrals[
											"100"
										],
									},
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
									padding: "10px 15px",
									margin: "3px 0 5px 0",
									color: appConfig.theme.colors.neutrals[
										"100"
									],
									hover: {
										color: appConfig.theme.colors.neutrals[
											"900"
										],
									},
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
									setUserValido({
										...userValido,
										valido: false,
									});
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
