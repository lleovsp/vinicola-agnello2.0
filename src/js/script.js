let totalCadastros = 0;
let vinhosEstoqueBaixo = 0;
let idadeVinho = 0;
let repeticao = true;
let nomeVinho = "";
let tipoVinho = "";
let safraVinho = "";
let quantidadeEstoque = "";


function wineResgistry() {
	while (repeticao){
		nomeVinho = prompt("Digite o nome do vinho:");
		nameWine();

		tipoVinho = prompt("Digite o tipo do vinho (Tinto, Branco ou Rosé):").toLowerCase();
		typeWine();

		safraVinho = parseInt(prompt("Digite o ano da safra do vinho:"));
		yearWine();
		ageWine();

		quantidadeEstoque = prompt("Digite a quantidade em estoque do vinho:");
		stockWine();

		let rep = prompt("Deseja cadastrar um novo vinho?").toUpperCase();
		if (rep != "SIM"){
			repeticao = false;
		}

		totalCadastros++;
	}
}

function nameWine() {
	if (nomeVinho === null || nomeVinho === "" || nomeVinho === " ") {
		alert("digite um valor não vazio para o vinho");
		nomeVinho = prompt("Digite o nome do vinho");
		alert("Nome cadastrado com sucesso! Veja os detalhes no console");
		console.log("Nome do vinho: " + nomeVinho);
} 
	else {
		alert("Nome cadastrado com sucesso! Veja os detalhes no console");
		console.log("Nome do vinho: " + nomeVinho);
}
}
function typeWine() { 
	if (tipoVinho != "tinto" || tipoVinho != "branco" || tipoVinho != "rosé") {
		alert(`${tipoVinho} não é uma das opcões de vinho`);
		tipoVinho = prompt("Digite o tipo do vinho (Tinto, Branco ou Rosé):");
		alert("Tipo do vinho cadastrado com sucesso! Veja os detalhes no console");
		console.log("Tipo do vinho: " + tipoVinho);
} 
	else {
		alert("tipo do vinho cadastrado com sucesso! Veja os detalhes no console");
		console.log("Tipo do vinho: " + tipoVinho);
}
}
function yearWine() {
	if (safraVinho === null || safraVinho === "" || isNaN(safraVinho)) {
		alert("Digite um valor não vazio ou string para o ano");
		safraVinho = prompt("Digite o ano da safra do vinho:");
		alert("ano da safra cadastrado com sucesso! Veja os detalhes no console");
		console.log("ano da safra: " + safraVinho);
} 
	else {
		alert("Ano da Safra do vinho cadastrado com sucesso! Veja os detalhes no console");
		console.log("Ano da Safra: " + safraVinho);
}
}
function stockWine() {
	if (
		quantidadeEstoque === null ||
		quantidadeEstoque === "" ||
		quantidadeEstoque === " "
	) {
		alert("Digite um valor não vazio para a quantidade de estoque");
		quantidadeEstoque = prompt("Digite o estoque do vinho:");
		alert("Quantidade cadastrada com sucesso!");
		console.log("estoque: " + quantidadeEstoque);
	} else {
		alert(
			"Quantidade cadastrada com sucesso! Verificar o Console para classificação e detalhes da quantidade de estoque"
		);
		console.log("estoque: " + quantidadeEstoque);
	}
}
function ageWine() {
	idadeVinho = 2025 - safraVinho;
	if (idadeVinho <= 3) {
		alert("Verifique a classificação da idade do vinho no console");
		console.log("Este é um Vinho Jovem: " + idadeVinho + " anos");
	}
	else if (idadeVinho > 3 && idadeVinho <= 15) {
		alert("Verifique a classificação da idade do vinho no console");
		console.log("Este é um Vinho Amadurecido : " + idadeVinho + " anos");
	} else {
		alert("Verifique a classificação da idade do vinho no console");
		console.log("Este é um Vinho Antigo : " + idadeVinho + " anos");
	}
}


// verificação de estoque
if (parseInt(quantidadeEstoque) < 5) {
	console.log("ESTOQUE BAIXO");
}

function checkStock(stock) {
	if (stock !== null && stock !== "" && !isNaN(stock)) {
		if (stock < 5) {
			console.log(`ESTOQUE BAIXO: ${stock}`);
			vinhosEstoqueBaixo++;
		} else {
			console.log(`Estoque atual: ${stock}`);
		}
	}
}


// Contabiliza o cadastro
wineResgistry();

// Exibe totais
alert("Cadastro finalizado!");
alert("Total de cadastros realizados: " + totalCadastros);

