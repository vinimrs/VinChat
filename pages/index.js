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
import api from "../api";

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
        fetch(
            `https://api.github.com/users/${user}`
        )
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

	console.log(userValido, username, logando, loaded, usernameData);
	return (
		<>
			<Box
				styleSheet={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					backgroundColor: appConfig.theme.colors.primary[500],
					backgroundImage:
						"url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					backgroundBlendMode: "multiply",
				}}
			>
				<Box
					styleSheet={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						flexDirection: {
							xs: "column",
							sm: "row",
						},
						width: "100%",
						maxWidth: "700px",
						borderRadius: "5px",
						padding: "32px",
						margin: "16px",
						boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
						backgroundColor: appConfig.theme.colors.neutrals[700],
					}}
				>
					{/* Formulário */}
					<Box
						as="form"
						styleSheet={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
							width: { xs: "100%", sm: "50%" },
							textAlign: "center",
							marginBottom: "32px",
						}}
						onSubmit={handleSubmit}
					>
						<Title tag="h2">Boas vindas de volta!</Title>
						<Text
							variant="body3"
							styleSheet={{
								marginBottom: "32px",
								color: appConfig.theme.colors.neutrals[300],
							}}
						>
							{appConfig.name}
						</Text>
                        

						<TextField
							fullWidth
							textFieldColors={{
								neutral: {
									textColor:
										appConfig.theme.colors.neutrals[200],
									mainColor:
										appConfig.theme.colors.neutrals[900],
									mainColorHighlight:
										appConfig.theme.colors.primary[500],
									backgroundColor:
										appConfig.theme.colors.neutrals[800],
								},
							}}
							onChange={(e) => {
                                handleChange(e);
                                if(userValido) carregaDadosUser(username);
                            }
                            }
							// onBlur={(e) => validaUsername(e.target.value)}
							required
							autoComplete="off"
							value={username || ""}
							disabled={loaded}
						/>
						<Button
							type="submit"
							label="Login"
							disabled={!userValido || logando}
							fullWidth
							buttonColors={{
								contrastColor:
									appConfig.theme.colors.neutrals["000"],
								mainColor: appConfig.theme.colors.primary[500],
								mainColorLight:
									appConfig.theme.colors.primary[400],
								mainColorStrong:
									appConfig.theme.colors.primary[600],
							}}
						/>
                        {!loaded ? (
                            <Button
                                label="Login with Github"
                                fullWidth
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
                                    api.githubLogin().then(() => {
                                        setLogando(true);
                                    });
                                }}
                            />
                        ) : (
                            <Button
                                label="Sign Out Github"
                                fullWidth
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

					{/* Photo Area */}
					<Box
						styleSheet={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							maxWidth: "300px",
							padding: "16px",
							backgroundColor:
								appConfig.theme.colors.neutrals[800],
							border: "1px solid",
							borderColor: appConfig.theme.colors.neutrals[999],
							borderRadius: "10px",
							flex: 1,
							minHeight: "240px",
						}}
					>
						<Image
							styleSheet={{
								borderRadius: "50%",
								marginBottom: "16px",
							}}
							src={
								userValido && username.length > 2
									? `https://github.com/${username}.png`
									: defaultImage.src
							}
						/>
						<Text
							variant="body4"
							styleSheet={{
								color: appConfig.theme.colors.neutrals[200],
								backgroundColor:
									appConfig.theme.colors.neutrals[900],
								padding: "3px 10px",
								borderRadius: "1000px",
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
								<Icon
									name="FaUserCheck"
									styleSheet={{
										color: appConfig.theme.colors
											.neutrals[200],
									}}
								/>
								<Text
									variant="body4"
									styleSheet={{
										color: appConfig.theme.colors
											.neutrals[200],
										backgroundColor:
											appConfig.theme.colors
												.neutrals[900],
										padding: "3px 10px",
										borderRadius: "1000px",
									}}
								>
									Seguidores: {usernameData.followers}
								</Text>
								<Icon
									name="FaUserFriends"
									styleSheet={{
										color: appConfig.theme.colors
											.neutrals[200],
									}}
								/>
								<Text
									variant="body4"
									styleSheet={{
										color: appConfig.theme.colors
											.neutrals[200],
										backgroundColor:
											appConfig.theme.colors
												.neutrals[900],
										padding: "3px 10px",
										borderRadius: "1000px",
									}}
								>
									Seguindo: {usernameData.following}
								</Text>
							</Box>
						)}
					</Box>
					{/* Photo Area */}
				</Box>
			</Box>
		</>
	);
}
