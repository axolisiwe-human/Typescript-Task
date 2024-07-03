export interface ICalculator{

    a:number
    b:number

    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
    multiply(a: number, b: number): number; 
    divide(a: number, b: number): number;
}