// Define the recipe object with title, instructions, and image
const recipe = {
  title: 'Spaghetti Carbonara',
  instructions:
    'Cook spaghetti according to package instructions. In a separate pan, cook pancetta until crispy. In a bowl, whisk eggs and grated cheese. Combine spaghetti, pancetta, and egg mixture, stirring quickly. Serve immediately with additional cheese and black pepper',
  image: 'https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg',
};

// Get references to the HTML elements we'll be manipulating
const getRecipeBtn = document.getElementById('getRecipeBtn');
const recipeContainer = document.getElementById('recipeContainer');
const recipeImage = document.querySelector('.recipe-image');
const recipeTitle = document.querySelector('.recipe-title');
const recipeInstruction = document.querySelector('.recipe-instruction');

// Add a click event listener to the "Get Random Recipe" button
getRecipeBtn.addEventListener('click', function onRandomRecipe() {
  // Hide the button after it's clicked
  getRecipeBtn.style.display = 'none';

  // Set the image source and width
  recipeImage.src = recipe.image;
  recipeImage.style.width = '200px';

  // Set the recipe title
  recipeTitle.textContent = recipe.title;

  // Set the recipe instructions
  recipeInstruction.style.textAlign = 'left';
  recipeInstruction.style.marginTop = '20px';
  recipeInstruction.style.padding = '20px';
  recipeInstruction.style.backgroundColor = '#f7f7f7';
  recipeInstruction.style.borderRadius = '8px';
  recipeInstruction.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';

  // Split the instructions into a list and create a new unordered list element
  const instructionsList = recipe.instructions.split('. ');
  const ul = document.createElement('ul');

  // Add each instruction as a list item to the unordered list
  instructionsList.forEach((instruction) => {
    const li = document.createElement('li');
    li.textContent = instruction + '.';
    li.style.listStyleType = 'decimal';
    li.style.marginBottom = '10px';
    li.style.fontSize = '16px';
    li.style.color = '#333333';
    ul.appendChild(li);
  });

  // Replace the existing recipe instructions with the new unordered list
  recipeInstruction.innerHTML = '';
  recipeInstruction.appendChild(ul);
});
