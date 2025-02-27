
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
let apresentacaoheroi = new Heroi("Lokan", 22, "pulgista")
apresentacaoheroi.escrever()

if (apresentacaoheroi.tipo === "Barbaro" || apresentacaoheroi.tipo === "Cavaleiro" || apresentacaoheroi.tipo === "barbaro" || apresentacaoheroi.tipo === "cavaleiro") {
    console.log("Enquanto andava em um lugar desconhecido, ele foi atacado por lobos!");
    console.log("--------------------------------------------------------------------")
    console.log("Mas ele derrotou eles facilmente com golpes cortantes!");
} 
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
 else {
    console.log("Enquanto andava em um lugar desconhecido, ele foi atacado por lobos!");
    console.log("--------------------------------------------------------------------");
    console.log("Mas ele derrotou eles com habilidade de um aventureiro!");
}
