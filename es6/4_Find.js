var persons = [{fname:'Venu',lname:'Bothsa',user_id:'bothsav',emp_type:'Contract'},
	{fname:'Vinodh',lname:'Reddyv',user_id:'reddyv',emp_type:'Perminent'},
	{fname:'Kapil',lname:'Jaiswal',user_id:'jaiswalk',emp_type:'Perminent'}]
	
var person;
for(var i=0;i<persons.length;i++){
	if(persons[i].emp_type==='Perminent'){
		person = persons[i];
		break;
	}
}

console.log(person);



var result=persons.find(function(person){
	return person.emp_type==='Perminent';
})
console.log(result);