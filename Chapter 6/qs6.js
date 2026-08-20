const products = [
    { name: "Laptop", price: 80000 },
    { name: "Mobile", price: 30000 },
    { name: "Headphone", price: 5000 },
    { name: "Tablet", price: 40000 }
];

products.sort((a, b) => b.price - a.price);

console.log(products);