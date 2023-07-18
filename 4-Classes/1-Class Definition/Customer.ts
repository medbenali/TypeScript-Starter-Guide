class Customer
{
    firstName: string;
    lastName: string;

    constructor(theFirst: string, theLast: string)
    {
        this.firstName = theFirst;
        this.lastName = theLast;
    }

}

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
let myCustomer = new Customer("Mohamed", "BEN ALI");

//console.log(myCustomer);

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);