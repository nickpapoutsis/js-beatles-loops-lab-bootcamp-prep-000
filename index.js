function theBeatlesPlay(musicians, instruments){
  let array = [];

  for (let i = 0; i < musicians.length; i++){
      array[i] = musicians[i] + " plays " + instruments[i];
  }
  return array;
}

function johnLennonFacts(array){
  
  while (let i = 0; i < array.length){
    array[i] = array[i] + "!!!"
    i++
  }
}

function iLoveTheBeatles(number) {
  let array = [];
  do {
    array[number] = "I love the Beatles!"
    number++
  } while (number < 15);
}
