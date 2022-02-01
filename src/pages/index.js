import { Box } from "@skynexui/components";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import appConfig from "../../config.json";
import backgroundImg from "../../public/bg2.jpg";
import api from "../api";
import BoasVindas from "../components/BoasVindas";
import InfosUserGithub from "../components/InfosUserGithub";
import FormularioLogin from "../components/FormularioLogin";

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

	function handleGithubLogout() {
		api.githubLogout();
		setUsername("");
		setLoaded(false);
		setUserValido({
			...userValido,
			valido: false,
		});
	}

	function handleGithubLogin() {
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
				<BoasVindas username={username} userValido={userValido} />
				<InfosUserGithub
					username={username}
					userValido={userValido}
					usernameData={usernameData}
				/>
				<FormularioLogin
					username={username}
					userValido={userValido}
					handleSubmit={handleSubmit}
					handleChange={handleChange}
					githubLogout={handleGithubLogout}
					githubLogin={handleGithubLogin}
					loaded={loaded}
					logando={logando}
				/>
			</Box>
		</Box>
	);
}
