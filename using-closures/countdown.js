var countdownGenerator = function (x) {
  /* your code here */

  return function() {
    if (x > 0) {
      console.log(`T-minus ${x}...`);
    } else if (x < 0) {
      console.log(`Rockets already gone, bub!`);
    } else {
      console.log(`Blast Off!`);
    }
    x -= 1;
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!


//takes in a number x and returns a function that counts down when it is called

//get number
//use counter starting at number
//closure: print out the results
//if statements: +num = t-mins, 0 = blast off, -num = rocket out;
//counter--