// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  }
}

function actionWhenFound(place) {
  console.log(`Found Waldo at index ${place}!`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

//modify the callback so that it logs the index of the array, ("Found Waldo at index 2!")
//and actionWhenFound to receive the index