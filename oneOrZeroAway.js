// There are 3 types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.
// EXAMPLE:
// pale, ple --> true
// pales, pale --> true
// pale, bale --> true
// pale, bae --> false

// NOTES:
// brute force(check all possible strings that are one change away) not advised, since it's too slow.
// consider meaning of removal, replacement and insertion --> insertion and removal are basically testing for the same thing (e.g. 'pale', 'ple' and 'pale', 'pales' can be tested with the same logic)

function oneOrZeroAway(str1, str2) {
  // if lengths differ by more than 1 then can't be true
  if (Math.abs(str1.length - str2.length) > 1) {
    return false;
  }

  let isEdited = false;
  for (let i = 0, j = 0; i < str1.length && j < str2.length; ++i, ++j) {
    if (str1[i] !== str2[j]) {
      if (isEdited) {
        // second edit
        return false;
      }

      if (str1.length > str2.length) {
        --j; // decrease j, we are deleting char from str1
      } else if (str1.length < str2.length) {
        --i; // decrease i, we are deleting char from str2
      }
      isEdited = true;
    }
  }

  return true;
}
