const getUserChoice = (userInput)=> {
  userInput = userInput.toLowerCase();
  if (userInput==="rock" || userInput==="paper" || userInput==="scissors"){
    return userInput;
  } else {
    console.log("Invalid input");
  }
}

console.log(getUserChoice("rock"))

function getComputerChoice(){
  var number = Math.floor(Math.random()*3);
  switch (number){
    case 1:
      return ("rock")
      break
    case 2:
      return ("paper")
      break
    case 3:
      return ("scissors")
      break
    /*default:
      return ("Invalid Input")
      break*/
  }
}

console.log(getComputerChoice())

function determineWinner (userChoice,computerChoice){
  if (userChoice===computerChoice){
   return ("Game tied.")
 }
  if (userChoice==="rock"){
    if (userChoice==="paper"){
      return ("The user won")
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won!';
  } else {
    return 'You won!';
  }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "The computer won";
    } else {
      return"You won!";
    }
  }
