//객체 구조분해 할당



let pants = {
    productName : '배기팬츠',
    color : '검정색',
    price : 30000
}


let {productName, color, price} = pants;

console.log(productName);
console.log(color);
console.log(price);

console.log('');

//{객체프로퍼티 : 목표변수}
let { color : co, price : pr, productName : pn } = pants;

console.log(co);
console.log(pr);
console.log(pn);

console.log('');

let shirts = {
    productName : '베이직셔츠'
}

let {productName : productName2  = '어떤상품', color : color2 = '어떤색상', price : price2 = 0 } = shirts

console.log(productName);
console.log(color2);
console.log(price2);

console.log('');

let {productName : productName3} = pants;
console.log(productName3);

console.log('');

let {productName : productName4, ...r} = pants;
console.log(productName4);
console.log(r.color);
console.log(r.price);

console.log('');

({productName : productName5, color : color5, price : price5 = 0} = pants);
console.log(productName5);
console.log(color5);
console.log(price5);


console.log('-------------------------------------------------------');


//중첩구조분해
let product = {
    size : {
        width : 10,
        height : 30
    },
    items : ['doll','robot']
}

let {
    size : {
        width,
        height
    },
    items : [item1, item2],
} = product;

// console.log(product.size.height);

console.log(width);
console.log(height);
console.log(item1);
console.log(item2);

let {
    size,
    items
} = product;

console.log(size.width);
console.log(size.height);
console.log(items[0]);
console.log(items[1]);

console.log('-------------------------------------------------------');


//함수의 매개변수에 적용
function displayProduct(producer = '아무개', width = 0, height = 0, items = []){
    console.log(`${producer} ${width} ${height}`);
    console.log(items);
}

let exProduct = {
    items : ['Coffee', 'Donut'],
    prodecer : '이효리'
}

// displayProduct('이효리', undefined, undefined, ['Coffee', 'Donut']);
displayProduct(exProduct);






