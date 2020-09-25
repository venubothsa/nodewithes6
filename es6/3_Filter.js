var persons = [{fname:'Venu',lname:'Bothsa',user_id:'bothsav',emp_type:'Contract'},
	{fname:'Vinodh',lname:'Reddyv',user_id:'reddyv',emp_type:'Perminent'},
	{fname:'Kapil',lname:'Jaiswal',user_id:'jaiswalk',emp_type:'Perminent'}]
	

var perminentEmps=[];


persons.forEach(function(person){
	if(person.emp_type==='Perminent'){
		perminentEmps.push(person);
	}
})	
	
console.log(perminentEmps)	

var result=persons.filter(function(person){
	return person.emp_type==='Perminent';
});

console.log(result)	