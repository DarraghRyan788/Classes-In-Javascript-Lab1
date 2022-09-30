class BMI {
    //constructor used to initialise data in the class
    constructor(height, weight){
        this.height = height;
        this.weight = weight;
    }

    //This method will return the individuals bmi using the formula below
    calculateBMI(){
        let bmi = this.weight/(this.height**2);
        return bmi;
    }
}
//A working instance of this class
let myBMI = new BMI(2, 100);
console.log(myBMI.calculateBMI());