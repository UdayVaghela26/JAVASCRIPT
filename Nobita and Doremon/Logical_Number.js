let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) 
    {
    if (numbers[i] % 2 === 0) 
        {
        numbers[i] = numbers[i] ** 2;
    } 
    else 
    {
        numbers[i] = numbers[i] ** 3;
    }
}
numbers.sort((a, b) => b - a);
console.log(numbers);
