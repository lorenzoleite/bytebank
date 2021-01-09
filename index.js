import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456789");

const gerente = new Gerente("Thiago", 5000, 12345678901);
gerente.cadastrarSenha("123");

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123"); //classe SistemaAutenticacao é polimorfismo, pois posso mudar de diretor pra gerente e continua herdando do mesmo lugar

const cliente = new Cliente("Lais", "12345678905", "456");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);

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