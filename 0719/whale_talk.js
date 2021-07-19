let input = 'turpentine and turtles';
const vowels = ['a','e','i','o','u'];
let resultArrary = [];
for (let i = 0; i < input.length;i++){
    //console.log(i)
    for (let j = 0; j<vowels.length;j++){
        if (input[i] === vowels[j]){
            switch (input[i]){
                case 'e':
                    resultArrary.push('E','E');
                    break;
                case 'u':
                    resultArrary.push('U','U');
                    break;
                case 'a':
                    resultArrary.push('A');
                    break;
                case 'i':
                    resultArrary.push('I');
                    break;
                case 'o':
                    resultArrary.push('O');
                    break;
            }
            
        }
        //console.log(j);
    }
}
console.log(resultArrary.join("").toUpperCase());