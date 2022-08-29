//프로퍼티 값 단축 구문

const id = 'p-0001';
const price = 30000;

const product = {
    id : id,
    price : price
};

console.log(product);

const product2 = {id, price};

console.log(product2);

