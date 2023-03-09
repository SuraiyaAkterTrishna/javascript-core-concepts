const lyrics = 'Tumi bondhu kala Pakhi ami jeno ki Bosonto kale tomay bolte parini';
// const lyricsLowerCase = lyrics.toLowerCase();
const lyricsLowerCase = lyrics.toUpperCase();
const searchString = 'Pakhi';
// const searchStringLower = searchString.toLowerCase();
const searchStringLower = searchString.toUpperCase();
const doesExits = lyricsLowerCase.includes(searchStringLower);
// const doesExits = lyrics.includes('Pakhi');
// console.log(doesExits);

// startWith
console.log(lyrics.startsWith('Tumi'));

// endsWith
console.log(lyrics.endsWith('parini'));

// indexOf
console.log(lyrics.indexOf('ami'));