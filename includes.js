// String.includes()
const sentence = 'The quick brown Fox jumps over the lazy dog.';
const word = 'fox';
console.log(sentence.includes(word));
console.log(`The word ${word} ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);