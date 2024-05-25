// Пример применения call и  applay на практике!

const product = {
    name: "smartphone",
    price: 500,
    getDiscription(discount) {
        const finalPrice = this.price - discount;
        return `Товар ${this.name} будет теперь стоять ${finalPrice}`;
    }
};
    
function calcDiscount(procent) {
    return (this.price * procent) / 100;
    
};
    
const productDisc = calcDiscount.call(product, 30);
console.log(productDisc);
    
const productDisc2 = calcDiscount.apply(product, [50]);
console.log(productDisc2);
    
const discriptionDiscount = product.getDiscription.call(product, productDisc);
console.log(discriptionDiscount);