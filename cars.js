class Vehicle {
    //constructor used to initialise data in the class
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    //This method will return the log information for each car
    Information(){
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
    }
}


class Cars extends Vehicle{
    //constructor used to initialise data in the class
    constructor(make, model, year, doors){
        //super takes the functionality of make, model & year from the parent class & adds it to the child class
        super(make, model, year);
        this.doors = doors;

    }
    //Information displays car data from the parent class vehicle via super & car data from the child class
    //together.
    Information(){
        super.Information();
        console.log(`Doors: ${this.doors}`)
    }
}
//A working instance of this class
let myCar = new Cars(`VW`, `Golf`, 2010, 5);
myCar.Information();

//A working instance of this class
//let myVehicle = new Vehicle(`VW`, `Jetta`, 2022);
//myVehicle.Information();