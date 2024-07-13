const number = prompt("Enter the number");
const random = Math.floor(Math.random()*number)+1;
let guess = prompt("Guess the number");
while(true){
    if(guess=="quit"){
        console.log("user Quit");
        break;
    }
    if(guess == random){
        console.log("COngrats!you are right random number is " ,random);
        break;
    }
    else if(guess < random){
        guess = prompt("Hint : Youe guess was too small 🥲 Please Try again");

    }else{
        guess = prompt("your guess was too large 🙂 Please Try Again");
       
    }
}
