function firstNonRepeatedChar(str) {
	const charCount = {};

  // Loop through the string to build the character count
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Loop through the string again to find the first non-repeated character
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null;  // Return null if no non-repeated character is found
}

const input = promp("Enter a string");
alert(firstNonRepeatedChar(input)); 
