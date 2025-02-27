class Heroi {
     constructor(nome, idade, tipo) {

     this.nome = nome
     this.idade = idade
     this.tipo = tipo

     const classesValidas = ["Barbaro", "Cavaleiro", "Mago", "Bruxo", "Pulgista", "Monge", "Lutador", "Ninja"];
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
