/*Script to calculate the sum of all even Fibonacci numbers less than 4 million */
var firstF = 1;
var secondF = 2;
var currentF = firstF + secondF;
var sum = firstF + secondF + currentF;


while (currentF<4000000) {
	currentF = firstF + secondF;
	firstF = secondF;
	secondF = currentF;
	sum+=currentF;
}

console.log("The sum of all even Fibonacci numbers less than 4 million is " + sum);