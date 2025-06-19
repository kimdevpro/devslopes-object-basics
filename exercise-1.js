/* 
Module One Exercise: Object Syntax & Notation
Start with exercise-1.md if you haven't read it! 
*/

// YOUR WORK GOES HERE //
const favoriteRestaurant = {
    name: 'Abuelos',
    cuisines: ['TexMex'],
    numberOfStars: 5,
    favorited: true,
}

favoriteRestaurant.address = '1531 West 81st Street, Suite A, Tulsa, Oklahoma';
favoriteRestaurant.zipcode = 74132;
favoriteRestaurant.acceptsReservations = true;

favoriteRestaurant.numberOfStars = favoriteRestaurant.numberOfStars + 1;
favoriteRestaurant.favorited = false;
favoriteRestaurant.cuisines.push('Mexican');

const retrieveProperty = function (object, searchString) {
    if (object.hasOwnProperty(searchString)) {
        return object[searchString];
    }
    else{
        return 'The information you requested does not exist.';
    }
}

let tests = ['cuisines', 'favorited', 'name', 'nickName', 'state'];

for (let test of tests) {
    console.log(retrieveProperty(favoriteRestaurant, test));
}


