var names=['venu','vinod','upendra','kapil'];

//Old approach
for(var i=0;i<names.length;i++){
	console.log(names[i]);
}

//New approach
names.forEach(function(name){
	console.log(name);
})