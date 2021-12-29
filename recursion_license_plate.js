// Recursion: License Plate
// Published by Deep Xavier in
// logic recursion regex strings
// Traveling through Europe one needs to pay attention to how the
// license plate in the given country is displayed. When crossing
// the border you need to park on the shoulder, unscrew the plate,
// re-group the characters according to the local regulations,
// attach it back and proceed with the journey.
// Create a solution that can format the dmv number into a plate
// number with correct grouping. The function input consists of
// string s and group length n . The output has to be upper case
// characters and digits. The new groups are made from right to
// left and connected by - . The original order of the dmv number is
// preserved.
// Examples
// licensePlate("5F3Z-2e-9-w", 4) ➞ "5F3Z-2E9W"
// licensePlate("2-5g-3-J", 2) ➞ "2-5G-3J"
// licensePlate("2-4A0r7-4k", 3) ➞ "24-A0R-74K"
// licensePlate("nlj-206-fv", 3) ➞ "NL-J20-6FV"
// Notes
// You are expected to solve this challenge via a recursive
// approach.
// An iterative version of this challenge can be found via this
// link.
// A collection of challenges in recursion can be found via this
// link.


// RECURSION VERSION
function licensePlate(s, n) {
  let replace = s.replace(/-/g, '').toUpperCase()
  
  if (replace.length <= n) {
    
    return replace
    
  } else {
    
    let clip = replace.slice(replace.length - n)
    return licensePlate(replace.slice(0, replace.length - n), n) + '-' + clip
  }
}

console.log(licensePlate("5F3Z-2e-9-w", 4))  //➞ "5F3Z-2E9W"
console.log(licensePlate("2-5g-3-J", 2))     //➞ "2-5G-3J"
console.log(licensePlate("2-4A0r7-4k", 3))   //➞ "24-A0R-74K"
console.log(licensePlate("nlj-206-fv", 3))   //➞ "NL-J20-6FV"




//ITERABLE SOLUTION
// function licensePlate(s, n) {
//   let reg = '.{1,' + n + '}'  //create string for regex that splits into groups of 1 to n characters
//   let regex = new RegExp(reg,'g')

//   return s.replace(/-/g, '')       //remove dashes
//                     .toUpperCase() //change string to uppercase
//                     .split('')     //split into array to use array methods
//                     .reverse()     //reverse all characters
//                     .join('')      //join back to string
//                      .match(regex) //split into array using regex, grouping by n characters
//                      .join('-')    //join with dash
//                      .split('')    //split at each character
//                      .reverse()    //reverse the letters back to original order
//                      .join('')     //join back together
// }