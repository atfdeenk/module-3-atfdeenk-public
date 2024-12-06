// Recipes Array Object
const recipes = [
  {
    title: 'Spaghetti Carbonara',
    instructions:
      'Cook spaghetti according to package instructions. In a separate pan, cook pancetta until crispy. In a bowl, whisk eggs and grated cheese. Combine spaghetti, pancetta, and egg mixture, stirring quickly. Serve immediately with additional cheese and black pepper',
    image: 'https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg',
  },
  {
    title: 'Strawberries Romanoff',
    instructions:
      'In a medium bowl, combine hulled and quartered strawberries, 4 Tbsp sugar and 4 Tbsp liqueur, stir to combine then cover and refrigerate at least 1 hour and up to 2 hours, stirring once or twice. Two photos of cut strawberries in a bowl with one having sugar being added to the bowl Two photos of cut up strawberries for Strawberry Romanoff. Just before serving, in a large mixing bowl, combine 1 cup cold heavy cream and 1/4 cup powdered sugar, and beat with an electric mixer until stiff peaks form. Using a spatula, fold in 1/4 cup sour cream just until well blended. To serve, stir strawberries then divide between 6 serving glasses or bowls. You can spoon a little syrup over the berries if you like. You can also use this syrup to soak a cake. Spoon cream over strawberries, dividing evenly. You can also use an ice cream scoop with trigger release for a nice rounded puff of cream. Serve right away or chill and enjoy within 2 hours of assembly',
    image:
      'https://natashaskitchen.com/wp-content/uploads/2017/06/Strawberries-Romanoff-5-600x900.jpg',
  },
  {
    title: 'Eccles Cakes',
    instructions:
      'To make the pastry, dice the butter and put it in the freezer to go really hard. Tip flour into the bowl of a food processor with half the butter and pulse to the texture of breadcrumbs. Pour in the lemon juice and 100ml iced water, and pulse to a dough. Tip in the rest of the butter and pulse a few times until the dough is heavily flecked with butter. It is important that you don’t overdo this as the flecks of butter are what makes the pastry flaky. On a floured surface roll the pastry out to a neat rectangle about 20 x 30cm. Fold the two ends of the pastry into the middle (See picture 1), then fold in half (pic 2). Roll the pastry out again and refold the same way 3 more times resting the pastry for at least 15 mins each time between roll and fold, then leave to rest in the fridge for at least 30 mins before using. To make the filling, melt the butter in a large saucepan. Take it off the heat and stir in all the other ingredients until completely mixed, then set aside. To make the cakes, roll the pastry out until it’s just a little thicker than a £1 coin and cut out 8 rounds about 12cm across. Re-roll the trimming if needed. Place a good heaped tablespoon of mixture in the middle of each round, brush the edges of the rounds with water, then gather the pastry around the filling and squeeze it together (pic 3). Flip them over so the smooth top is upwards and pat them into a smooth round. Flatten each round with a rolling pin to an oval until the fruit just starts to poke through, then place on a baking tray. Cut 2 little slits in each Eccles cakes, brush generously with egg white and sprinkle with the sugar (pic 4). Heat the oven to 220C/200C fan/gas 8. Bake the Eccles cakes for 15-20 mins until just past golden brown and sticky. Leave to cool on a rack and enjoy while still warm or cold with a cup of tea. If you prefer, Eccles cakes also go really well served with a wedge of hard, tangy British cheese such as Lancashire or cheddar.',
    image:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-407455_12-8fc6c19.jpg?quality=90&resize=440,400',
  },
  {
    title: 'Krispy Kreme Donut',
    instructions:
      'Dissolve yeast in warm water in 2 1/2-quart bowl. Add milk, sugar, salt, eggs, shortening and 2 cups flour. Beat on low for 30 seconds, scraping bowl constantly. Beat on medium speed for 2 minutes, scraping bowl occasionally. Stir in remaining flour until smooth. Cover and let rise until double, 50-60 minutes. (Dough is ready when indentation remains when touched.) Turn dough onto floured surface; roll around lightly to coat with flour. Gently roll dough 1/2-inch thick with floured rolling pin. Cut with floured doughnut cutter. Cover and let rise until double, 30-40 minutes. Heat vegetable oil in deep fryer to 350°. Slide doughnuts into hot oil with wide spatula. Turn doughnuts as they rise to the surface. Fry until golden brown, about 1 minute on each side. Remove carefully from oil (do not prick surface); drain. Dip the doughnuts into creamy glaze set on rack. Glaze: Heat butter until melted. Remove from heat. Stir in powdered sugar and vanilla until smooth. Stir in water, 1 tablespoon at a time, until desired consistency',
    image:
      'https://1.bp.blogspot.com/-A8JVcB0XBQU/T8kyBLmY2oI/AAAAAAAAFsY/p6fRd31aW3I/s640/krispy-kreme-copycat.jpg',
  },
  {
    title: 'Chicken Fajitas',
    instructions:
      'Slice 1 lb boneless, skinless chicken breasts into thin strips. Heat 1 tablespoon of oil in a large skillet over medium-high heat. Add the chicken and cook until browned, about 5-6 minutes. Add 1 bell pepper and 1 onion, sliced, and cook until tender. Add 2 cloves of minced garlic and cook for 1 minute. Season with 1 teaspoon of cumin, 1/2 teaspoon of chili powder, and salt and pepper to taste. Serve with warm flour tortillas, sour cream, and salsa.',
    image:
      'https://easyweeknightrecipes.com/wp-content/uploads/2021/07/grilled-chicken-fajitas-6.jpg',
  },
  {
    title: 'Baked Salmon',
    instructions:
      'Preheat oven to 400°F (200°C). Line a baking sheet with parchment paper. Place 4 salmon fillets on the baking sheet. Drizzle with 2 tablespoons of olive oil and season with salt, pepper, and 1 tablespoon of lemon juice. Bake for 12-15 minutes or until cooked through.',
    image:
      'https://www.acouplecooks.com/wp-content/uploads/2020/01/Baked-Salmon-056.jpg',
  },
  {
    title: 'Spinach and Artichoke Dip',
    instructions:
      'Preheat oven to 350°F (180°C). Mix 1 (14 oz) can of artichoke hearts, 1 package of frozen spinach, 1 cup of cream cheese, 1/2 cup of mayonnaise, and 1/2 cup of shredded cheddar cheese in a bowl. Transfer the mixture to a baking dish and bake for 20-25 minutes or until hot and bubbly. Serve with tortilla chips.',
    image:
      'https://www.onceuponachef.com/images/2022/11/spinach-artichoke-dip-1-2.jpg',
  },
  {
    title: 'Roasted Chicken Thighs',
    instructions:
      'Preheat oven to 425°F (220°C). Line a baking sheet with parchment paper. Place 4-6 chicken thighs on the baking sheet. Drizzle with 2 tablespoons of olive oil and season with salt, pepper, and 1 tablespoon of dried thyme. Roast for 25-30 minutes or until cooked through.',
    image:
      'https://downshiftology.com/wp-content/uploads/2019/02/Crispy-Baked-Chicken-Thighs-main.jpg',
  },
  {
    title: 'Quinoa Salad Bowl',
    instructions:
      'Cook 1 cup of quinoa according to package instructions. Mix cooked quinoa with 1 cup of chopped cucumber, 1 cup of cherry tomatoes, 1/2 cup of crumbled feta cheese, and 1/4 cup of chopped fresh parsley in a bowl. Drizzle with 2 tablespoons of olive oil and 1 tablespoon of lemon juice.',
    image:
      'https://images.themodernproper.com/billowy-turkey/production/posts/2015/Quinoa-Bowl-7.jpg?w=1200&q=82&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.6409&dm=1599770424&s=829e943d1693466ae47eeab82be8e0cb',
  },
  {
    title: 'Breakfast Burrito',
    instructions:
      'Scramble 2 eggs in a bowl. Add 1/2 cup of cooked sausage, 1/2 cup of black beans, and 1 tablespoon of shredded cheddar cheese to the bowl. Mix well. Wrap the mixture in a tortilla and cook in a skillet over medium heat for 2-3 minutes or until the cheese is melted and the tortilla is crispy.',
    image:
      'https://hips.hearstapps.com/hmg-prod/images/breakfast-burrito-index-66a7e23ca6c89.jpg?crop=0.8889743589743591xw:1xh;center,top&resize=1200:*',
  },
];

