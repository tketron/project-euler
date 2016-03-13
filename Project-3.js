/*Script to calculate the largest prime factor of 13195*/
var n = 13195;
var biggestPrime = 1;

var isPrime = function(i) {
	var bool = true;
	for (count=1; count<i; count++) {
		if (i%count === 0) {
			bool = false;;
		}
	}
	return bool;
}

for (i=1; i<n; i++) {
	if (isPrime(i)) {
		if (n%i === 0) {
			biggestPrime = i;
		}
	}
}

console.log("The bigest prime factor of 13195 is " + biggestPrime);