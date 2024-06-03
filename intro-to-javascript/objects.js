let person = {
    name: "Kuty",
    age: 12,
    occupation: "student"
}

console.log(person["age"]);
console.log(person.name);






let car = {
    make: "Toyota",
    model: "Camry",
    start: function() {
       console.log("Engine started")
    }
};
car.start();


let cars = {
    car1: {
        make: "Toyota",
        model: "Corolla",
        year: 2022,
        color: "Silver",
        features: ["Automatic Transmission", "Touchscreen Infotainment", "Lane Departure Warning"],
    },
    car2: {
    make: "Ford",
    model: "Mustang",
    year: 2022,
    color: "Red",
    features: ["V8 Engine", "Sport Suspension", "Apple CarPlay"],
    },
    car3: {
        make: "Honda",
        model: "Civic",
        year: 2022,
        color: "Blue",
        features: ["Fuel-Efficient Engine", "Honda Sensing Suit", "Sunroof"],
    }
};

console.log(cars);