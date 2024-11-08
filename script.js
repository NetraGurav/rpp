let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        console.log("The choice was clicked",userchoice);
        playGame(userchoice);
    }
    );
});

let mssg = document.querySelector("#msg");
let user = document.querySelector("#user-score");
let comp = document.querySelector("#comp-score");

 

const genCompChoice = () =>{
    let ch = ["rock","paper","scissor"];
    const rdidx = Math.floor(Math.random()*3);
    return ch[rdidx];
}
const drawgame = () =>{
    console.log("Draw game");
    mssg.innerText = "Draw game";
    mssg.style.backgroundColor = "yellow" ; 
}
const showWinner = (userwin , userchoice ,compchoice) =>{
    if(userwin){
        console.log("You win");
        userScore++;
        user.innerText = userScore;
        mssg.innerText=`You win your ${userchoice} beats ${compchoice}`;
        mssg.style.backgroundColor = "green" ; 
    }
    else{
        console.log("You lose");
        compScore++;
        comp.innerText = compScore;
        mssg.innerText=`You loose comp ${compchoice} beats your ${userchoice}`;
        mssg.style.backgroundColor = "red" ; 
    }
}

const playGame = (userchoice) =>{
 console.log("userchoice = " ,userchoice);
 const compchoice = genCompChoice();
 console.log("Comp choice",compchoice);
 let userwin = true;
 if(userchoice === compchoice){
    drawgame();
 }
 else{
    let userwin = true;
    if(userchoice === "rock" ){
        userwin = compchoice === "paper"?false:true;
       
    }
    else if(userchoice === "paper"){
        userwin = compchoice === "scissor"?false:true;
    }
    else{
        userwin = compchoice === "rock"?false:true;
    }
    showWinner(userwin, userchoice ,compchoice);
 }
  
}
