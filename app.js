const button = document.getElementById("findButton");

button.onclick = function () {
  let typedText = document.getElementById("input").value;
  getAnagramsOf(typedText);
};
function alphebetize(word) {
  return word.toLowerCase().split("").sort().join("").trim();
}
let anagrams = [];
function getAnagramsOf(typedText) {
  let currentWord = alphebetize(typedText);
  for (let i = 0; i < words.length; i++) {
    let nextWord = alphebetize(words[i]);
    if (currentWord === nextWord) {
      anagrams.push(words[i]);
    }
  }
  let outputtedData = document.getElementById("listPerms");
  for (i = 0; i < anagrams.length; i++) {
    outputtedData.innerHTML += anagrams[i] + " ";
  }
}
