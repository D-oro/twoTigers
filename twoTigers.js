// Function to load JSON file using fetch
async function loadJSON(filename) {
  const response = await fetch(filename);
  const data = await response.json();
  return data;
}

// Function to get a random element from an array
function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Function to generate the sentence
async function generateSentence() {
  const animals = await loadJSON('animals.json');
  const places = await loadJSON('places.json');

  const randomAnimal = getRandomElement(animals);
  const randomPlace = getRandomElement(places);

  return `Two ${randomAnimal} cannot live on the same ${randomPlace}.`;
}

// Example usage
generateSentence().then(sentence => {
  console.log(sentence);
});
