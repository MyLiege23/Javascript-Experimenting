let add7 = (n) => n + 7;

let multiply = (x, y) => x * y;

function capitalize(str) {
  return str.replace(str[0], str[0].toUpperCase());
  //*or*
  //return str.charAt(0).toUpperCase() + str.slice(1);
}

let lastLetter = (str) => str[str.length - 1];

// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
  // Only change code above this line
}

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0) {
      if (i % 5 === 0) {
        console.log("fizzBuzz");
      } else {
        console.log("fizz");
      }
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

function fizzBuzz2() {
  let output = [];
  let player = parseInt(
    prompt("Please enter the number you would like to FizzBuzz up to: ")
  );
  for (let x = 1; x <= player; x++) {
    switch (true) {
      case x % 5 == 0 && x % 3 == 0:
        output.push("fizzBuzz");
        break;
      case x % 3 == 0:
        output.push("fizz");
        break;
      case x % 5 == 0:
        output.push("buzz");
        break;
      default:
        output.push(x);
        break;
    }
  }
  return output;
}

//Rock Paper Scizzors exercise!

/*
function playRPS () {
  let player = prompt("Rock, paper, or scissors?").toLowerCase();
  let npc = Math.floor(Math.random() * 3 + 1);
  switch (npc) {
    case 1: npc = "rock";
    break;
    case 2: npc = "paper";
    break;
    case 3: npc = "scissors";
    break;
    default: console.log("Error: npc gave random number not between 0 and 3 - correct function")
  }
  switch (true) {
    case (npc == player): alert("tie!");
    break;
    case (npc === "rock" && player === "paper"): alert("npc played " + npc + ": you win!");
    break;
    case (npc === "paper" && player === "scissors"): alert("npc played " + npc + ": you win!");
    break;
    case (npc === "scissors" && player === "rock"): alert("npc played " + npc + ": you win!");
    break;
    case (npc === "rock" && player === "scissors"): alert("npc played " + npc + ": you lose!");
    break;
    case (npc === "paper" && player === "rock"): alert("npc played " + npc + ": you lose!");
    break;
    case (npc === "scissors" && player === "paper"): alert("npc played " + npc + ": you lose!");
    break;
    default: alert("you may have misspelled rock, paper, or scissors");
  }
}
*/
/*
Above is my attempt at writing the single call rock paper scissors game without player from The Odin project. 
Below, I'll be following the instructions from The Odin Project for writing the same program. 
Note: above, I used the function playRPS() to run the game, with npc declaired within the function as a random number 
converted to a string for "rock", "paper", or "scissors", and the player's choice as "player".
Below, I'll be using the function rpsRound() with args "npc" and "player". This way, all code will be fresh.
below is the planning pseudocode 
*/

/*
function getComputerChoice:
  return string:
function getPlayerChoice:
  return string:
function whoWon(computerChoice, playerChoice):
  return number for score:

function playRPS(#):
  plays games # of times,
  sets playerChoice = getPlayerChoice();
  sets computerChoice = getComputerChoice();
  Prints choices:
  calls the function (whoWon?):
  outcome = whoWon(playerChoice, computerChoice);
  switch (outcome)
  */

let rpsOptions = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return rpsOptions[~~(Math.random() * rpsOptions.length)];
}

function getPlayerChoice() {
  return prompt("Rock, paper, or scissors?").toLowerCase();
}

function rpsWhoWon(computerChoice, playerChoice) {
  if (computerChoice === playerChoice) {
    return 0;
  } else if (computerChoice === "rock") {
    if (playerChoice === "paper") {
      return 1;
    } else if (playerChoice === "scissors") {
      return -1;
    }
  } else if (computerChoice === "paper") {
    if (playerChoice === "rock") {
      return -1;
    } else if (playerChoice === "scissors") {
      return 1;
    }
  } else if (computerChoice === "scissors") {
    if (playerChoice === "rock") {
      return 1;
    } else if (playerChoice === "paper") {
      return -1;
    }
  }
}

function playRPSOutOf(n) {
  let computerScore = 0;
  let playerScore = 0;
  while (computerScore + playerScore < n) {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    console.log("Player: " + playerChoice);
    console.log("Computer: " + computerChoice);
    let outcome = rpsWhoWon(computerChoice, playerChoice);
    switch (outcome) {
      case -1:
        console.log("Computer won!");
        computerScore++;
        break;
      case 1:
        console.log("Player won!");
        playerScore++;
        break;
      default:
        console.log("Tie!");
        break;
    }
  }
  let gameScore =
    "Player Score: " + playerScore + " \nComputer Score: " + computerScore;
  console.log(gameScore);
  return gameScore;
}
