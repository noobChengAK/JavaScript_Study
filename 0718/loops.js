let vacationSpots = ['1','2','3'];

console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);
for (let conter = 0; conter < 5;conter++){
    console.log(conter);
}

for (let conter = 3; conter >= 0; conter--){
    console.log(conter);
}

const vacationSpots = ['Bali', 'Paris', 'Tulum'];


for (let i = 0; i<vacationSpots.length; i++){
    const string1 = 'I would love to visit ';
    console.log(string1 + vacationSpots[i]);
}

let bobsFollowers = ['Joe', 'Marta', 'Sam', 'Erin'];
let tinasFollowers = ['Sam', 'Marta', 'Elle'];
let mutualFollowers = [];

for (let i = 0; i <bobsFollowers.length; i++){
    for (let z = 0; z < tinasFollowers.length; z++){
        if (bobsFollowers[i] === tinasFollowers[z]){
            //使用===表示完全相等
            mutualFollowers.push(bobsFollowers[i]);
            console.log(mutualFollowers);
        }
    }
}


const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard;
while(currentCard !== 'spade'){
    currentCard = cards[Math.floor(Math.random() * 4)];
    console.log(currentCard);
}


let cupsOfSugarNeeded = 3;
let cuppsAdded = 0;
do{
    cuppsAdded++;
    console.log(cuppsAdded + 'cups was added');
}while(cuppsAdded < cupsOfSugarNeeded);

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];
for (let i = 0; i < rapperArray.length ;i++){
    console.log(rapperArray[i]);
    if (rapperArray[i] === 'Notorious B.I.G.'){
        break
    }

}
console.log("And if you don't know, now you know.");
