var c = 0
var p = 0

alert("Welcome to AJ productions Blackjack game. Ready to play?")

function n(){ // Asks name
    var nn = prompt("What is your name?")
    return nn
}

function rn(){ // generates random number
    var ra = Math.floor(Math.random() * 10) + 1
    return ra
 }

function player(){ // runs player random numbers

    var plac = 0

    do{
        
      
        var plac = rn() + plac
        if(plac > 21){
            break
        }
       
        console.log(plac)
     
        var ag = prompt(`Your current hand is worth ${plac}. Wanna draw another card. If so press enter other wise type exit.`) 
        console.log(ag)
    } while (ag != "exit") 
    return plac
}

function playerover(){ // if player goes over 21
    
        c++
        console.log(c)
        var plae = prompt("You went over 21 you lose. If you want to play again hit enter otherwise type exit.")
    
}

function comp(){ // computer number generator
    var compc = 0

    do{
       
       
        var compc = rn() + compc
       
        console.log(compc)
    } while(compc < 17) 

    return compc
}

function cscore(x){ // tells comps score
    alert(`The computer has got its number. Its holding value is ${x}.`)
}

function compover(){ // if comp goes over 21
    p++
    console.log(p)
   var compe =  prompt("You win, the computer went over 21. If you wanna play again hit enter otherwise type exit. ")
}


function score(x, y){ // overall scoreing system 
    if (x == y){
        var tie = prompt("It was a tie. Click enter to play again otherewise type exit.")
        
    }
     else if(x == 21) {
        p++
        console.log(p)
        var plaw = prompt("You win; you hit exactly 21. If you wanna play again hit enter otherwise type exit.")
        
    }else if(21 - x > 21 - y){
            c++
            console.log(c)
            var cw = prompt("The computer is closer to 21. You lose. Hit enter to play again otherwise type exit. ")
            
        } else if(21 - y > 21 - x){
        p++
        console.log(p)
        var pw = prompt("You were closer, you win. To play again hit enter otherwise type exit.")
        
    } 
}

n()
program()

function program() {
   
    var x = comp()
    if (x > 21){
        compover()
    } else{
        cscore(x)
        var y = player()

        if(y > 21){
            playerover()
        }else { 
            score(y, x)
        }
    }
    alert(`You have won ${p} times and the computer won ${c} times`)
    var q = prompt("If you'd like to do another conversion, press 1. ")

    if (q == "1") {
        program() // recursive function
    }
}



console.clear()



// function win(){ // win and loss counter
//     alert(`You won ${p} times and the computer won ${c} times`)
// }








// do{
    
// } while((compe != "exit") && (plae != "exit") && (plaw != "exit") && (cw != "exit") && (pw != "exit") && (tie != "exit"))





// var c = 0
// var p = 0

// alert("Welcome to AJ productions Blackjack game. Ready to play?")

// function n(){
//     var nn = prompt("What is your name?")
//     return
// }

// n()

// do{
    


//     var plac = 0

//     do{
//         var ran = Math.floor(Math.random() * 10) + 1;
//         if (ran == 1){
//             ran = 11
//         }
//         var plac = ran + plac
//         if ((plac > 21) && (ran = 11)){
//             ran = 1
//             plac - 11
//             plac = plac + 1 
//         }
//         console.log(plac)
//         if (plac >= 21){
//             break
//         }
//         var ag = prompt(`Your current hand is worth ${plac}. Wanna draw another card. If so press enter other wise type exit.`) 
//         console.log(ag)
//     } while ((ag != "exit")) 

//         if(plac > 21){
//             c++
//             console.log(c)
//             var plae = prompt("You went over 21 you lose. If you want to play again hit enter otherwise type exit.")
//         } else{
    


//     var compc = 0

//     do{
//         var ran = Math.floor(Math.random() * 10) + 1;
//         if (ran == 1){
//             ran = 11
//         }
//         var compc = ran + compc
//         if ((compc > 21) && (ran = 11)){
//             ran = 1
//             compc - 11
//             compc = compc +1 
//         }
//         console.log(compc)
//     } while(compc < 17)

//     if (compc > 21) {
//         p++
//         console.log(p)
//        var compe =  prompt("You win, the computer went over 21. If you wanna play again hit enter otherwise type exit. ")
//     }else {

//     alert(`The computer has got its number. Its holding value is ${compc}.`)


//     if (plac == compc){
//         var tie = prompt("It was a tie. Click enter to play again otherewise type exit.")
//     }
//      else if(plac == 21) {
//         p++
//         console.log(p)
//         var plaw = prompt("You win; you hit exactly 21. If you wanna play again hit enter otherwise type exit.")
//     } else{
//         if(21 - plac > 21 - compc){
//             c++
//             console.log(c)
//             var cw = prompt("The computer is closer to 21. You lose. Hit enter to play again otherwise type exit. ")
//         }  if(21 - compc > 21 - plac){
//         p++
//         console.log(p)
//         var pw = prompt("You were closer, you win. To play again hit enter otherwise type exit.")
//     } 
//     }

// }
//     }


// } while((compe != "exit") && (plae != "exit") && (plaw != "exit") && (cw != "exit") && (pw != "exit") && (tie != "exit"))

// alert(`You won ${p} times and the computer won ${c} times`)