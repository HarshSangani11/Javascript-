function divideNumbers(num1, num2) {
    try {
        if (num2 === 0) {
            throw new Error("Division by zero is not allowed");
        }
        let result = num1 / num2;
        console.log(`Result: ${result}`);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

divideNumbers(12, 4); 
divideNumbers(12, 0); 
divideNumbers(12, 3); 