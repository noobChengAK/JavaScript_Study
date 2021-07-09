//Scope

let satellite = 'The Moon';
let galaxy = 'The Milky Way';
let stars = 'North Star';
const callMyNightSky = () => {
    return `Night Sky: ${satellite}, ${stars}, and ${galaxy}`;
}
console.log(callMyNightSky());

/* 
function block for callMyNightSky() is able to access the global variables freely 
since the variables are available to all lines of code in the file.
*/


//Block Scope
/*
When a variable is defined inside a block, 
it is only accessible to the code within the curly braces {}
*/

// define a function logVisibleLightWaves(). 
const logVisibleLightWaves = () => {
    const lightWaves = 'Moonlight';
    console.log(lightWaves);
}
logVisibleLightWaves();
console.log(lightWaves);
// will output a reference Error because the block scope 




//Scope Pollution
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  //This line re assigned the value of of stars value
    stars = 'Sirius';
  
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars);



//Practice Good Scoping

const logVisibleLightWaves = () => {
    let lightWaves = 'Moonlight';
    let region = 'The Arctic';
    // Add if statement here:
    if(region === 'The Arctic'){
        let lightWaves = 'Northern Lights';
        console.log(lightWaves);
    }
    console.log(lightWaves);
  };
  
  logVisibleLightWaves();

  /* 在内层的 if block 中， lightwaves 的 log 为 Northern Lights，
  在外层的 block 中仍为 moonlight */

