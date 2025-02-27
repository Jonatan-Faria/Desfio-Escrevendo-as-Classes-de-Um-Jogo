// EXPLICAÇÂO

// Primeiro criamos uma classe chamada "Heroi" | class Heroi {} |
// Dentro da classe criamos objetos usando | constructor () {} | dentro do parentese | () | fica o nome dos objetos separados por | , |
// E dentro das chaves você define os "Objetos" "Constantes" "Variaveis" etc...
// | this. | define que é um objeto
// | this.nome | = nome é um objeto  
// | this.nome = nome | = o objeto nome esta relacionado com a declaração dentro dos parenteses | constructor(nome, idade, tipo) | AVISO: tem que ser igual, se for diferente não funciona.
// Depois crie os objetos | idade | | tipo |
// Ainda dentro do | class Heroi | e | constructor | vamos criar uma constante para Limitar a quantidade de classes do heroi. 
// Isso vai servir pra sempre ter uma resposta não importa se você escolheu uma classe não listada.
// criamos o constate classesValidas |  const classesValidas = [ ] | separndo as informações com | , |
// |  this.tipo = classesValidas.includes(tipo) ? tipo : "Aventureiro" | = o objeto tipo é igual | this.tipo = | tudo que esta incluso na...
// constante classesValidas sendo um objeto tipo | classesValidas.includes(tipo) | se não for encontrado em classesValidas | ? |
// tipo vai ser "Aventureiro" | tipo : "Aventureiro" | e finaliza com | ; |
// fechamos a chave do constructor
// Agora vamos criar um método chamado escrever |  escrever () {} |
// Método: É uma função definida dentro de uma classe que define o comportamento dos objetos dessa classe. O método escrever é uma função dentro da classe Heroi.
// Dentro das chaves  do metodo escrever, pedimos pra ele escrever 3 mensagens no console e depois fechamosas chaves do metodo e da classe.
// As crases | `` | são usadas para permitir o uso de template strings como | this.nome = nome |. E o | ${} | é pra voce usar o valor das template strings

class Heroi {
     constructor(nome, idade, tipo) {

     this.nome = nome
     this.idade = idade
     this.tipo = tipo

     const classesValidas = ["Barbaro", "Cavaleiro", "Mago", "Bruxo", "Pulgista", "Monge", "Lutador", "Ninja","barbaro", "cavaleiro", "mago", "bruxo", "pulgista", "monge", "lutador", "ninja"];
     this.tipo = classesValidas.includes(tipo) ? tipo : "Aventureiro";
     }
     escrever () {
        console.log("--------------------------------------------------------------------")
        console.log(`O heroi se chama ${this.nome}, ele tem ${this.idade} e vive a vida de um ${this.tipo}`)
        console.log("--------------------------------------------------------------------")
     }
}



// | let apresentacaoheroi | = crie uma variavel chamada apresentacaoheroi
// O | new | em JavaScript e como ele funciona na criação de objetos a partir de classes mas nesse caso é diferente por causa | let apresentacaoheroi = |
// O nem vai indicar que o valor vai estar dentro de um objeto da classe heroi | let apresentacaoheroi = new Heroi () |
// Esse valor vai ser preencher os valores do constructor dentro do class heroi. | constructor(nome, idade, tipo) | No caso: nome, idade e tipo.
// | apresentacaoheroi.escrever() | = Execute o Método | escrever | com as informações da variavel apresentacaoheroi

let apresentacaoheroi = new Heroi("Lokan", 22, "pulgista")
apresentacaoheroi.escrever()

// | if () {} | dentro dos parentes é a condição e dentro da chaves é o que ele vai fazer se a condições forem atendidas
// | if apresentacaoheroi.tipo === "Barbaro" | Se o tipo da variavel a apresentacaoheroi for igual a Barbaro ou | || | Se o tipo da variavel a apresentacaoheroi for igual a Cavaleiro...
// Mostre no console a mensagem Enquanto andava em um lugar desconhecido, ele foi atacado por lobos! |  console.log("Enquanto andava em um lugar desconhecido, ele foi atacado por lobos!"); |
// Fazer as outras mensagens é do mesmo jeito

if (apresentacaoheroi.tipo === "Barbaro" || apresentacaoheroi.tipo === "Cavaleiro" || apresentacaoheroi.tipo === "barbaro" || apresentacaoheroi.tipo === "cavaleiro") {
    console.log("Enquanto andava em um lugar desconhecido, ele foi atacado por lobos!");
    console.log("--------------------------------------------------------------------")
    console.log("Mas ele derrotou eles facilmente com golpes cortantes!");
} 

// Se não for igual a if | else if | veja se o tipo da variavel a apresentacaoheroi é igual a mago... Mesma coisa do if
// Mostre no console a mensagem Enquanto... Mesma coisa do if também.
// Agora a gente faz mais alguns else if para o resto das classes. Eu fiz um if e else if para cada mensagem diferente.
// Exemplo: no primeiro | else if | ele fala que os magos usaram  magias básicas de gelo ja no segundo com socos e pontapés...
// se eu quisesse  que o mago derrotasse os lobos com socos e pontapés eu colocaria ele no segundo else if.

 else if (apresentacaoheroi.tipo === "Mago" || apresentacaoheroi.tipo === "Bruxo" || apresentacaoheroi.tipo === "mago" || apresentacaoheroi.tipo === "bruxo") {
    console.log("Enquanto andava em um lugar desconhecido, ele foi atacado por lobos!");
    console.log("--------------------------------------------------------------------")
    console.log("Mas ele derrotou eles facilmente com magias básicas de gelo!");
}
 else if (apresentacaoheroi.tipo === "Pulgista" || apresentacaoheroi.tipo === "Monge" || apresentacaoheroi.tipo === "Lutador" || apresentacaoheroi.tipo === "pulgista" || apresentacaoheroi.tipo === "monge" || apresentacaoheroi.tipo === "lutador") {
    console.log("Enquanto andava em um lugar desconhecido, ele foi atacado por lobos!");
    console.log("--------------------------------------------------------------------")
    console.log("Mas ele derrotou eles facilmente com socos e pontapés!");
}  
 else if (apresentacaoheroi.tipo === "Ninja" || apresentacaoheroi.tipo === "ninja") {
    console.log("Enquanto andava em um lugar desconhecido, ele foi atacado por lobos!");
    console.log("--------------------------------------------------------------------")
    console.log("Mas ele derrotou eles facilmente com shurikens!");
}  

// | else | Se não tem nem no | if | nem nos | else if | anteriores então ele que vai executar, por isso ele é o unico que não tem... 
//condições que você pode definir.
// se lembra da constante classesValidadas? ela vai mostrar sua funcionalidade agora!
// Ele vai servir como um defalt.
// Ex: (classesValidas) Se eu não sei de que tipo de heroi é esse então só coloca que o heroi é um aventureiro ao invéz de deixar em branco
//     (console) certo mas quem vai fazer isso?
//     (else) deixa que eu faço isso! 
 else {
    console.log("Enquanto andava em um lugar desconhecido, ele foi atacado por lobos!");
    console.log("--------------------------------------------------------------------");
    console.log("Mas ele derrotou eles com habilidade de um aventureiro!");
}

// Espero poder ter te ajudado! :)
// Ass: Jonatan
