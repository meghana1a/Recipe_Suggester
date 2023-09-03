var app = angular.module('myApp', []);

app.controller('RecipeController', function($scope) {
    $scope.recipes = [{
            name: 'Spaghetti and Meatballs',
            description: 'Classic Italian dish of spaghetti and meatballs in tomato sauce.',
            ingredients: ['spaghetti', 'ground beef', 'tomato sauce', 'garlic', 'breadcrumbs', 'parmesan cheese'],
            url: 'https://natashaskitchen.com/spaghetti-and-meatballs-recipe/'
        },
        {
            name: 'Grilled Chicken Caesar Salad',
            description: 'Grilled chicken and romaine lettuce with a creamy Caesar dressing.',
            ingredients: ['chicken breasts', 'romaine lettuce', 'Caesar dressing', 'croutons', 'parmesan cheese'],
            url: 'https://www.foodnetwork.com/recipes/food-network-kitchen/grilled-chicken-ceasar-salad-recipe-2118200'
        },
        {
            name: 'Veggie Stir-Fry',
            description: 'A mix of fresh vegetables stir-fried with your choice of protein and served with rice.',
            ingredients: ['broccoli', 'carrots', 'snap peas', 'onions', 'tofu or chicken or beef', 'rice'],
            url: 'https://natashaskitchen.com/vegetable-stir-fry/'
        },
        {
            name: 'Beef Tacos',
            description: 'Taco shells filled with seasoned ground beef, lettuce, tomato, cheese, and sour cream.',
            ingredients: ['taco shells', 'ground beef', 'lettuce', 'tomato', 'cheddar cheese', 'sour cream'],
            url: 'https://houseofyumm.com/best-ever-taco-meat/'
        },
        {
            name: 'Pesto Pasta Salad',
            description: 'Pasta salad with a creamy pesto dressing, cherry tomatoes, and mozzarella cheese.',
            ingredients: ['penne pasta', 'basil pesto', 'cherry tomatoes', 'mozzarella cheese', 'spinach', 'olive oil'],
            url: 'https://cookieandkate.com/pesto-pasta-salad-recipe/'
        },
        {
            name: 'Beef Stroganoff',
            description: 'Tender beef in a creamy sauce served over egg noodles.',
            ingredients: ['beef sirloin', 'egg noodles', 'sour cream', 'beef broth', 'mushrooms', 'onion'],
            url: 'https://www.recipetineats.com/beef-stroganoff/'
        },
        {
            name: 'Chicken Fajitas',
            description: 'Sliced chicken cooked with peppers and onions, served with tortillas and toppings.',
            ingredients: ['chicken breast', 'bell peppers', 'onion', 'tortillas', 'sour cream', 'guacamole', 'shredded cheese'],
            url: 'https://downshiftology.com/recipes/chicken-fajitas/'
        },
        {
            name: 'Eggplant Parmesan',
            description: 'Breaded eggplant slices baked with tomato sauce and mozzarella cheese.',
            ingredients: ['eggplant', 'bread crumbs', 'tomato sauce', 'mozzarella cheese', 'parmesan cheese', 'fresh basil'],
            url: 'https://www.allrecipes.com/recipe/25321/eggplant-parmesan-ii/'
        }
    ];
});


app.controller('MyController', function($scope) {
    $scope.currentPage = 'page1.html'; // Set the initial page

    $scope.changePage = function(newPage) {
        $scope.currentPage = newPage; // Change the current page
    };
});