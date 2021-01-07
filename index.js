import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Ricardo", 11122233309); //instanciando um objeto
const cliente2 = new Cliente("Alice", 88822233309); //modo de usar o construtor usado na classe Cliente, o nome e cpf só são cadastrados uma vez

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
const conta2 = new ContaCorrente(cliente2, 102); //dessa forma já crio o cliente relacionado ao atributo cliente da conta corrente

const contaPoupanca = new ContaPoupanca(100, cliente1, 1001);
//conta2.cliente = null; //tipo null na prática
//conta2.cliente = new Cliente(); //não é o ideal, porque posso instanciar qualquer outro valor
//conta2.agencia = 102;
//conta2.cliente.nome = "Alice";
//conta2.cliente.cpf = 88822233309;

contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.transferir(0, conta2); //conta2 é o objeto inteiro da conta, qualquer alteração que fizer dentro do metodo, será refletido no objeto, não é desejável
contaCorrenteRicardo.sacar(100);

console.log(contaCorrenteRicardo);
console.log(contaPoupanca);
//console.log(conta2.cliente);
//console.log(conta2.saldo);
//console.log(conta2.numeroDeContas);