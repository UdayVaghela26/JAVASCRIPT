// 2. Swapping - Tapu Sena Ka Fun Experiment!
// Scenario: Tapu Sena ne do numbers ko magic ke through swap karna seekha.
// Logic: Generate two random numbers and swap them without using a third variable.
// Output: Original aur swapped numbers dikhayein.

let m1 = 5; 
let m2 = 10; 

console.log("Original Numbers : ");
console.log("First Number is : " + m1); 
console.log("Second Number is : " + m2); 

m1 = m1 + m2; // m1 = 5 + 10 = 15
m2 = m1 - m2; // m2 = 15 - 10 = 5
m1 = m1 - m2; // m1 = 15 - 5 = 10

console.log("Swapped Numbers is : ");
console.log("First Number is : " + m1); //  First Number is : 10
console.log("Second Number is : " + m2); // Second Number is : 5
