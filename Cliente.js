export class Cliente { //criando uma classe (molde)
    get cpf() {
        return this._cpf;
    }

    constructor(nome, cpf) { //construtores servem para criar apenas uma vez o atributo quando for criado no index, portanto nome e cpf setam uma vez e não mudam mais, tecnica de gerenciamento de estados
        this.nome = nome; //inicialização do atributo, importante sempre declarar dentro do construtor como boa prática
        this._cpf = cpf;
    }
}