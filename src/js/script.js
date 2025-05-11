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
	while (nomeVinho === null || nomeVinho === "" || nomeVinho === " ") {
		alert("Digite um valor não vazio para o vinho");
		nomeVinho = prompt("Digite o nome do vinho:");
	}
	alert("Nome cadastrado com sucesso! Veja os detalhes no console");
	console.log("Nome do vinho: " + nomeVinho);
} 


function typeWine() { 
		while (tipoVinho !== "tinto" && tipoVinho !==  "branco" && tipoVinho !== "rosé " && tipoVinho !== "Tinto" && tipoVinho !==  "Branco" && tipoVinho !== "Rosé " && tipoVinho !== "Rose" && tipoVinho !== "rose") {
			alert("Digite um tipo válido para o vinho");
			tipoVinho = prompt("Digite o tipo do vinho (Tinto, Branco ou Rosé):").toLowerCase();
		}
	alert("Tipo cadastrado com sucesso! Veja os detalhes no console");
	console.log("Tipo do vinho: " + tipoVinho);

	}


function yearWine() {
	while (safraVinho === null || safraVinho === "" || isNaN(safraVinho)) {
		alert("Digite um valor não vazio para o ano");
		safraVinho = parseInt(prompt("Digite o ano da safra do vinho:"));
	}
	alert("Ano da Safra do vinho cadastrado com sucesso! Veja os detalhes no console");
	console.log("Ano da Safra: " + safraVinho);

}
function stockWine() {
	while (quantidadeEstoque === null || quantidadeEstoque === "" || isNaN(quantidadeEstoque)) {
		alert("Digite um valor não vazio para a quantidade de estoque");
		quantidadeEstoque = prompt("Digite o estoque do vinho:");
	}
	alert("Quantidade cadastrada com sucesso!");
	console.log("estoque: " + quantidadeEstoque);

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

