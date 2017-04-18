import {expect} from "chai";
import FizzBuzz from "../source/fizzbuzz";

describe("FizzBuzz", () => {
    it("shall exist", () => {
        let fizzBuzz = new FizzBuzz();

        expect(fizzBuzz).to.be.defined;
    });

    it("shall have a method that returns Fizz for multiples of three", () => {
        let fizzBuzz = new FizzBuzz();

        expect(fizzBuzz.multiplesOfThree(15)).to.deep.equal([1, 2,'Fizz',4,5,'Fizz',7,8,'Fizz',10,11,'Fizz',13,14,'Fizz']);
        });

});