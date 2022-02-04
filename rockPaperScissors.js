function computerPlay(){ 
    randNum = Math.floor(Math.random() * (4 - 1) + 1)
    if (randNum == 1) {
        return 'rock'
    }
    else if (randNum == 2) {
       return 'paper'
   }
   else if (randNum == 3) {
       return 'scissors'
   }
   else {
       console.log('Error!')
   }
} 

function playerSelection(x) {
     if (x == 'rock') {
         return 'rock'
     }
     else if (x == 'paper') {
        return 'paper'
    }
    else if (x == 'scissors') {
        return 'scissors'
    }
    else {
        console.log('Invalid Input Recieved!')
    }
}


function playRound(usersMove, computersMove) {

    if (usersMove == computersMove){
        return `Draw!\n\nUser's Move: ${usersMove}\nComputer's Move: ${computersMove}`
    }
    else if (usersMove == 'rock' && computersMove == 'scissors'){
        return `You Win!!\n\nUser's Move: ${usersMove}\nComputer's Move: ${computersMove}`
    }
    else if (usersMove == 'paper' && computersMove == 'rock'){
        return `You Win!!\n\nUser's Move: ${usersMove}\nComputer's Move: ${computersMove}`
    }
    else if (usersMove == 'scissors' && computersMove == 'paper'){
        return `You Win!!\n\nUser's Move: ${usersMove}\nComputer's Move: ${computersMove}`
    }
    else{
        return `You Lose!\n\nUser's Move: ${usersMove}\nComputer's Move: ${computersMove}`
    }
}

const userMove = prompt("Please choose: \nRock,\nPaper,\nOr\nScissors.").toLowerCase();

console.log(`${userMove} computers: ${computerPlay()}`)
console.log(playRound(userMove,computerPlay(), `${computerPlay()}`)
)