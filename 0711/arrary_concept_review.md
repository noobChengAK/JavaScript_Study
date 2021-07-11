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

## .slice() / .splice(int,int,...)
### .slice()
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
### .splice(int,int,...)
```javascript
    const months = ['Jan', 'March', 'April', 'June'];
    months.splice(1, 0, 'Feb');
    // inserts at index 1
    console.log(months);
    // expected output: Array ["Jan", "Feb", "March", "April", "June"]

    months.splice(4, 1, 'May');
    // replaces 1 element at index 4
    console.log(months);
    // expected output: Array ["Jan", "Feb", "March", "April", "May"]
```
The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

#### 第一个**parameter变量** 是在第哪几个arrary位置开始准备删除
**举例：从第一个元素来时删除两个元素并插入三个元素**
```javascript
    let myFish = ['angel', 'clown', 'trumpet', 'sturgeon']
    let removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue')

    // myFish is ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
    // removed is ["angel", "clown"]
```

#### 第二个**parameter变量** 是从第一个parameter那里为起点开始，移除几个元素（int）

**举例：从第二个开始移除全部**
```javascript
    let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
    let removed = myFish.splice(2)

    // myFish is ["angel", "clown"]
    // removed is ["mandarin", "sturgeon"]
```
#### 第三个**parameter变量** 是插入哪个 / 几个元素 
**举例：移除零个元素在第二个元素前，插入两个元素**
```javascript
    let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
    let removed = myFish.splice(2，0，‘drum’，‘guitar’)

// myFish is ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]
// removed is [], no elements removed
```


## .indexOf()

indexOf(searchElement: string, fromIndex?: number): number

## .join()
**举例：连接arrary中的elements为句子**
```javascript
    const elements = ['Fire', 'Air', 'Water'];

    console.log(elements.join());
    // expected output: "Fire,Air,Water"

    console.log(elements.join(''));
    // expected output: "FireAirWater"

    console.log(elements.join('-'));
    // expected output: "Fire-Air-Water"
```
