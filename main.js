

//  Create genaral Employee class that have name and age props,
//  then make 3 subClass of this class, like developer, marketer,
//  acoutant, each subclass should have own methods. like getProgrammignLanguages, getMarketerTools and etc.
class GeneralEmployee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}


class Developer extends GeneralEmployee {
    constructor(name, age, programmingLanguages) {
        super(name, age);
        this.programmingLanguages = programmingLanguages;
    }

    getProgrammingLanguages() {
        return `Developer: Programming languages: ${this.programmingLanguages.join(', ')}`;
    }
}


class Marketer extends GeneralEmployee {
    constructor(name, age, marketingTools) {
        super(name, age);
        this.marketingTools = marketingTools;
    }

    getMarketingTools() {
        return `Marketer: Marketing tools: ${this.marketingTools.join(', ')}`;
    }
}


class Accountant extends GeneralEmployee {
    constructor(name, age, accountingSkills) {
        super(name, age);
        this.accountingSkills = accountingSkills;
    }

    getAccountingSkills() {
        return `Accountant: Accounting skills: ${this.accountingSkills.join(', ')}`;
    }
}


const dev = new Developer('Alice', 30, ['JavaScript', 'Python', 'C++']);
console.log(dev.getDetails());
console.log(dev.getProgrammingLanguages());

const marketer = new Marketer('Bob', 25, ['Google Analytics']);
console.log(marketer.getDetails());
console.log(marketer.getMarketingTools());

const accountant = new Accountant('Charlie', 28, ['Excel', 'Tax Preparation']);
console.log(accountant.getDetails());
console.log(accountant.getAccountingSkills());


        

//  Create a CarFactory class that have following methods, addCar, deleteCar, updateCar, getAllCars
class CarFactory {
    constructor() {
        this.cars = [];
        this.currentId = 1;
    }

    addCar(car) {
        car.id = this.currentId++;
        this.cars.push(car);
    }

    deleteCar(carId) {
        
        this.cars = this.cars.filter(car => car.id !== carId);
        
        this.cars.forEach(car => {
            if (car.id > carId) {
                car.id -= 1;
            }
        });
        
        this.currentId -= 1;
    }

    updateCar(carId, newCar) {
        const carIndex = this.cars.findIndex(car => car.id === carId);
        if (carIndex !== -1) {
            newCar.id = carId;
            this.cars[carIndex] = newCar;
        }
    }

    getAllCars() {
        return this.cars;
    }
}


class Car {
    constructor(name, model, year) {
        this.name = name;
        this.model = model;
        this.year = year;
    }

    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Model: ${this.model}, Year: ${this.year}`;
    }
}


const factory = new CarFactory();

const cars = [
    new Car('Toyota', 'Corolla', 2020),
    new Car('Honda', 'Civic', 2021),
    new Car('Ford', 'Mustang', 2022),
    new Car('Chevrolet', 'Camaro', 2019),
    new Car('Tesla', 'Model S', 2023),
    new Car('Nissan', 'Altima', 2021),
    new Car('BMW', '3 Series', 2020),
    new Car('Audi', 'A4', 2022),
    new Car('Mercedes', 'C-Class', 2023),
    new Car('Volkswagen', 'Golf', 2021)
];

cars.forEach(car => factory.addCar(car));

console.log(factory.getAllCars().map(car => car.getDetails())); 

factory.deleteCar(1); 

console.log(factory.getAllCars().map(car => car.getDetails())); 

const updatedCar = new Car('Honda', 'Accord', 2022);
factory.updateCar(2, updatedCar);

console.log(factory.getAllCars().map(car => car.getDetails())); 


// დედლაინი:  01/07/2024  23:59
