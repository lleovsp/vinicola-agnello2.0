var nomeVinho = prompt("Digite o nome do vinho:");
if (nomeVinho === null || nomeVinho === "" || nomeVinho === " ") {
	alert("digite um valor não vazio para o vinho");
	nomeVinho = prompt("Digite o nome do vinho");
	alert("Nome cadastrado com sucesso! Veja os detalhes no console");
	console.log("Nome do vinho: " + nomeVinho);
} else {
	alert("Nome cadastrado com sucesso! Veja os detalhes no console");
	console.log("Nome do vinho: " + nomeVinho);
}

var tipoVinho = prompt(
	"Digite o tipo do vinho (Tinto, Branco ou Rosé):"
).toLowerCase();
if (tipoVinho != "tinto" || tipoVinho != "branco" || tipoVinho != "rosé") {
	alert(`${tipoVinho} não é uma das opcões de vinho`);
	tipoVinho = prompt("Digite o tipo do vinho (Tinto, Branco ou Rosé):");
	alert("Tipo do vinho cadastrado com sucesso! Veja os detalhes no console");
	console.log("Tipo do vinho: " + tipoVinho);
} else {
	alert("tipo do vinho cadastrado com sucesso! Veja os detalhes no console");
	console.log("Tipo do vinho: " + tipoVinho);
}

var safraVinho = prompt("Digite o ano da safra do vinho:");
if (safraVinho === null || safraVinho === "" || safraVinho === " ") {
	alert("Digite um valor não vazio para o ano");
	safraVinho = prompt("Digite o ano da safra do vinho:");
	alert("ano da safra cadastrado com sucesso! Veja os detalhes no console");
	console.log("ano da safra: " + safraVinho);
} else {
	alert(
		"Ano da Safra do vinho cadastrado com sucesso! Veja os detalhes no console"
	);
	console.log("Ano da Safra: " + safraVinho);
}

var quantidadeEstoque = prompt("Digite a quantidade em estoque do vinho:");
//validação de entrada de dados
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

// verificação de estoque
if (parseInt(quantidadeEstoque) < 5) {
	console.log("ESTOQUE BAIXO");
}
