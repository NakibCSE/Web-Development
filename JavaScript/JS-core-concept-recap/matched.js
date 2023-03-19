const products =[
    {id: 1, name: 'Xomi phone one night', price:190000},
    {id: 2, name: 'iphone', price:190000},
    {id: 3, name: 'MacBook Air', price:1390000},
    {id: 4, name: 'lenovo yoga laptop 2025', price:190000},
    {id: 5, name: 'Dell Inspiration Laptop', price:190000},
    {id: 6, name: 'Samsung note 7', price:190000},
    {id: 7, name: 'Nokia old age phone gone', price:190000},
    {id: 8, name: 'phone one', price:190000},
];


function matchedProducts(products, search){
    const matched = [];
    for(const product of products){
        if(product.name.includes(search)){
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProducts(products,'phone');
console.log(result);
