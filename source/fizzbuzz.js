class FizzBuzz {

    multiplesOfThree(endNum) {
        let arr = [];
        for (let i = 1; i <= endNum; i++) {
            let remainder = i % 3;
            if (remainder === 0) {
                arr.push("Fizz");
            } else {
                arr.push(i);
            }
        }
        return arr;
    }

    multiplesOfFive(endNum){
        let arr = [];
        for (let i = 1; i <= endNum; i++) {
            let remainder = i % 5;
            if (remainder === 0) {
                arr.push("Buzz");
            } else {
                arr.push(i);
            }
        }
        return arr;
    }

}




export default FizzBuzz;
