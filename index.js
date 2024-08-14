//console.log("Hello world !!!!");

const carro ={
    marca : 'toyota',
    modelo: 'corola',
    ligar : function () {
        console.log(`O ${this.marca} está ligado`);     
        
    }
}
carro.ligar()
// console.log(carro);

    

// desligar: function () {
//     console.log("o carro esta desligado");
// for ( let i=0; i< 15; i++){
//     console.log(i);
    
//}
const frutas = ["maca","banana", "laranja"]
// console.log(frutas);

for (const key in frutas) {
    console.log(frutas, frutas[key]);
    
        
    }
