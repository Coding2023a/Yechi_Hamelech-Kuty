async function getAllFoods() {
    try {
        const response = await fetch('http://localhost:3000/foods');
        const foods = await response.json();
        console.log('all foods:', foods);
    } catch (error) {
        console.error();
    }
}

async function getSpecificFoods(id) {
    try {
        const response = await fetch(`http://localhost:3000/foods/${id}`);
        const food = await response.json();
        console.log('specific food:', food);
    } catch (error) {
        console.error();
    }
}

setTimeout(() => {
    getSpecificFoods(2)
}, 3000);


console.log("Asynchronous code takes time to coplete")
