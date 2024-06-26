const recipeApi = ;
const recipeUrl = ;
// add an eventlistener to the search button
document.getElementById('searchButton').addEventListener('click',async function(){
    try {
        // get the search input value
        const searchInput = document.getElementById('searchInput').value;
        const response = await fetch('recipeUrl'+ searchInput);
        const data = await response.json();
        // call the displayResults function with the fetched data
        displayResults(data);
    }
    catch (error){
        console.log('Error fetching Recipe data:',error);
    }
}); 

// Fuction to display the fetched results
function displayResults(data){
    const resultsContainer = document.getElementById('results');
    // clear existing content in the results container
    resultsContainer.innerHTML = '';

    //loop through each recipe in the fetched data
   data.forEach(function(recipe){
    // create a new card for each recipe
    const card = document.createElement('div');
    card.classList.add('col-md-4','mb-4');

    // create a card bordy element for the recipe details
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-img-top');
    img.src = recipe.image;

    //create a paragraph element for the recipe ingredients
    const ingredients = document.createElement('p');
    ingredients.classList.add('card-text');
    ingredients.textContent = 'Ingredients:'+ recipe.ingredients.join(', ');

    // create a link element to view the full recipe
    const link = document.createElement('a');
    link.classList.add('btn','btn-primary');
    link.href = recipe.url;
    link.textContent = 'View Recipe';

    // create buttons for liking and bookmarking recipes using bootstrap icons
    const likeButton = document.createElement('button');
    likeButton.classList.add('btn','btn-outline-primary','mr-2');
    likeButton.innerHTML = '<i class="bi bi-heart"></i>';
    likeButton.addEventListener('click', function() {
        // Implement logic for liking the recipe
        // For example, send a request to the server to save the liked recipe
    console.log('Liked recipe:', recipe.title);
    });

    var bookmarkButton = document.createElement('button');
    bookmarkButton.classList.add('btn', 'btn-outline-primary');
    bookmarkButton.innerHTML = '<i class="bi bi-bookmark"></i>';
    bookmarkButton.addEventListener('click', function() {
      // Implement logic for bookmarking the recipe
      // For example, send a request to the server to bookmark the recipe
    console.log('Bookmarked recipe:', recipe.title);
    });

    // Append all elements to the card body
    cardBody.appendChild(title);
    cardBody.appendChild(image);
    cardBody.appendChild(ingredients);
    cardBody.appendChild(link);
    cardBody.appendChild(likeButton);
    cardBody.appendChild(bookmarkButton);

    // Append the card body to the card
    card.appendChild(cardBody);

    // Append the card to the results container
    resultsContainer.appendChild(card);

   });
}