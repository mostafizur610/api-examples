const loadMeal = (search) => {
    // fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeal(data.meals))
}

const displayMeal = meals => {
    // console.log(meals);
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerHTML = ``;

    meals.forEach(meal => {
        // console.log(meal)
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div class="col">
        <div onclick="loadMealDetail(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            </div>
        </div>
    </div>
        `;
        mealContainer.appendChild(mealDiv)
    })

}

const searchFood = () => {

    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log('searching', searchText);
    loadMeal(searchText);
    searchField.value = '';

}

const loadMealDetail = (idMeal) => {
    // console.log('get id of meal', idMeal)
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))

}

const displayMealDetails = meal => {
    // console.log(meal)
    const detailContainer = document.getElementById('detail-container');
    detailContainer.innerHTML = '';
    const mealDiv = document.createElement('div');
    mealDiv.classList.add('card')
    mealDiv.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
    detailContainer.appendChild(mealDiv)
}

loadMeal('')