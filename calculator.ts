import { ICalculator } from "./exercise2";

class Calculator implements ICalculator{

    a:number;
    b:number;

    constructor(a1:number,b1:number){
      this.a = a1
      this.b = b1 
    }


    add(a:number, b:number){ return a + b}
    subtract(a:number, b:number){return a - b}
    multiply(a:number, b:number){return a * b}
    divide(a:number, b:number){return a / b}
}

let counter = new Calculator(0,0)
console.log(counter.add(5,9))