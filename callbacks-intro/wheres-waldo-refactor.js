function findWaldo(arr, found) {
  arr.forEach(function(place) {
    if (place === "Waldo") {
      found(arr.indexOf(place));   // execute callback
    }
  });
}

function actionWhenFound(place) {
  console.log(`Found Waldo at index ${place}!`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


//refactor using forEach instead of for loop