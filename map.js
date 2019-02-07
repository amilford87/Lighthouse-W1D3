var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});

function map (arr, mapFunction) {
    word = [];   
    arr.forEach(function(element){
        word.push(mapFunction(element));
    });
console.log(word);
}



