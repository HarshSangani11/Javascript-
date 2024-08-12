function logVariableValue(variableName) {
    try {
        console.log(eval(variableName));
    } catch (e) {
        console.error(`Error accessing variable '${variableName}': ${e.name} - ${e.message}`);
    }
}

let age = 25;
let name = "Alice";

logVariableValue("age"); 
logVariableValue("name"); 
logVariableValue("mark");