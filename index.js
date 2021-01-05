import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente(); //instanciando um objeto
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;

const conta2 = new ContaCorrente();
conta2.cliente = cliente2; //dessa forma já crio o cliente relacionado ao atributo cliente da conta corrente
conta2.agencia = 102;
//conta2.cliente = null; //tipo null na prática
// conta2.cliente = new Cliente(); //não é o ideal, porque posso instanciar qualquer outro valor
// conta2.agencia = 102;
// conta2.cliente.nome = "Alice";
// conta2.cliente.cpf = 88822233309;

contaCorrenteRicardo.depositar(500);
const valorSacado = contaCorrenteRicardo.sacar(50);
contaCorrenteRicardo.transferir(150, conta2); //conta2 é o objeto inteiro da conta, qualquer alteração que fizer dentro do metodo, será refletido no objeto, não é desejável

console.log(contaCorrenteRicardo);
console.log(conta2.cliente);
console.log(conta2.saldo);