// Get references to the HTML elements we'll be manipulating
const recipeDivElement = document.querySelector('.container');
const getRecipeBtn = document.getElementById('getRecipeBtn');
const recipeContainer = document.getElementById('recipeContainer');
const recipeImage = document.querySelector('.recipe-image');
const recipeTitle = document.querySelector('.recipe-title');
const recipeInstruction = document.querySelector('.recipe-instruction');

// Set the minimum height of the body to the full height of the viewport
document.body.style.minHeight = '100vh';

// Set the height of the body to auto, allowing it to adjust based on its content
document.body.style.height = 'auto';

// Set the margin of the recipe container to 5%
recipeDivElement.style.margin = '5%';

// Add a click event listener to the "Get Random Recipe" button
getRecipeBtn.onclick = getRandomRecipe;

// Function to get a random recipe
function getRandomRecipe() {
  // Hide the button after it's clicked
  getRecipeBtn.style.display = 'none';

  // Select a random recipe from the recipes array
  const randomRecipe = shuffleRecipe();

  // Set the image source and width
  recipeImage.src = randomRecipe.image;
  recipeImage.style.width = '200px';

  // Set the recipe title
  recipeTitle.textContent = randomRecipe.title;

  // Update the recipe instructions
  updateRecipeInstructions(randomRecipe.instructions);

  console.log(randomRecipe);
}

