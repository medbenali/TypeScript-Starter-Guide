 export abstract class Shape {

    private _x: number;
    private _y: number;

    constructor(x: number, y: number) {
        this._x = x
        this._y = y
    }


    public get x(): number {
        return this._x;
    }

    public set x(value: number) {
        this._x = value;
    }


    public get y(): number {
        return this._y;
    }

    public set y(value: number) {
        this._y = value;
    }

    getInfo(): string
    {
        return `x=${this._x}, y=${this._y}`;
    }

    abstract calculateArea(): number;



}