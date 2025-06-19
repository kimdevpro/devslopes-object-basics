// Module 3 Exercise: Looping in Objects
// Start with exercise-3.md if you haven't read it!

const dominos = {
  name: "Domino's",
  cuisines: ["italian", "new york", "pizza"],
  pizzaToppings: {
    pepperoni: 2.2,
    mushrooms: 0.7,
    extraCheese: 1.4,
    onions: 0.5,
    sausage: 2.8,
    extraSauce: 0.8,
  },
  starReviews: {
    Peach: 3,
    Yoshi: 2.1,
    Bowser: 4,
    Mario: 5,
    Luigi: 5,
    Gumba564: 3.4,
    "Donkey Kong": 3.2,
  },
  favorited: true,
  address: "123 Elm Street",
  zipcode: 54321,
  acceptsReservations: true,
};

function printPizzaPlace(place) {
  for (let key in place) {
    console.log(key, place[key]);
  }
}

printPizzaPlace(dominos);

function toppingsPriceRange(object) {
  let lowHigh = [Infinity, -Infinity];

  for (let topping in object.pizzaToppings) {
    let price = object.pizzaToppings[topping];

    if (price < lowHigh[0]) {
      lowHigh[0] = price;
    }

    if (price > lowHigh[1]) {
      lowHigh[1] = price;
    }
  }

  return lowHigh;
}

console.log(toppingsPriceRange(dominos)); 

function calculateAverageRating(object) {
  let sum = 0;
  let count = 0;

  for (let reviewer in object.starReviews) {
    sum += object.starReviews[reviewer];
    count++;
  }

  const average = sum / count;
  return average;
}

console.log(calculateAverageRating(dominos));