import {Cliente} from "./Cliente.js";

export class ContaCorrente {
    agencia; //atributo público
    _cliente; //necessário para não alterar o cliente no meio do código

    set cliente(novoValor) { //o set serve para usarmos a regra de atribuição a uma variavel ou atributo somente uma vez, poupando codigo
        if (novoValor instanceof Cliente) { //para proteger que eu só passe instancias de objetos clientes
            this._cliente = novoValor;
        }
    }

    get cliente() { //assessores são sempre públicos
        return this._cliente;
    }

    _saldo = 0;

    get saldo() { //usando somente o get no saldo, não é possível alterar o saldo lá no index, pois vira um atributo somente de leitura. encapsulando mais o sistema
        return this._saldo;
    }

    depositar(valor) {
        if (valor <= 0) return; //early return
        this._saldo += valor;
        console.log(`Depósito de R$ ${valor},00 realizado!`);
    }

    sacar(valor) {
        if (this._saldo < valor) return; //early return
        this._saldo -= valor;
        console.log(`Saque de R$ ${valor},00 realizado!`);
        return valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        console.log(`Valor de R$ ${valor},00 transferido!`);
    }
}
