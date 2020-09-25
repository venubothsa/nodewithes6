const book = { title: 'Java', price: 10, company: 'Oracle' };

const { title, price } = book;

console.log(title);
console.log(price);

const companies = ['Google', 'Apple', 'Vensai']

const { length } = companies;

console.log(length);

const [name, ...rest] = companies;

console.log(name);
console.log(rest)

const Google = {
    employee_strength: 100,
    locations: ['Hyderabad', 'Benguluru', 'Mumbai']
}

const { locations,locations: [location] } = Google;

console.log(locations)
console.log(location)

const points = [
    [2,6],
    [3,4],
    [7,8]
]

const result=points.map(([x,y])=>{
return {x:x,y:y};
});
console.log(result)