class FizzBuzz {
    constructor() {
        this.fizzText = "Fizz";
        this.buzzText = "Buzz";
        this.fizzBuzzText = this.fizzText + this.buzzText;
    }

    multiplesOfThree(maxNumber) {
        return this.generateArray(1, maxNumber, this.getFizz);
    }

    generateArray(minNumber, maxNumber, functionToExecute) {
        let list = [];

        for (let i = minNumber; i <= maxNumber; i++) {
            list.push(functionToExecute.call(this, i));
        }

        return list;
    }

    getFizz(aNumber) {
        if (this.isDivisibleByThree(aNumber)) {
            return this.fizzText;
        }

        return aNumber;
    }

    isDivisibleByThree(aNumber) {
        return (aNumber % 3) === 0;
    }

    multiplesOfFive(maxNumber) {
        return this.generateArray(1, maxNumber, this.getBuzz);
    }
        
    getBuzz(aNumber) {
        if(this.isDivisibleByFive(aNumber)) {
            return this.buzzText;
        }

        return aNumber;
    }

    isDivisibleByFive(aNumber) {
        return (aNumber % 5) === 0;
    }

    multiplesOfThreeAndFive(maxNumber) {
        return this.generateArray(1, maxNumber, this.getFizzBuzz);
    }

    getFizzBuzz(aNumber) {
        if (this.isDivisibleByThree(aNumber) && this.isDivisibleByFive(aNumber)) {
            return this.fizzBuzzText;
        } else if (this.isDivisibleByThree(aNumber)) {
            return this.fizzText;
        } else if (this.isDivisibleByFive(aNumber)) {
            return this.buzzText;
        }

        return aNumber;
    }
}

export default FizzBuzz;
