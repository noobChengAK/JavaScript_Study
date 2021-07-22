const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  }
  
  // Write your code below
  const isp2p = checkThatTwoPlusTwoEqualsFourAMillionTimes;
  isp2p();


  //Functions as Parameters


  const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  };
  
  const addTwo = num => num + 2;
  
  const timeFuncRuntime = funcParameter => {
    let t1 = Date.now();
    funcParameter();
    let t2 = Date.now();
    return t2 - t1;
  };
  
  const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);

  const checkConsistentOutput = (func,val) => {
    let try1 = func(val);
    let try2 = func(val);
    if (try1 === try2) {
        return try1;

    }
    else{
        return('This function returned inconsistent results');
    }
}

checkConsistentOutput(addTwo,2);
  