// Get the previous recipe from session storage
const previousRecipe = sessionStorage.getItem('previousRecipe');

// Initialize the previous recipes array
let previousRecipes = [];
let recipesShown = 0;

// If there is a previous recipe, add it to the previous recipes array
if (previousRecipe) {
  previousRecipes = [previousRecipe];
}

// Function to get a recipe from the recipes array
function shuffleRecipe() {
  // Check if all recipes have been shown
  if (recipesShown === recipes.length) {
    // Reset the previousRecipes array and recipesShown counter
    previousRecipes = [];
    recipesShown = 0;
  }

  // Select a random recipe from the recipes array, excluding the previous ones
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * recipes.length);
  } while (previousRecipes.includes(randomIndex.toString()));

  const randomRecipe = {
    ...recipes[randomIndex],
    id: randomIndex.toString(),
  };
  previousRecipes.push(randomIndex.toString());
  recipesShown++;

  // Store the previous recipe in session storage
  sessionStorage.setItem('previousRecipe', randomRecipe.id);

  return randomRecipe;
}

// Function to update the recipe instructions
function updateRecipeInstructions(instructions) {
  // Split the instructions into a list and create a new unordered list element
  const instructionsList = instructions.split('. ');
  const ol = document.createElement('ol');

  // Style the unordered list
  ol.style.cssText = `
    margin: 10px 20px;
    padding: 0 20px;
    font-family: helvetica, sans-serif;
    font-size: 16px;
    `;

  // Add each instruction as a list item to the unordered list and style it
  instructionsList.forEach((instruction) => {
    const li = document.createElement('li');
    li.textContent = instruction + '.';
    li.style.marginBottom = '10px';
    ol.appendChild(li);
  });

  // Replace the existing recipe instructions with the new unordered list
  recipeInstruction.innerHTML = '';
  recipeInstruction.appendChild(ol);

  // Style the recipe instructions
  recipeInstruction.style.cssText = `
  max-width: 800px;
  text-align: justify;
  padding: 5px;
  background-color: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
}
