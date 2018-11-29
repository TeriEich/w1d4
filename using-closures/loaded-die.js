function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  /* your code here */
  var dice = 0;

  return function() {
    /* your code here */
    dice += 1;
    return list[dice - 1];
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6


//returns a function that when called,
//seems to generate random numbers between 1 and 6,
//but in fact returns numbers in a row from a hardcoded list

//add one to the index value each time it is called
//print the value of the index