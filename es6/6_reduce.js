var numbers=[1,2,3,4,5];

var sum =0;

sum=numbers.reduce(function(sum,number){
return sum+number;
},1)
console.log(sum)
var persons = [{fname:'Venu',lname:'Bothsa',user_id:'bothsav',emp_type:'Contract'},
	{fname:'Vinodh',lname:'Reddyv',user_id:'reddyv',emp_type:'Perminent'},
	{fname:'Kapil',lname:'Jaiswal',user_id:'jaiswalk',emp_type:'Perminent'}]

var result=persons.reduce(function(previousState,person){
	previousState.push(person.fname);
	return previousState;
},['Ravi'])

console.log(result)
