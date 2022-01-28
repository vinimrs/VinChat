import {
	Box,
	Button,
	TextField,
	Image,
	Text,
	Icon,
} from "@skynexui/components";
import { useEffect, useReducer, useState } from "react";
import { useRouter } from "next/router";
import appConfig from "../config.json";
import defaultImage from "../public/default.jpg";

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
	const roteamento = useRouter();

	function handleChange(e) {
		setUsername(e.target.value);
        validaUsername();
	}

	function handleSubmit(e) {
		e.preventDefault();
		localStorage.setItem("username", JSON.stringify(username));
		roteamento.push("/chat");
	}

	function validaUsername() {
		fetch(`https://api.github.com/users/${username}`)
			.then((resp) => resp.json())
			.then((respConvert) => {
                if (respConvert.message === "Not Found") setUserValido(false);
				else setUserValido(true);
			})
			.catch((erro) => console.log(erro));
	}

	useEffect(() => {
		fetch(`https://api.github.com/users/${username}`)
			.then((resp) => resp.json())
			.then((respConvert) => setUsernameData(respConvert))
			.catch((erro) => console.log(erro));
	}, [username]);

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
							onChange={handleChange}
							required
						/>
						<Button
							type="submit"
							label="Login"
							disabled={userValido}
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
								username.length > 2
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
							{userValido
								? usernameData.name
								: "Usuário Desconhecido"}
						</Text>
						{userValido && (
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
