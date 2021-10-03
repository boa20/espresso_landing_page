function Maximum(num1, num2) {
    

    if (num1 > num2){
        return num1;
    }
    else {
        return num2;
    }

    
}

let max = Maximum(5, 10);

console.log(max);

// Write a function that take a number and if the number is
//    Divisible by 3 print => Fizz
//    Divisible by 5 print => Buzz
//    Divisible by both 3 and 5 print => FizzBuzz
//    Not divisible by 3 or 5 => print the input
//    Not a number => "Not a number"