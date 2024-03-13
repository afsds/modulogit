/* 
Crie uma classe de uma abstração; 
Crie pelo menos duas classes que sejam herdeiras da classe criada anteriormente; 
Crie pelo menos três instâncias de objetos
 */ 

class Eletrônico {
    constructor(aparelho, preço) {
      this.aparelho = aparelho;
      this.preço = preço;
    }
  
  
    emitirSom() {
      console.log("blup blup");
    }
  }
  
  

  class celular extends Eletrônico {
    constructor(aparelho, preço, memoria) {
      super(aparelho, preço);
      this.memoria = memoria;
    }
  
  
    ligar() {
      console.log("hino do santos");
    }
  
  
    
    emitirSom() {
      console.log("bruur bruur");
    }
  }
  
  

  class notebook extends Eletrônico {
    constructor(aparelho, preço, cor) {
      super(aparelho, preço);
      this.cor = cor;
    }
  
  
    notificação() {
      console.log("pop pop");
    }
  
  
    emitirSom() {
      console.log("tururururum");
    }
  }
  
  
  const celular1 = new celular("Samsung", " R$ 1.200,00", "64gb");
  const celular2 = new celular("Motorola", " R$ 950,00", "32gb");
  const notebook1 = new notebook("Lenovo", "R$ 1.499,99", "Cinza");
  
  
  console.log(celular1); 
  console.log(celular2);
  console.log(notebook1);      
  
  
  celular1.ligar();          
  notebook1.notificação();                
  
  
  celular1.emitirSom();       
  notebook1.emitirSom(); 