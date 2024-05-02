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