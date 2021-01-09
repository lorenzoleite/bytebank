import { Cliente } from "./../Cliente.js";

export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        if (this.constructor == Conta) {
            throw new Error("Você não deveria instanciar um objeto do tipo Conta!"); //a classe conta virou uma classe abstrata, não pode ser instanciada, somente herdada
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    set cliente(novoValor) { //o set serve para usarmos a regra de atribuição a uma variavel ou atributo somente uma vez, poupando codigo
        if (novoValor instanceof Cliente) { //para proteger que eu só passe instancias de objetos clientes
            this._cliente = novoValor;
        }
    }

    get cliente() { //assessores são sempre públicos
        return this._cliente;
    }

    get saldo() { //usando somente o get no saldo, não é possível alterar o saldo lá no index, pois vira um atributo somente de leitura. encapsulando mais o sistema
        return this._saldo;
    }

    depositar(valor) {
        if (valor <= 0) return; //early return
        this._saldo += valor;
    }

    sacar(valor) { //o método sacar precisa ser sobrescrito em todas as classes filhas, pois ele sempre terá uma taxa diferente. quando isso acontece, ele torna-se inútil ter coisa dentro e vira abstrato
        throw new Error("O método Sacar da Conta é abstrato!");
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if (this._saldo < valorSacado) return 0; //early return
        this._saldo -= valorSacado;
        return valorSacado;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}