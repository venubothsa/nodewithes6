//Rest operator
function addNumbers(...numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
}
console.log(addNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]))

console.log(addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9))

const defaultColors = ['red', 'green'];
const favColors = ['Grey', 'Blue'];

console.log([...defaultColors, ...favColors, 'Orange', 'Grey'])

function validateShopingList(...items) {
    if (items.indexOf('milk') < 0) {
        return ['milk', ...items];
    }
    return items;
}

console.log(validateShopingList('Orange', 'Apple'))
const userObj = { fname: '', lname: '', isLogged: false, userId: '' }
function validateSession() {
    return { ...userObj, isLogged: true }
}
console.log(validateSession())