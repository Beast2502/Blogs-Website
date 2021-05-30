const products = [];

module.exports = class Product {
    constructor(data){
        this.title = data;
    }

    save(){
        products.push(this);
    }

    static fetchAll(){
        return products;
    }

}