const user = {
    nome: "Samuel",
    idade: 17,
    email: "samuel@gmail.com",
    brasileiro: true,
    genero: "masculino"
}

const filmes = [
    {
        titulo: "Vingadores",
        ano: 2012,
        genero: "Ação",
        paraMaiorDeIdade: false
    },
    {
        titulo: "Tropa de Elite",
        ano: 2007,
        genero: "Ação",
        paraMaiorDeIdade: true
    }
]

// && = e
// || = ou
// == = igual
// === = igual e do mesmo tipo
// != = diferente
// !== = diferente e do mesmo tipo

// if(user.idade >= 18 && user.genero === "masculino"){
//    console.log(`${user.nome} Deve se alistar!`)
//    return
// }

// console.log("Não precisa se alistar!")