const hobbies = ['1','2','3'];
console.log(hobbies);
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
const listItem = famousSayings[0];
console.log(listItem);
console.log(famousSayings[2]);
// if the array is beyond the size of the arrary, IT will print "undifined"




//Update Elements
let groceryList = ['bread', 'tomatoes', 'milk'];
groceryList[1] = 'avocados';


//Arrays with let and const

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);
condiments = ['Mayo'];
console.log(condiments);
utensils[3] = 'Spoon';
console.log(utensils);


//.length
const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);


//.push()
const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('1','2');
console.log(chores);


// .pop()
const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
chores.pop();
console.log(chores);
// .shift() .unshift()
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
const firstelement = groceryList.shift();
console.log(groceryList);

groceryList.unshift('popcorn');
console.log(groceryList.unshift('popcorn'));

// .slice()
console.log(groceryList.slice(1,4));
console.log(groceryList);


// .indeOf()

const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);


//Arrarys and Function

const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);

const removeElement= (newArr) => {
   newArr = newArr.pop();
}

removeElement(concept);
console.log(concept);

// Nested Arrays

const numberClusters = [[1,2],[3,4],[5,6]];
const target = numberClusters[2][-1];








