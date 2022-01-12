//Objetos vacios
let usuario1 = new Object(); // sintaxis de "objeto constructor"
//let usuario2 = {};  // sintaxis de "objeto literal"

//Objeto con propiedades
let usuario = {     // un objeto
    nombre: "Juan",  // en la clave "nombre" se guarda el valor "Juan"
    edad: 30,        // en la clave "edad" se guarda el valor 30
    "le gusta la poesía":true, //No recomendable
    leGustaPoesia:true
  };

console.log(usuario.nombre);
console.log(usuario.edad);
console.log(usuario["le gusta la poesía"]);//Si tiene espacios la propiedad hay que usar corchetes

//Aunque lo guarde en una variable, hay que usar corchetes para acceder
let clave="le gusta la poesía"; 
console.log(usuario[clave]);
//Si empleamos . nos saldra undefined, ya que no hay ninguna propiedad con el nombre clave
console.log(usuario.clave);

//Añadimos nuevas propiedades al objeto
usuario.esAdministrador = true;

//Eliminamos una propiedad al objeto
delete usuario.edad;

//Comprobamos si una propiedad esta o no definida en un objeto
if (usuario.edad===undefined){
    console.log("La edad no esta definida");
}
if (usuario.nombre===undefined){
    console.log("El nombre no esta definido");
}else{
    console.log("El nombre esta definido");
}
if ("nombre" in usuario){
    console.log("El nombre esta definido");
}

//Las palabras reservadas son permitidad como nombres de objetos, Aunque es una mala practica.
let obj={for:1,let:2,return:3};
console.log(obj.for+""+obj.let+""+obj.return);

//Bucle para optener propiedad
for(let propiedad in usuario){
    console.log(propiedad+': '+usuario[propiedad]);//Usamos corchetes ya que sino buscaria la propiedad llamada propiedad
}

//Copia por referencia
let otro_usuario=usuario;
otro_usuario.nombre='alberta';
console.log(usuario.nombre); //Podemos ver que ha cambiado tambien el nombre del usuario
//Esto es debido a que no hemos copiado los valores sino que le hemos dicho que copie las posiciones de memoria

//Clonar
let clon={};
for(let propiedad in usuario){
    clon[propiedad] = usuario[propiedad];//En este caso no copiamos memoria sino valores.
}

//Otra forma de clonar
let clon2={};
Object.assign(clon2, usuario); //En el primer argumento se copia las propiedades de los siguientes elementos.

//Otra forma de clonar
let clon3=Object.assign({},usuario);

/** MÉTODOS */
let usuario2 = {     // un objeto
    nombre: "Juan",  // en la clave "nombre" se guarda el valor "Juan"
    edad: 30,        // en la clave "edad" se guarda el valor 30
    //Defino un método del objeto
    sayHi: function(){
        console.log("Hola "+ this.nombre);
    }
  };
//Defino un método del objeto
usuario2.sayHi2= function(){
    console.log("Hola "+ this.nombre);
}
//Llamada al método
usuario2.sayHi();
usuario2.sayHi2();

//defino la funcion
function sayByeBye(){
    console.log("Adios "+ this.nombre);
}
//Se asigna la funcion al objeto
usuario2.sayByeBye= sayByeBye;
//Ejecuttamos la funcion
usuario2.sayByeBye();

//Bucles
for (let propiedad of Object.keys(usuario2)){ //Keys devuelve las propiedades
    console.log('propiedad: '+propiedad);
}

//Bucles
for (let valor of Object.values(usuario2)){ //values devuelve los valores
    console.log('Valor: '+valor);
}

//Establecemos un nuevo objeto y le damos valores
let prices = {
    banana:1,
    orange:2,
    meat:4
};
//Creamos un nuevo objeto donde guardaremos el doble
let doublePrices={};
//Guardamos de propiedad el nombre del producto y de valor el precio multiplicado por 2
for (let[producto,precio] of Object.entries(prices)){
    doublePrices[producto]=precio*2;
}
console.log(doublePrices); //mostramos el nuevo objeto

/** CLASES */
//Declaracion de la clase
class Usuario{
    //Constructor por defecto
    constructor(nombre, edad, vida){
        this.nombre =nombre;
        this.edad =edad;
        this.max=100;
        this.vida=10;
    }
    //Metodos de la clase
    setCurso(danio){
        for(let i=1;i<=danio;i++){
            if(this.vida>0){
                this.vida--;
            }
        }
    }
    saludar(){
        console.log(this.nombre);
    }
    toString(){
        console.log(this.nombre+''+this.edad+this.max);
    }
}

//uso de la clase
let user=new Usuario("Juan",23);
console.log(user);
console.log(user.vida);
user.setCurso(20);
console.log(user.vida);
user.saludar();
user.toString();

//Herencia
class Animal{
    constructor(nombre){
        this.velocidad = 0;
        this.nombre=nombre;
    }
    correr(velocidad){
        this.velocidad+=velocidad;
        console.log(`${this.nombre} corre con velocidad ${this.velocidad}.`);
    }
    parar(){
        this.velocidad=0;
        console.log(`${this.nombre} se queda quieto.`);
    }
    
}
let animal=new Animal("Lagarto");
animal.correr(3);
animal.parar();

class Liebre extends Animal{
    esconder(){
        console.log(`${this.nombre} se esconde.`);
    }
    parar(){
        this.velocidad=0;
        console.log(`${this.nombre} se queda parado.`);
    }
}
let liebre =new Liebre("Liebre Blanca");

liebre.correr(50);
liebre.esconder();
liebre.parar();

