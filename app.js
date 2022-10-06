getRandomMeals();
async function getRandomMeals(){
    const resp = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    const randomMeal = await resp.json();
    console.log(randomMeal);
}