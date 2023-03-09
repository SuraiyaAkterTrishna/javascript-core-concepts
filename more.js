const lyrics = 'Tumi bondhu kala Pakhi ami jeno ki Bosonto kale tomay bolte parini';
const lyricsLowerCase = lyrics.toLowerCase();
const searchString = 'Pakhi';
const searchStringLower = searchString.toLowerCase();
const doesExits = lyricsLowerCase.includes(searchStringLower);
// const doesExits = lyrics.includes('Pakhi');
console.log(doesExits);