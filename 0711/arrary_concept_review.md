```javascript

```

```javascript
    const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
    console.log(famousSayings[3]);
```
if the array is beyond the size of the arrary, IT will print "undifined" 

## .length
```javascript
    const newYearsResolutions = ['Keep a journal', 'Take a falconry class'];
    
    console.log(newYearsResolutions.length);
// Output: 2
```

## .push()

```javascript
    const itemTracker = ['item 0', 'item 1', 'item 2'];
    
    itemTracker.push('item 3', 'item 4');
```
Add items to the end of an array

## .pop()

```javascript
    itemTracker.push();
```
takeaway the last element;

## .shift() / .unshift()
### .shift()
```javascript
    const array1 = [1, 2, 3];

    const firstElement = array1.shift();

    console.log(array1);
    // expected output: Array [2, 3]

    console.log(firstElement);
    // expected output: 1
```
The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

从arrary中移除第一个值，返回当前添加过后的 arrary length
###  .unshift()
```javascript
    groceryList.unshift('popcorn');
    // expected output: Arrary['popcorn',.....]
    console.log(groceryList.unshift('popcorn'));
    //expected output: current length of the Arrary
```
The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

在arrary中的第一个为位置上添加上内容，并返回当前的 arrary length 长度

## .slice()

```javascript
    const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

    console.log(animals.slice(2));
    // expected output: Array ["camel", "duck", "elephant"]

    console.log(animals.slice(2, 4));
    // expected output: Array ["camel", "duck"]

    console.log(animals.slice(1, 5));
    // expected output: Array ["bison", "camel", "duck", "elephant"]

    console.log(animals.slice(-2));
    // expected output: Array ["duck", "elephant"]

    console.log(animals.slice(2, -1));
    // expected output: Array ["camel", "duck"]
```

The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

切片

## indexOf()

indexOf(searchElement: string, fromIndex?: number): number
