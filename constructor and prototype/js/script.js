console.log("test of object")
const Product = function (name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}

const p1 = new Product("café", 8.66, 53);

Product.prototype.total = function() {
    return this.price * this.quantity;
}

Product.prototype.add = function(amount) {
    return this.quantity += amount;
}

Product.prototype.remove = function(amount) {
    return this.quantity -= amount;
}

Product.prototype.add = function(amount) {
    return this.quantity += amount;
}

Product.prototype.add = function() {
    return "Dados: " +  this.name + "- " + this.price + "- " + this.quantity
}