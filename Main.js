/* 
Crie uma classe de uma abstração; 
Crie pelo menos duas classes que sejam herdeiras da classe criada anteriormente; 
Crie pelo menos três instâncias de objetos
 */

const Celular = {
   anomodelo: 2020,
   marca: 'motorola',
   modelo:'g10 play',
   preço:'999,99',
   ligar: function(){
    console.log("hello moto");
   }
}

function tablet(memoria,marca,modelo,preço){
    this.memoria = memoria;
    this.marca = marca;
    this.modelo = modelo;
    this.preço = preço;
    this.ligar = function(){
        console.log("turururuu")
    }
}

function tv(qualidade,marca,polegadas,preço){
    this.qualidade = qualidade;
    this.marca = marca;
    this.polegadas = polegadas;
    this.preço = preço;
    this.ligar = function(){
        console.log("olá")
    }
}

const tablet1 = new tablet("64gb","Samsung", "Galaxy tab 9+","R$ 1.289,13");
const tablet2 = new tablet("32gb","Multilaser", "m7 3g plus","R$ 336,91");
const tv1 = new tv("4K","Samsung", "50","R$ 2.198,30");

console.log(tablet1);
console.log(tablet2);
console.log(tv1);