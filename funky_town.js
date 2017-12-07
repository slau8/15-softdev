// return nth term in the fibonacci sequence
var fibonacci = function(n){
    if (n == 0)
	return 0;
    else if (n == 1)
	return 1;
    else
	return fibonacci(n-1) + fibonacci(n-2);
};

// gcd helper function
// return the lower number of a and b
var min = function(a,b){
    if (a < b)
	return a;
    else
	return b;
};

// gcd helper function
// return the higher number of a and b
var max = function(a,b){
    if (a > b)
	return a;
    else
	return b; 
};

// return the greatest common divisor 
var gcd = function(a,b){
    if (a == 0 || b == 0)
	return 0;
    var small = min(a,b);
    var big = max(a,b);
    if (big % small == 0)
	return small;
    else
	return gcd(big % small, small); 
};

// return a random student from a list
var randomStudent = function(li) {
    return li[Math.floor(Math.random() * li.length)];
};
    
console.log("fibonacci(0): " + fibonacci(0)); 
console.log("fibonacci(1): " + fibonacci(1));
console.log("fibonacci(2): " + fibonacci(2));  
console.log("fibonacci(3): " + fibonacci(3));
console.log("fibonacci(4): " + fibonacci(4));

console.log("gcd(36,60): " + gcd(36,60));
console.log("gcd(15,5): " + gcd(15,5));
console.log("gcd(0,0): " + gcd(0,0));
console.log("gcd(15,10): " + gcd(15,10)); 

var item = ['Terry', 'Shannon', 'Stephen Curry', 'Irene', 'Kyrie Irving', 'Adam']
console.log("randomStudent(item): " + randomStudent(item));
console.log("randomStudent(item): " + randomStudent(item));
console.log("randomStudent(item): " + randomStudent(item));
console.log("randomStudent(item): " + randomStudent(item));

var buttonCallback = function(e){
    console.log("\n\nhere comes e...");
    console.log(e);
    console.log("\n\nhere comes 'this'...");
    console.log(this);
};

var b = document.getElementById('b');
b.addEventListener('click', buttonCallback);
