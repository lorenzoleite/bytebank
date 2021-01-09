import { Conta } from "./Conta.js";

export class ContaSalario extends Conta {
    constructor(cliente) {
        super(0, cliente, 360);
    }

    sacar(valor) { //se eu não declarar o método sacar, vai ser lançado o erro do método abstrator Sacar em Conta
        const taxa = 1.01;
        return this._sacar(valor, taxa);
    }
}