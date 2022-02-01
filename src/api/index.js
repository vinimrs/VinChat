import { createClient } from "@supabase/supabase-js";

const SUPABASE_API_KEY =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzMzMDU5NCwiZXhwIjoxOTU4OTA2NTk0fQ.YM105BCPMAwKQHJTsZarKFFvw0JyL4fl_DMjYkTN4ds";
const SUPABASE_URL = "https://hvwecieyitwycexeynyd.supabase.co";
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
	const user = supabaseClient.auth.user();
	return user;
}

const githubLogin = async () => {
	const user = await supabaseClient.auth.signIn({
		provider: "github",
	});
	return user;
};

const githubLogout = async () => {
	const { error } = await supabaseClient.auth.signOut();
	console.log(error);
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
