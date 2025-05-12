let totalCadastros = 0;
let vinhosEstoqueBaixo = 0;
let controller = "s";
let vinhoMaisVelho = "";

// Cadastro do Produto
while (true) {
	// Solicita o Nome do vinho ao usuário e verifica se a entrada dos dados é válida
	let nomeVinho = prompt("Digite o nome do vinho:");
	nameWine(nomeVinho);

	// Solicita o Tipo de Vinho cadastrado e verifica se a entrada dos dados é válida
	let tipoVinho = prompt(
		"Digite o tipo do vinho (Tinto, Branco ou Rosé):"
	).toLowerCase();
	typeWine(tipoVinho);

	// Solicita a Safra do Vinho cadastrado e verifica se a entrada dos dados é válida
	let safraVinho = prompt("Digite o ano da safra do vinho:");
	yearWine(safraVinho);
	ageWine(safraVinho);

	// Solicita a Quantidade de Vinho cadastrada no Estoque e verifica se a entrada dos dados é válida
	let quantidadeEstoque = prompt("Digite a quantidade em estoque do vinho:");
	stockWine(quantidadeEstoque);
	vinhosEstoqueBaixo += checkStock(quantidadeEstoque);

	// atualizações
	vinhoMaisVelho = oldestWine(vinhoMaisVelho, safraVinho);
	totalCadastros += 1;
	msgAlerLog("Cadastro finalizado!");

	// Verificação de saída
	while (true) {
		controller = prompt("Deseja continuar[s/n]?");

		if (controller === "s" || controller === "n") {
			console.log(" ");
			break;
		} else {
			msgAlerLog("Digite uma opção válida");
		}
	}
	if (controller === "n") {
		break;
	}
}

// exibição dos dados finais
msgAlerLog(
	"Verifique no console as informações!",
	`Idade do vinho mais velho: ${vinhoMaisVelho}`
);
msgAlerLog(null, `quantidade de cadastros: ${totalCadastros}`);
msgAlerLog(
	null,
	`quantidade de vinhos com estoque baixo(menor que 5): ${vinhosEstoqueBaixo}`
);

function nameWine(name) {
	while (true) {
		if (isNull(name)) {
			msgAlerLog("digite um valor não vazio para o vinho");
			name = prompt("Digite o nome do vinho: ");
		} else {
			msgAlerLog(
				"Nome cadastrado com sucesso! Veja os detalhes no console",
				"Nome do vinho: " + name
			);
			break;
		}
	}
}
function typeWine(type) {
	type = type.trim();
	while (true) {
		if (type === "tinto" || type === "branco" || type === "rosé") {
			msgAlerLog(
				"tipo do vinho cadastrado com sucesso! Veja os detalhes no console",
				"Tipo do vinho: " + type
			);
			break;
		} else {
			msgAlerLog(`${type} não é uma das opcões de vinho`);
			type = prompt("Digite o tipo do vinho (Tinto, Branco ou Rosé): ");
		}
	}
}
function yearWine(year) {
	let regex = /^[0-9]+$/;
	while (true) {
		if (isNull(year) || !regex.test(year)) {
			msgAlerLog("Digite um valor válido para o ano");
			year = prompt("Digite o ano da safra do vinho:");
		} else {
			msgAlerLog(
				"Ano da Safra do vinho cadastrado com sucesso! Veja os detalhes no console",
				"Ano da Safra: " + year
			);
			break;
		}
	}
}
function ageWine(year) {
	let age = 2025 - parseInt(year);
	let msgAlert;
	let msgConsole;
	if (age <= 3) {
		msgAlert = "Verifique a classificação da idade do vinho no console";
		msgConsole = "Este é um Vinho Jovem: " + age + " anos";
	} else if (age > 3 && age <= 15) {
		msgAlert = "Verifique a classificação da idade do vinho no console";
		msgConsole = "Este é um Vinho Amadurecido : " + age + " anos";
	} else {
		msgAlert = "Verifique a classificação da idade do vinho no console";
		msgConsole = "Este é um Vinho Antigo : " + age + " anos";
	}
	msgAlerLog(msgAlert, msgConsole);
}
function stockWine(stock) {
	let regex = /^[0-9]+$/;
	while (true) {
		if (isNull(stock) || !regex.test(stock)) {
			msgAlerLog("Digite um valor válido para a quantidade de estoque");
			stock = prompt("Digite o estoque do vinho:");
		} else {
			msgAlerLog(
				"Quantidade cadastrada com sucesso! Verificar o Console para classificação e detalhes da quantidade de estoque",
				"estoque: " + stock
			);
			break;
		}
	}
}
function msgAlerLog(alertMsg = null, consoleMsg = null) {
	if (alertMsg !== null) {
		alert(alertMsg);
	}
	if (consoleMsg !== null) {
		console.log(consoleMsg);
	}
}
function checkStock(stock) {
	stock = parseInt(stock);
	if (stock < 5) {
		console.log(`ESTOQUE BAIXO`);
		return 1;
	} else {
		return 0;
	}
}
function isNull(data) {
	if (data === null || data === undefined) {
		return true;
	} else if (data.trim() === "") {
		return true;
	} else {
		return false;
	}
}
function oldestWine(currentOldest, currentWine) {
	if (currentOldest === "") {
		return currentWine;
	}
	currentOldest = parseInt(currentOldest);
	currentWine = parseInt(currentWine);
	if (currentWine < currentOldest) {
		return currentWine;
	} else {
		return currentOldest;
	}
}
