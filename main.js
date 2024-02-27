async function getData() {
  const responce = await fetch(
    "https://forkify-api.herokuapp.com/api/search?q=pizza"
  );
  const data = await responce.json();
  const recipes = data.recipes;
  const result = recipes
    .map(function (recipe) {
      return `<div class="recipe">
    <img src="${recipe.image_url}"/>
    <div> <h3>${recipe.title}
    </h3>
    <a href="details.html?pizza_id=${recipe.recipe_id}">details</a> </div>   </div>`;
    })
    .join("");
  document.querySelector("div").innerHTML = result;
}

getData();
