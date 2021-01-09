/*
ser autenticavel significa ter o metodo "autenticar". herança não é o unico modo de compartilhar codigo. somente por objetos e atributos certos pode ficar até melhor

duck type: caracteristica de linguagens fracamente tipadas. se anda igual um pato, faz quack igual um pato, então é um pato
nao interessa qual a classe, se tem o metodo que eu quero usar, ele usa. typescript nao conseguiria
*/

export class SistemaAutenticacao {
    static login(autenticavel, senha) { //metodos estaticos vc nao precisa criar uma instancia objeto pra poder chamar ele, chama direto da classe no index
        if (SistemaAutenticacao.ehAutenticavel(autenticavel)) { //verificação se autenticavel tem a função autenticar
            return autenticavel.autenticar(senha); //polimorfismo pois herda da classe funcionario
        }
        return false; //pra não dar erro, e sim só ter a saida false
    }

    static ehAutenticavel(autenticavel) { //verificação se autenticavel tem a função autenticar
        return "autenticar" in autenticavel && //o JS guarda uma chave sempre que criamos atributos e funções, então aqui retornamos que é autenticavel se a chave "autenticar" tiver na classe do autenticavel
        autenticavel.autenticar instanceof Function; //aqui verificamos se essa chave autenticar é uam instancia de uma função. ou seja, verificamos se é uma função autenticar. ai retorna true
    }
}

/*
Interfaces: agora o sistema se preocupa mais com ter o metodo autenticar de quem ta chamando ele. antes só precisava ter a senha como objeto em comum que ele liberava
sempre que eu tiver uma _senha mas na chamada de função eu usar .senha, o JS vai criar um atributo senha novo e definir undefined, pq ele n existia antes
*/