class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    get name(){
        console.log('get name 동작');
        //외부접근이 불가능한 프로퍼티를 표현할 때 _를 붙인다
        return this._name;
    }

    get price(){
        console.log('get price 동작');
        return this._price;
    }

    set name(value){
        console.log('set name 동작');
        this._name = value;
    }

    set price(value){
        console.log('set price 동작');
        if(value <= 0){
            console.log('가격은음수일 수 없습니다.');
            this._price = 0;
            return;
        }
        this._price = value;
    }
}

let phone = new Product('전화기',23000);
console.log(phone.name + ',' + phone.price);
phone.name = '휴대폰';
console.log(phone.name + ',' + phone.price);