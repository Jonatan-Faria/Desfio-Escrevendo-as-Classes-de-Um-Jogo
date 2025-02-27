class Heroi {
     constructor(nome, idade, tipo) {

     this.nome = nome
     this.idade = idade
     this.tipo = tipo

     }
     escrever () {
        console.log("--------------------------------------------------------------------")
        console.log(`O heroi se chama ${this.nome}, ele tem ${this.idade} e vive a vida de um ${this.tipo}`)
        console.log("--------------------------------------------------------------------")
     }
}
let apresentacaoheroi = new Heroi("Lokan", 22, "Barbaro")
apresentacaoheroi.escrever()

if (apresentacaoheroi.tipo === "Barbaro" || apresentacaoheroi.tipo === "Cavaleiro") {
    console.log("Enquanto andava em um lugar desconhecido, ele foi atacado por lobos!");
    console.log("--------------------------------------------------------------------")
    console.log("Mas ele derrotou eles facilmente com golpes cortantes!");
} else if (apresentacaoheroi.tipo === "Mago" || apresentacaoheroi.tipo === "Bruxo") {
    console.log("Enquanto andava em um lugar desconhecido, ele foi atacado por lobos!");
    console.log("--------------------------------------------------------------------")
    console.log("Mas ele derrotou eles facilmente com magias básicas de gelo!");
} else if (apresentacaoheroi.tipo === "Pulgista" || apresentacaoheroi.tipo === "Monge" || apresentacaoheroi.tipo === "Lutador") {
    console.log("Enquanto andava em um lugar desconhecido, ele foi atacado por lobos!");
    console.log("--------------------------------------------------------------------")
    console.log("Mas ele derrotou eles facilmente com socos e pontapés!");
}  else if (apresentacaoheroi.tipo === "Ninja") {
    console.log("Enquanto andava em um lugar desconhecido, ele foi atacado por lobos!");
    console.log("--------------------------------------------------------------------")
    console.log("Mas ele derrotou eles facilmente com shurikens!");
}
