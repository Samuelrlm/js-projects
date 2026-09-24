//Crie um algoritmo que calcule a areá da parede
//O Valor do pintor
//E quantidade de tinta necessária (Em baldes)

const altura = 3
const largura = 5
const valorPintor = 15
const rendimentoTinta = 12 // m² por balde

const area = altura * largura
const valor = area * valorPintor
const baldes = area / rendimentoTinta

console.log(`
    A área da parede é ${area}
    O valor do pintor é ${valor.toFixed(2)}
    A quantidade de baldes é ${Math.ceil(baldes)}    
`)