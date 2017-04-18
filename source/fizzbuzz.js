class FizzBuzz {
    multiplesOfThree(endNum) {
        let arr = [];

        for (let i = 1; i <= endNum; i++) {
            arr.push(this.getFizz(i));
        }

        return arr;
    }

    getFizz(aNumber) {
        let remainder = aNumber % 3;

        if (remainder === 0) {
            return "Fizz";
        }

        return aNumber;
    }

    multiplesOfFive(endNum) {
        let arr = [];

        for (let i = 1; i <= endNum; i++) {
            arr.push(this.getBuzz(i));
        }

        return arr;
    }

    getBuzz(aNumber) {
        let remainder = aNumber % 5;

        if (remainder === 0) {
            return "Buzz";
        }

        return aNumber;
    }

    multiplesOfThreeAndFive(endNum) {
        let arr = [];
        for (let i = 1; i <= endNum; i++) {
            arr.push(this.getFizzBuzz(i));
        }
        return arr;
    }

    getFizzBuzz(aNumber) {
        let remainder15 = aNumber % 15;
        let remainder3 = aNumber % 3;
        let remainder5 = aNumber % 5;

        if (remainder15 === 0) {
            return "FizzBuzz";
        } else if (remainder3 === 0) {
            return this.getFizz(aNumber);
        } else if (remainder5 === 0) {
            return this.getBuzz(aNumber);
        }

        return aNumber;
    }
}




export default FizzBuzz;
