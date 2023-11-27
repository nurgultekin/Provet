// 2. String-arrays (3p)
// Skriv klart funktionen filterWordsWithLetterA som tar en array med strängar som
// input och returnerar en array med bara de strängar som innehåller "a" (bara liten bokstav).
// tips: använd indexOf eller includes


function filterWordsWithLetterA(array) {
  let resultArray = []; 

  for (let token = 0; token < array.length; token++) {
      if (array[token].includes("a")) {
          resultArray.push(array[token]); 
      }
  }

  return resultArray; 
}

console.log(filterWordsWithLetterA(["Programming", "is", "great!"])); // ska logga ["Programming", "great!"]
