class Customer
{

    private _firstName: string;
    private _lastName: string;

    constructor(theFirst: string, theLast: string)
    {
        this._firstName = theFirst;
        this._lastName = theLast;
    }


    public get firstName(): string
    {
        return this._firstName;
    }

    public set firstName(value: string)
    {
        this._firstName = value;
    }

    get lastName(): string
    {
        return this._lastName;
    }

    set lastName(value: string)
    {
        this._lastName = value;
    }

}

// let's create an instance

let myCustomer = new Customer("John", "Smith");

myCustomer.firstName = "Mohamed";
myCustomer.lastName = "BEN ALI";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);

