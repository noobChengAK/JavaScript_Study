
```javascript
    
```

## .map() 方法


```javascript
   const secretMessage = animals.map(animals => animals[0]);
   const smallNumbers = bigNumbers.map(bigNumbers => {
        return bigNumbers/100 
//map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。

//map() 方法按照原始数组元素顺序依次处理元素。
```

## arrary.filter()方法
```javascript
    const randomNumbers = [375, 200, 3.14, 7, 13, 852];
    const smallNumbers = randomNumbers.filter(randomNumbers => {
        return randomNumbers < 250
});
//类似于模板，使得小于条件的数字被返回
    const longFavoriteWords = favoriteWords.filter(favoriteWords => {
        return favoriteWords.length > 7
    });
```
## .findIndex()方法
```javascript
//查找在arrary中符合条件的值，并返回该值在array中的第一个index（出现位置）
    const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
    const foundAnimal = animals.findIndex(animals =>{
        return animals === 'elephant'
    });
    console.log(foundAnimal);
    //判定开头字母为 's' 的字符在arrary中是那一个位置
    const startsWithS = animals.findIndex(animals => {
    return animals[0] === 's'
});
    
```
 * 判定相等应该用 '===' 符号

## .reduce() method方法


```javascript
    const newNumbers = [1, 3, 5, 7];
    const newSum = newNumbers.reduce((accumulator,currentValue) => {
        console.log('The value of accumulator: ', accumulator);
        console.log('The value of currentValue: ', currentValue);
        return accumulator + currentValue;
    },10);
    ///其中第二个变量 ‘10’是为初始的accumulator 赋值，
    //即一开始就加上10，为‘10+ 1’
    console.log(newSum);



    const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some(() => {
  return word.length < 6;
}));

// Use filter to create a new array



// Make sure to uncomment the code below and fix the incorrect code before running it

// console.log(interestingWords.every((word) => { } ));

```

# .some()方法
```javascript
    const array = [1, 2, 3, 4, 5];

// checks whether an element is even
    const even = (element) => element % 2 === 0;

    console.log(array.some(even));
// expected output: true
```
# .every()方法
方法用于检测在arrary中的每一个元素，是否可以满足xxx条件（返回的是Boolean值）

**boolean**值是.every()方法的返回值

```javascript
  //  
    const isBelowThreshold = (currentValue) =>  currentValue < 40;
    const array1 = [1, 30, 39, 29, 10, 13];
    console.log(array1.every(isBelowThreshold));
// expected output: true
//检测是否全部的arrary中的值都小于40，如果是，便返回true
```


# .forEach() 函数

```javascript
    const array1 = ['a', 'b', 'c'];

    array1.forEach(element => console.log(element));

    // expected output: "a"
    // expected output: "b"
    // expected output: "c"
```
该函数返回的值为正常运行，要么就是 ‘undifined’
当出现 ‘undifined’的情况时，则原来的arrary则没有这个‘元素’在先前被定义


# Review

**.forEach()** is used to execute the same code on every element in an array but does not change the array and returns undefined.

**.map()** executes the same code on every element in an array and returns a new array with the updated elements.

**.filter()** checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria.

**.findIndex()** returns the index of the first element of an array that satisfies a condition in the callback function. It returns -1 if none of the elements in the array satisfies the condition.

**.reduce()** iterates through an array and takes the values of the elements and returns a single value.
