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
    it("shall have a method that returns Buzz for multiples of five", () => {
        let fizzBuzz = new FizzBuzz();

        expect(fizzBuzz.multiplesOfFive(15)).to.deep.equal([1,2,3,4,'Buzz',6,7,8,9,'Buzz',11,12,13,14,'Buzz']);
    });

    it("shall have a method that returns Fizz for multiples of three, Buzz for multiples of five and FizzBuzz for multipes of three and five", () => {
        let fizzBuzz = new FizzBuzz();

    expect(fizzBuzz.multiplesOfThreeAndFive(15)).to.deep.equal([1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz',11,'Fizz',13,14,'FizzBuzz']);
    });

});