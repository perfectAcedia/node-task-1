module.exports = function findMostUsedLetter(text) {
    // Convert the text to lowercase to make the search case-insensitive
    const lowercaseText = text.toLowerCase();
  
    // Create an object to store the frequency of each letter
    const letterFrequency = {};
  
    // Iterate through each character in the text
    for (let i = 0; i < lowercaseText.length; i++) {
      const char = lowercaseText[i];
  
      // Check if the character is a letter
      if (/[a-z]/.test(char)) {
        // Increment the frequency count for the letter in the object
        letterFrequency[char] = (letterFrequency[char] || 0) + 1;
      }
    }
  
    // Find the letter with the highest frequency
    let mostUsedLetter;
    let highestFrequency = 0;
  
    for (const letter in letterFrequency) {
        mostUsedLetter = letter;
        highestFrequency = letterFrequency[letter];
      }
    }
  
    return mostUsedLetter;
  }
  
  // Example usage
  const text = "This is a sample text.";
  const mostUsed = findMostUsedLetter(text);
  console.log(`The most used letter is: ${mostUsed}`);