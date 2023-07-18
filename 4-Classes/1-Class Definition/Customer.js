var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
// let's create an instance 
// without constructor
/*
let myCustomer = new Customer();

myCustomer.firstName = "Mohamed";
myCustomer.lastName = "BEN ALI";
*/
//console.log(myCustomer);
/*
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
*/
// with constructor
var myCustomer = new Customer("Mohamed", "BEN ALI");
//console.log(myCustomer);
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
