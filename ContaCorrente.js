import {Cliente} from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0; //stributo estático que vai valer pra todas as contas da classe conta corrente
    //agencia; //atributo público
    //_cliente; //necessário para não alterar o cliente no meio do código => declarei no construtor posteriomente

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

    constructor(cliente, agencia) {
        this.agencia = agencia;
        this.cliente = cliente;
        this._saldo = 0;
        ContaCorrente.numeroDeContas += 1; //não podemos usar o this, pq ele se refere a atributo daquela conta em especifico, mas numero de contas é estático ent chamo a classe.
    }

    depositar(valor) {
        if (valor <= 0) return; //early return
        this._saldo += valor;
    }

    sacar(valor) {
        if (this._saldo < valor) return; //early return
        this._saldo -= valor;
        return valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}
