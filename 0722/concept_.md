## .name 函数

```javascript
    const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;
    is2p2();
    console.log(is2p2.name);
    //输出结果： checkThatTwoPlusTwoEqualsFourAMillionTimes
    
```
使用.name函数可以找回原方程的名字

## Functions as Parameters

**Abstraction** allows us to write complicated code in a way that’s easy to reuse, debug, and understand for human readers

JavaScript functions are first-class objects, so they have **properties and methods** like any object


Functions can be passed into other functions as parameters


A **higher-order** function is a function that either accepts functions as parameters, returns a function, or both