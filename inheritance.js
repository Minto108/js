class Car{
    constructor(brand){
        this.carname = brand;
    }
    present(){
        return "I have a " + this.carname;
    }
}

class cars extends Car{
    constructor(brand, year){
        super(brand);
        this.year = year;
    }
    show(){
        return this.present() + ", it is of the year " + this.year;
    }
}

let myCar = new cars("Ford",2024);
console.log(myCar.present());
console.log(myCar.show());
