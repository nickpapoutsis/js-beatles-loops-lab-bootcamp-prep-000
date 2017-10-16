function theBeatlesPlay(musicians, instruments){
  let array = [];

  for (i = 0; i < musicians.length; i++){
      array[i] = musicians[i] + " plays " + instruments[i];
  }
  return array;
}

function johnLennonFacts(array){
  let i = 0;
  while (i < array.length){
    array[i] += "!!!"
    i++
  }
}

function iLoveTheBeetles(number) {
  let array = [];
  do {
    array[number] = "I love the Beetles!"
    number++
  } while (number < 15);
}
