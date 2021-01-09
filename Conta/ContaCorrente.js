import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta { //extends => herança de classe de uma mãe
    static numeroDeContas = 0; //stributo estático que vai valer pra todas as contas da classe conta corrente
    //agencia; //atributo público
    //_cliente; //necessário para não alterar o cliente no meio do código => declarei no construtor posteriomente

    constructor(cliente, agencia) {
        super(0, cliente, agencia); //necessário usar o super pra heranças, quando precisa-se chamar o construtor da classe mãe. o super sempre serve pra qualquer método para invocar da mãe
        ContaCorrente.numeroDeContas += 1; //não podemos usar o this, pq ele se refere a atributo daquela conta em especifico, mas numero de contas é estático ent chamo a classe.
    }

    sacar(valor) {
        const taxa = 1.1;
        return this._sacar(valor, taxa); //poderia usar super._sacar()
    }
}
