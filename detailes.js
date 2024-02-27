async function getDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  //console.log(window.location.search);
  const id = urlParams.get("pizza_id");
  //console.log(id);
  const responce = await fetch(
    `https://forkify-api.herokuapp.com/api/get?rId=${id}`
  );
  const data = await responce.json();
  const { title, image_url, ingredients } = data.recipe;
  //const recipes = data.recipes;
  document.querySelector(".title").textContent = title;
  document.querySelector("img").src = image_url;
  const result = ingredients
    .map(function (ele) {
      return `<li>${ele}</li>`;
    })
    .join("");
  document.querySelector("ul").innerHTML = result;
}
getDetails();
