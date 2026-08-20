const products = [
    { name: "Laptop", stock: 10 },
    { name: "Mobile", stock: 20 },
    { name: "Headphone", stock: 15 },
    { name: "Keyboard", stock: 5 }
];

function totalStock(products) {
    return products.reduce((total, product) => {
        return total + product.stock;
    }, 0);
}

console.log(totalStock(products));