// Declare variables
const firstname = "John Doe"; 
const age = 25;
const isStudent = true; 
const hobbies = ["Reading", "Traveling", "Coding"]; 
const person = { firstName: "John", lastName: "Doe", age: 25 }; 

// Print values and types
console.log(`Name: ${firstname} (Type: ${typeof firstname})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Hobbies: ${hobbies} (Type: ${typeof hobbies})`);
console.log(`Person: ${JSON.stringify(person)} (Type: ${typeof person})`);

//operators
const calculator = () =>{
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    const operators = prompt("Choose an operation (+, -, *, /):");
    switch (operators) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return "Invalid operator";
    }
}
const result = calculator();
console.log(`Result: ${result}`);


//Functions
const greetUser = (name)=>{
    const message = `Hello ${name}, welcome to our website`;
    const paragraph = document.createElement('p');
    paragraph.textContent = message;
    document.body.appendChild(paragraph);
    return message;
}
greetUser("James");


//IF statements
const votingAge = parseFloat(prompt("Enter your age: "));
const voteParagraph = document.createElement('p');
if(votingAge >= 18){
    voteParagraph.textContent = "You are eligible to vote";
}else{
    voteParagraph.textContent = "You are not eligible to vote";
}
document.body.appendChild(voteParagraph);

Loops
const ol = document.createElement('ol');
for(let i = 0; i <= 10; i++){
    const listItems = document.createElement('li');
    listItems.textContent = i;
    ol.appendChild(listItems);
}
document.body.appendChild(ol);


//Introduction to the DOM
//Creating HTML Structure
const heading = document.createElement('h1');
heading.textContent = 'JavaScript Assignment';
document.body.appendChild(heading);
// Create paragraph
const paragraph = document.createElement('p');
paragraph.textContent = 'Learning JavaScript is fun!';
document.body.appendChild(paragraph);
// Create div with id
const div = document.createElement('div');
div.id = 'dynamic-content';

//Selecting and Modifying HTML Elements
//changing h1
heading.textContent = "JavaScript in Action!";
//adding <p> inside the dynamic-content <div>
const newParagraph = document.createElement('p');
newParagraph.textContent = "This content was added dynamically using JavaScript.";
div.appendChild(newParagraph);
document.body.appendChild(div);


