var computers = [{ name: 'Apple', ram: 16 },
{ name: 'Windows', ram: 4 },
{ name: 'Linux', ram: 24 }]

var allCompputersCanRunProgram = true;
var someComputersCanRunProgram = false;

for (var i = 0; i < computers.length; i++) {
    var computer = computers[i]
    if (computer.ram < 16) {
        allCompputersCanRunProgram = false;
    } else {
someComputersCanRunProgram=true;
    }
}

console.log(allCompputersCanRunProgram)
console.log(someComputersCanRunProgram)
console.log("================================")
var allCompputersCanRunProgram=computers.every(function(computer){
return computer.ram>=16;
})

console.log(allCompputersCanRunProgram)

var someComputersCanRunProgram=computers.some(function(computer){
    return computer.ram>=16;
    })

console.log(someComputersCanRunProgram)