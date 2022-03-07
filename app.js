let userInput = prompt("What do you want to do?");
let toDoList = [];

while (userInput) {
  if (userInput === "new") {
    userInput = prompt("Add New Todo");
    toDoList.push(userInput);
    console.log(`${userInput} has been added to my to do list`);
  }

  if (userInput === "list") {
    for (let i = 0; i < toDoList.length; i++) {
      console.log(`${i}: ${toDoList[i]}`);
    }
  }

  if (userInput === "delete") {
    userInput = prompt("Which index would you like to delete");
    toDoList.splice(userInput);
    console.log("Todo Removed");
  }

  if (userInput === "quit") {
    console.log("You quit the application");
    break;
  }

  userInput = prompt("what would you like to do");
  if (
    userInput !== "new" &&
    userInput !== "list" &&
    userInput !== "delete" &&
    userInput !== "quit"
  ) {
    userInput = prompt("TYPE IN A VALID CHOICE.");
  }
}
