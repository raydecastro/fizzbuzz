import {expect} from "chai";
import FizzBuzz from "../source/fizzbuzz";

describe("FizzBuzz", () => {
    it("shall exist", () => {
        let fizzBuzz = new FizzBuzz();

        expect(fizzBuzz).to.be.defined;
    });

});