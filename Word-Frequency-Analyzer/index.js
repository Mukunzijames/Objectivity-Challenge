function wordFrequencyAnalyzer(text) {

    const words = text.toLowerCase().split(/\W+/);

    const frequencies = {};

    for (let word of words) {
        if (word in frequencies) {
          frequencies[word]++;
        } else {
          frequencies[word] = 1;
        }
      }
      const frequencyPairs = Object.entries(frequencies);

      frequencyPairs.sort((a, b) => b[1] - a[1]);
      return frequencyPairs;
}
const text = "The quick black fox jumps over the lazy dog. The dog sing well.";

const frequencyList = wordFrequencyAnalyzer(text);
console.log(frequencyList);
