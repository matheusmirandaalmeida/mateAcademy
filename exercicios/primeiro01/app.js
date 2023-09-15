// let para valores que podem futuramente mudar.
// const para valores que não serão alterados.
let myPocket = 12;
const coxinha = 5;
const pastel = 7;

myPocket = myPocket - coxinha;

console.log('O que tenho no bolso', myPocket)

const TenhoDinheiroSuficiente = myPocket >= pastel; // Boolean

console.log('Tenho Dinheiro suficiente? ', TenhoDinheiroSuficiente);

if (TenhoDinheiroSuficiente){
    console.log('Posso comprar ambos os produtos')
} else {
    console.log('Não posso comprar amos os produtos')
}