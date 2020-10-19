
// let myDiv = document.createElement("div");
// myDiv.textContent = getAnagramsOf;
// document.body.append(myDiv);
const button = document.getElementById("findButton");
button.onclick = function () {
  let typedText = document.getElementById("input").value;
  function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
  }
  let alphaText = alphabetize(typedText);
  for (let aWord of words) {
    if (alphabetize(aWord) === alphaText) {
      console.log(aWord);
      let p = document.createElement("p");
      p.textContent = aWord;
      document.body.append(p);
    }
    
    // console.log("typedText", typedText);
    // console.log("alphabetized text", alphabetize(typedText));
    // console.log (alphaText, typedText)
    // Make an array and add the words to the array,
    // display array

    // or append each word one at a time on the DOM
  }
};


