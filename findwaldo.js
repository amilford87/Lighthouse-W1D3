// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  var i = 0;
    arr.forEach(function(names) {
    if (names === "Waldo") {
      found(i);   // execute callback
    }
    i++;
  });
}

function actionWhenFound(index) {
  console.log(`Found him at index ${index}!`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);