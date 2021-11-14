const list = ["paper.png", "scissors.png", "rock.png"]

//DOM  Document Object Model 

const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const rock= document.getElementById('rock')
const compChoice= document.getElementById('compchoice')
const writeResult= document.getElementById('result')
//funksiyalar (JS)

paper.onclick= DoYourChoice
scissors.onclick= DoYourChoice 
rock.onclick= DoYourChoice
//funksiyalarin yaradilmasi
function DoYourChoice(){
    const comp= randomChoice()
    const choice= this.dataset.id

    if(comp==0 && choice==0 ){
          resultt= " Try again"
    }
    else if(comp==0 && choice==1){
        resultt= "You win"
    }
    else if(comp==0 && choice==2){
        resultt= "You lose"
    }
    else if(comp==1 && choice==0){
        resultt= "You lose"
    }
    else if(comp==1 && choice==1){
        resultt= "Try again"
    }
    else if(comp==1 && choice==2){
        resultt= "You win"
    }
    else if(comp==2 && choice==0){
        resultt= "You win"
    }
    else if(comp==2 && choice==1){
        resultt= "You lose"
    }
    else{
        resultt= "Try again"
    }
      writeResult.innerHTML=resultt
}

function randomChoice(){
    const num= Math.round(Math.random()*2) //0-2
    compChoice.src= `img/${list[num]}`  //interpolyasiya

    return num
}

/*  function getstudentscredentials(name,surname, id) {
    console.log("Telebenin adi" + name  + surname+ id)
}  getstudentsCredentials("Aydin", "Rustemov", 1234345) 
*/

/* IIFE Invoked Function expression
(function (name,surname){
    console.log(`xosh gelmisiniz, ${name} ${surname});
} )("Aydin", Rustemov )
} */

/*const gettelebelerinsiyahisigetir = (name,surname) => {
   console.log(`Telebe ${name} ${surname}`)
}*/