var fibonacci = function(n){
    if (n == 0)
	return 0;
    else if (n == 1)
	return 1;
    else
	return fibonacci(n-1) + fibonacci(n-2);
};

var min = function(a,b){
    if (a < b)
	return a;
    else
	return b;
};

var max = function(a,b){
    if (a > b)
	return a;
    else
	return b; 
};

var gcd = function(a,b){
    if (a == 0 || b == 0)
	return 0;
    var small = min(a,b);
    var big = max(a,b);
    if (big%small == 0)
	return small;
    else
	return gcd(big%small, small); 
};

var randomStudent = function(li) {
    return li[Math.floor(Math.random() * li.length)];
};
    
//console.log(fibonacci(0)); 
//console.log(fibonacci(1));
//console.log(fibonacci(2));  
//console.log(fibonacci(3));
//console.log(fibonacci(4));

console.log(gcd(36,60));
console.log(gcd(15,5));
console.log(gcd(0,0));
console.log(gcd(15,10)); 

var item = ['Terry', 'Shannon', 'Stephen Curry', 'Irene', 'Kyrie Irving', 'Adam']
console.log(randomStudent(item));
console.log(randomStudent(item));
console.log(randomStudent(item));
console.log(randomStudent(item));
