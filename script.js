function firstNonRepeatedChar(str) {
 // Write your code here
	const charCount = {};

    // Count the occurrences of each character in the string
    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first non-repeated character
    for (const char of s) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    // If no non-repeated character is found, return null
    return null;
}
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
