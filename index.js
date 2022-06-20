//- Prompt the user for a letter
let userLetter = String(prompt("Pick a letter?"));


//- Find all the users who's name contains the letter
let findUser = users.filter((user) => users.name.includes(userLetter));


//- Say hi to those users in the console
//- but only 1 greeting every 2 seconds.




//- Prompt the user for a user ID.
// Using the value, find all the todos that are Incomplete and console.log them.

let userId = Number(prompt("Enter a userId..."));

let findTodo = todos.filter(
  (todo) => todo.userId === userId && todo.completed === false
);
console.log(findTodo);
