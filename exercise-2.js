/* 
Module Two Exercise: Object Methods
Start with exercise-2.md if you haven't read it! 
*/

//  DO NOT EDIT THE BELOW OBJECT // 

const papaJohns = {
  name: "Papa John's",
  slogan: "Better Ingredients. Better Pizza. Papa John's.",
  cuisines: ["italian", "american", "pizza"],
  pizzaToppings: {
    pepperoni: 2,
    peppers: 0.6,
    extraCheese: 1.5,
    olives: 0.5,
    bacon: 3,
    extraSauce: 1,
  },
  numberOfStars: 3.5,
  favorited: false,
  address: "555 Main Street",
  zipcode: 11234,
  acceptsReservations: false,
};

// DO NOT EDIT THE ABOVE OBJECT // 

// YOUR WORK GOES HERE // 

const grabCategories = (object) => {
  return Object.keys(object)
}

const verifyValues = (object, target) => {
  if (Object.values(object).length === target) {
    return true;
  }
  else {
    return false;
  }
}

console.log(verifyValues(papaJohns, 5));
console.log(verifyValues(papaJohns, 9));

const getToppingsInfo = (object) => {
  return Object.entries(object.pizzaToppings);
}

console.log(getToppingsInfo(papaJohns));

papaJohns.printAd = function (toppingName) {
  const toppingPrice = this.pizzaToppings[toppingName];

  if (toppingPrice === undefined) {
    return `Sorry, we do not have a topping called "${toppingName}".`;
  }
  const adString = `Welcome to ${this.name}! We are located at ${this.address}. This week, we are having a sale on ${toppingName} for $${toppingPrice}. ${this.slogan}.`;
  return adString;
};

console.log(papaJohns.printAd('bacon'));
console.log(papaJohns.printAd('extraCheese'));

papaJohns.address = "777 New Avenue";
papaJohns.slogan = "Fresh Deals. Hot Pizza. Papa John's.";

console.log(papaJohns.printAd('pepperoni'));
console.log(papaJohns);