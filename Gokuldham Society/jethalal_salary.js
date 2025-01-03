// 1. Arithmetic Operations - Jethalal ki Salary Ka Hisab!
// Scenario: Jethalal apni salary ko samajh nahi pa raha.
// Logic: Perform arithmetic operations (add, subtract, multiply, divide, modulus).
// Output: Show calculations step-by-step using console.log.


let salary = 50000; // Initialize Jethalal's monthly salary as 50000

let bonus = 5000; // salary bonus 
let totalSalary = salary + bonus; // Calculate total salary: 50000 + 5000 = 55000
console.log("Total Salary (Salary + Bonus): " + totalSalary); 

let expenses = 20000; // monthly salary
let remainingSalary = salary - expenses; // Calculate remaining salary: 50000 - 20000 = 30000
console.log("Remaining Salary (Salary - Expenses): " + remainingSalary); 

let annualMultiplier = 12; // total months to year
let annualSalary = salary * annualMultiplier; // Calculate annual salary: 50000 * 12 = 600000
console.log("Annual Salary (Salary * Annual Multiplier): " + annualSalary); 

let daysInMonth = 30; // standard month
let dailySalary = salary / daysInMonth; // Calculate daily salary: 50000 / 30 = 1666.67
console.log("Daily Salary (Salary / Days in Month): " + dailySalary); 7

let taxRate = 7; // texrate 
let remainder = salary % taxRate; // Calculate remainder when salary is divided by tax rate: 50000 % 7 = 6
console.log("Remainder when Salary is divided by Tax Rate (Salary % Tax Rate): " + remainder); 
