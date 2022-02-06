import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_API_KEY = process.env.NEXT_PUBLIC_SUPABASE_API_KEY;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_API_KEY);

const getMensagens = () => {
	return supabaseClient
		.from("mensagens")
		.select("*")
		.order("id", { ascending: false })
		.then(({ data }) => data);
};

const setMensagem = (textoMensagem, usuario) => {
	return supabaseClient
		.from("mensagens")
		.insert({ de: usuario, texto: textoMensagem })
		.then(({ data }) => data[0]);
};

const deletaMensagem = (mensagemId) => {
	return supabaseClient
		.from("mensagens")
		.delete()
		.match({ id: mensagemId })
		.then((dados) => dados);
};

// Simulando um websocked
const escutaEmTempoReal = (adicionaMensagem) => {
	return supabaseClient
		.from("mensagens")
		.on("INSERT", (dados) => {
			adicionaMensagem(dados.new);
		})
		.subscribe();
};

async function checkUser() {
	return await supabaseClient.auth.user();
}

const githubLogin = async () => {
	const user = await supabaseClient.auth.signIn({
		provider: "github",
	});
	return user;
};

const githubLogout = async () => {
	await supabaseClient.auth.signOut();
};

const api = {
	getMensagens,
	setMensagem,
	deletaMensagem,
	escutaEmTempoReal,
	githubLogin,
	githubLogout,
	checkUser,
};

export default api;
