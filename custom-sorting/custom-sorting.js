var array = [10, 2, 5, 1, 9];

array.sort(function (a, b) {
  return a - b;
})

console.log(array);

//array.sort(); //add compareFunction

//the sorted array should equal [1, 2, 5, 9, 10]