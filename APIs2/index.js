const allFoodsDiv = document.getElementById('allFoods');
const specificFoodDiv = document.getElementById('specificFood');

async function getAllFoods() {
    
    console.log('function was called');

    try {
        const response = await fetch('http://localhost:3001/foods');
        const foods  = await response.json();

        while (allFoodsDiv.firstChild) {
            allFoodsDiv.remove(allFoodsDiv.firstChild);
        }

        foods.forEach(food => {
            const div = document.createElement('div');
            div.textContent = `ID: ${food.id} Name: ${food.name}`;
            div.classList.add('food-item');
            allFoodsDiv.appendChild(div);
        });

    } catch (error) {
        console.error(error);
    }
}

document.getElementById('allFoodsButton').addEventListener('click', getAllFoods);

async function getSpecificFood(id) {
    try {
        const response = await fetch(`http://localhost:3001/foods/${id}`);
        const food = await response.json();
        specificFoodDiv.textContent = `ID: ${food.id}, Name: ${food.name}`;
        specificFoodDiv.classList.add('food-item');
    } catch (error) {
        console.error(error);
    }
}

document.getElementById('specificFoodButton').addEventListener('click', getSpecificFood(2));