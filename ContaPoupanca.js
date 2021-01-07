import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta { //extends => herança de classe de uma mãe
    constructor(saldoInicial, cliente, agencia) {
        super(saldoInicial, cliente, agencia); //necessário usar o super pra heranças, quando precisa-se chamar o construtor da classe mãe
    }

    sacar(valor) {
        const taxa = 1.02;
        return this._sacar(valor, taxa); //poderia usar super._sacar()
    }
}