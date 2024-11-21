import recipes from './recipes.mjs';

function random(num) {
	return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
	const listLength = list.length;
	const randomNum = random(listLength);
	return list[randomNum];
}


function recipeTemplate(recipe) {
	return `<figure class="recipe">
	<img src=${recipe.image} alt=${recipe.name} class="recipe-image"/>
	<div class="recipe-information">
		<figcaption>
			<ul class="recipe__tags">
				<li>${recipe.tags[0]}</li>
				<li>${recipe.tags[1]}</li>
			</ul>
			<h2><a href="#">${recipe.name}</a></h2>
			<p class="recipe__ratings">
				<span
					class="rating"
					role="img"
					aria-label="Rating: 4 out of 5 stars"
				>
					<span aria-hidden="true" class="icon-star">⭐</span>
					<span aria-hidden="true" class="icon-star">⭐</span>
					<span aria-hidden="true" class="icon-star">⭐</span>
					<span aria-hidden="true" class="icon-star">⭐</span>
					<span aria-hidden="true" class="icon-star-empty">☆</span>
				</span>
			</p>
			<p class="recipe__description">
            	${recipe.description}
			</p>
	</figcaption>
</div>
</figure>`;
}

function renderRecipes(recipeList) {
	// Select the output container
	const outputElement = document.querySelector('#recipe-output');

	// Map recipe objects to HTML strings using `recipeTemplate`
	const recipeHTML = recipeList.map(recipeTemplate).join('');

	// Inject the HTML into the output container
	outputElement.innerHTML = recipeHTML;
}


function init() {
  // get a random recipe
  const recipe = getRandomListEntry(recipes)
  // render the recipe with renderRecipes.
  renderRecipes([recipe]);
}

init();

const form=document.querySelector(".search-container")
form.addEventListener("submit", searchHandler)


function filter(query) {
	const filtered = recipes.filter((recipe)=>{
		return recipe.name.toLowerCase().indexOf(query)>-1
	})
	// sort by name
	const sorted = filtered.sort((a,b)=>{
		return a.name.localeCompare(b.name)
	})
		return sorted

}

function searchHandler(e) {
	e.preventDefault()
  // convert the value in the input to lowercase
  // use the filter function to filter our recipes
  // render the filtered list
  const formText= document.querySelector(".search-bar")
  const query= formText.value.toLowerCase()
  console.log(query)

  const results= filter(query)
  console.log(results)

  // Check if there are results, and render the first one
  if (results.length > 0) {
    renderRecipes([results[0]]);
  } else {
    // Optional: Display a message when no recipes match
    const outputElement = document.querySelector('#recipe-output');
    outputElement.innerHTML = `<p>No recipes found matching "${query}".</p>`;
  }

}