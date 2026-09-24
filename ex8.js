// crie um algoritmo que calcule o valor total de uma locação
// Se a quantidade de dias for maior que 10
// Aplicar um desconto de 15% no valor total
// Aplicar um acrecimo de 20% no valor total se for menor que 5 dias

const dias = 4
const valorDia = 135.33

let calculo = dias * valorDia

if(dias > 10){
    const desconto = calculo * 0.15

    calculo = calculo - desconto
}

if(dias < 5){
    const acrecimo = calculo * 0.20

    calculo = calculo + acrecimo
}

console.log(`O valor total é ${calculo.toFixed(2)}`)