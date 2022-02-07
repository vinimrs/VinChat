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

const setMensagem = (textoMensagem, usuario, userImage) => {
    
    const user = supabaseClient.auth.user();
    const provider = user ? user.app_metadata.provider : 'none';
	return supabaseClient
		.from("mensagens")
		.insert({ de: usuario, texto: textoMensagem, provider: provider, userImage: userImage })
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

function checkUser() {
    const user = supabaseClient.auth.user();
    console.log(user);
	return user;
}

const githubLogin = async () => {
	const user = await supabaseClient.auth.signIn({
		provider: "github",
	});
	return user;
};

const userLogout = async () => {
	await supabaseClient.auth.signOut();
};

const googleLogin = async () => {
    const user = await supabaseClient.auth.signIn({
        provider: "google"
    });
    return user;
};

const api = {
	getMensagens,
	setMensagem,
	deletaMensagem,
	escutaEmTempoReal,
	githubLogin,
	userLogout,
	checkUser,
    googleLogin,
};

export default api;
