import { Box, TextField, Button, Text } from "@skynexui/components";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import appConfig from "../../config.json";
import api from "../api";
import BoasVindas from "../components/BoasVindas";
import InfosPaginaInicial from "../components/InfosPaginaInicial";

function MainPaginaInicial() {
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
			.catch((erro) => {
				throw new Error(erro);
			});
	}

	function githubLogout() {
		api.githubLogout();
		setUsername("");
		setLoaded(false);
		setUserValido({
			...userValido,
			valido: false,
		});
	}

	function githubLogin() {
		api.githubLogin().then(() => {
			setLogando(true);
		});
	}

	useEffect(() => {
		carregaUser();
		window.addEventListener("hashchange", () => {
			carregaUser();
		});
		setLogando(false);
	}, []);

	return (
		<>
			<BoasVindas username={username} userValido={userValido} />
			<InfosPaginaInicial
				username={username}
				userValido={userValido}
				usernameData={usernameData}
			/>
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
							textColor: appConfig.theme.colors.secondary[800],
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
						contrastColor: appConfig.theme.colors.neutrals["000"],
						mainColor: appConfig.theme.colors.primary[800],
						mainColorLight: appConfig.theme.colors.primary[800],
						mainColorStrong: appConfig.theme.colors.primary[700],
					}}
				/>
				{!loaded ? (
					<Button
						label="Login with Github"
						fullWidth
						buttonColors={{
							contrastColor:
								appConfig.theme.colors.neutrals["900"],
							mainColor: appConfig.theme.colors.neutrals["100"],
							mainColorLight:
								appConfig.theme.colors.secondary[600],
							mainColorStrong:
								appConfig.theme.colors.neutrals["900"],
						}}
						styleSheet={{
							padding: "10px 15px",
							margin: "3px 0 5px 0",
							color: appConfig.theme.colors.neutrals["900"],
							hover: {
								color: appConfig.theme.colors.neutrals["100"],
							},
						}}
						onClick={githubLogin}
					/>
				) : (
					<Button
						label="Sign Out Github"
						fullWidth
						styleSheet={{
							padding: "10px 15px",
							margin: "3px 0 5px 0",
							color: appConfig.theme.colors.neutrals["100"],
							hover: {
								color: appConfig.theme.colors.neutrals["900"],
							},
						}}
						buttonColors={{
							contrastColor:
								appConfig.theme.colors.neutrals["050"],
							mainColor: appConfig.theme.colors.neutrals["900"],
							mainColorLight:
								appConfig.theme.colors.neutrals["000"],
							mainColorStrong:
								appConfig.theme.colors.neutrals["500"],
						}}
						onClick={githubLogout}
					/>
				)}
			</Box>
		</>
	);
}

export default MainPaginaInicial;
