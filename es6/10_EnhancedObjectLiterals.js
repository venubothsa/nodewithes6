function createBookshop(inventory) {
    return {
        inventory: inventory,

        inventoryValue: function () {
            return this.inventory.reduce((total, book) => total + book.price, 0)
        },
        priceForTitle: function (title) {
            return this.inventory.find(book => book.title === title).price;
        }
    }
}
const inventory = [{ title: 'Java', price: 10 },
{ title: 'React', price: 20 },
{ title: 'Angular', price: 30 }]

const bookShop = createBookshop(inventory);
console.log(bookShop.inventoryValue())
console.log(bookShop.priceForTitle('React'))
