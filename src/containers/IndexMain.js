import { Box, TextField, Button, Text } from "@skynexui/components";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import appConfig from "../../config.json";
import api from "../api";
import BoasVindas from "../components/BoasVindas";
import InfosPaginaInicial from "../components/InfosPaginaInicial";

function IndexMain() {
	const [username, setUsername] = useState("");
	const [usernameData, setUsernameData] = useState({});
	const [userValido, setUserValido] = useState(false);
	const roteamento = useRouter();

	function handleChange(e) {
		setUsername(e.target.value);
		carregaDadosUser(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		roteamento.push(
			`/chat?username=${username}&provider=none`
		);
	}

	function carregaDadosUser(user) {
		fetch(`https://api.github.com/users/${user}`)
			.then((resp) => {
				if (resp.status === 200) {
					resp.json().then((respConvert) => {
						setUsernameData(respConvert);
						setUserValido(true);
					});
				} else if (resp.status === 404) {
					setUserValido(false);
					console.log("O usuário inserido não existe.");
				} else if (resp.status === 403) {
					setUserValido(false);
					console.log("Limite excedido para uso da API.");
				} else if (username.length < 2 && !username.trim()) {
					setUserValido(false);
				} else {
					setUserValido(false);
					console.log("Algo deu errado!");
				}
			})
			.catch((erro) => {
				throw new Error(erro);
			});
	}

	// function githubLogin() {
		
	// }

	// function googleLogin() {
	// 	api.googleLogin().then();
	// }

	useEffect(() => {
		const checaEstaLogado = async () => {
			const resp = api.checkUser();
			if (!resp) return;
			console.log(resp);
			if (resp.app_metadata.provider === "google") {
				roteamento.push(
					`/chat?username=${resp.user_metadata.name.replace(
						" ",
						"_"
					)}&provider=google`
				);
			} else if (resp.app_metadata.provider === "github")
				roteamento.push(
					`/chat?username=${resp.user_metadata.user_name.replace(
						" ",
						"_"
					)}&provider=github`
				);
		};
		checaEstaLogado();
		window.addEventListener("hashchange", () => {
			checaEstaLogado();
		});
	}, []);

	console.log(usernameData);
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
					placeholder="Insira seu username do Github..."
					required
				/>
				<Button
					type="submit"
					label="Login"
					disabled={!userValido}
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
				<Button
					label="Login with Github"
					fullWidth
					buttonColors={{
						contrastColor: appConfig.theme.colors.neutrals["900"],
						mainColor: appConfig.theme.colors.neutrals["100"],
						mainColorLight: appConfig.theme.colors.secondary[600],
						mainColorStrong: appConfig.theme.colors.neutrals["900"],
					}}
					styleSheet={{
						padding: "10px 15px",
						margin: "3px 0 5px 0",
						color: appConfig.theme.colors.neutrals["900"],
						hover: {
							color: appConfig.theme.colors.neutrals["100"],
						},
					}}
					onClick={api.githubLogin}
				/>
				<Button
					label="Login with Google"
					fullWidth
					buttonColors={{
						contrastColor: appConfig.theme.colors.neutrals["900"],
						mainColor: appConfig.theme.colors.neutrals["100"],
						mainColorLight: appConfig.theme.colors.secondary[600],
						mainColorStrong: appConfig.theme.colors.neutrals["900"],
					}}
					styleSheet={{
						padding: "10px 15px",
						margin: "3px 0 5px 0",
						color: appConfig.theme.colors.neutrals["900"],
						hover: {
							color: appConfig.theme.colors.neutrals["100"],
						},
					}}
					onClick={api.googleLogin}
				/>
			</Box>
		</>
	);
}

export default IndexMain;
