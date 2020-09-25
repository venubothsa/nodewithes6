var numbers = [1,2,3,4,5]
var doubledNumbers=[];


numbers.forEach(function(number){
	doubledNumbers.push(number * 2);
})

var result = numbers.map(function(number){
	return number*2;
});

console.log(doubledNumbers);
console.log(result);


console.log("==================================");

var persons = [{fname:'Venu',lname:'Bothsa',user_id:'bothsav'},
	{fname:'Vinodh',lname:'Reddyv',user_id:'reddyv'}]
	
var names=persons.map(function(person){
	return person.fname+' '+person.lname;
})
console.log(names)	