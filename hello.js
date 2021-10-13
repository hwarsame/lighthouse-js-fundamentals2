const sayHello  = function (name) {
  console.log("Hello" + name); 
}

sayHello(' Hamza');
sayHello(' Other viewers of this code!');


const returnSayHello  = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('John');