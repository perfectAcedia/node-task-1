module.exports = function mostUsedLetter(text) {
    const lowercaseText = text.toLowerCase();
  
    const letterFrequency = {};
  
    for (let i = 0; i < lowercaseText.length; i++) {
      const char = lowercaseText[i];
  
      if (/[a-z]/.test(char)) {
        letterFrequency[char] = (letterFrequency[char] || 0) + 1;
      }
    }
  
    let mostUsedLetter;
    let highestFrequency = 0;
  
    for (const letter in letterFrequency) {
      if (letterFrequency[letter] > highestFrequency) {
        mostUsedLetter = letter;
        highestFrequency = letterFrequency[letter];
      }
    }
  
    return mostUsedLetter;
  }