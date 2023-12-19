'use-strict';

let highscoreOne = document.querySelector('.score-one');
let highscoreTwo = document.querySelector('.score-two');
let highs1 = 0, highs2 = 0;

let scoreOne = document.querySelector('.high-score-one');
let scoreTwo = document.querySelector('.high-score-two');
let s1 = 0, s2 = 0;

let uruttu = -1,currPlayer = 1;

let leftSection = document.querySelector('.left');
let rightSection = document.querySelector('.right');
let image = document.querySelector('.image');
let arr = ['images/one-dice.png','images/two-dice.png','images/three-dice.png','images/four-dice.png','images/five-dice.png','images/six-dice.png'];

//document.querySelector('body').style = 'background-color:green';

function unUruttu(player){
    uruttu = -1;
    uruttu = Math.floor(Math.random() * 5 + 1);
    //console.log(uruttu);
    image.style = "display:inline-block";
    image.src = arr[uruttu - 1];
    
    if (uruttu == 1){   
        if (player == 1){
            s1 = 0;
            scoreOne.textContent = s1;
        }else{
            s2 = 0;
            scoreTwo.textContent = s2;
        }
        togglePlayer();
    }else{
        if (player == 1){
            s1 += uruttu;
            scoreOne.textContent = s1;
        }else{
            s2 += uruttu;
            scoreTwo.textContent = s2;
        }
    }
}

document.querySelector('.roll-button').addEventListener('click',function(){
    if (currPlayer == 1){
        unUruttu(1);
    }else{
        unUruttu(2);
    }
});

function checkWon(score,currPlayer){
    if (score >= 50){
        document.querySelector('body').style = 'background-color:green';
        return 1;
    }
    return 0;
}

function togglePlayer(){
    if (currPlayer == 1){
        if (highs1 < s1){
            highs1 = s1;
            highscoreOne.textContent = highs1;
        }
        if (checkWon(highs1,currPlayer)) return;
        
        s1 = 0; scoreOne.textContent = s1;
        leftSection.classList.add('hidden');
        currPlayer = 2;
        rightSection.classList.remove('hidden');
    }else{
        if (highs2 < s2){
            highs2 = s2;
            highscoreTwo.textContent = highs2;
        }
        if (checkWon(highs2,currPlayer)) return;
        s2 = 0; scoreTwo.textContent = s2;
        rightSection.classList.add('hidden');
        currPlayer = 1;
        leftSection.classList.remove('hidden');
    }
}

function resetBabie(){
    s1 = 0; scoreOne.textContent = s1;
    s2 = 0; scoreTwo.textContent = s2;
    highs1 = 0; highscoreOne.textContent = highs1;
    highs2 = 0; highscoreTwo.textContent = highs2;
    currPlayer = 1;
    rightSection.classList.add('hidden');
    leftSection.classList.remove('hidden');
    document.querySelector('body').style = 'background-color:rgb(34, 34, 34)';
    image.style = "display:none";
}

document.querySelector('.hold-button').addEventListener('click',togglePlayer);

document.querySelector('.new-button').addEventListener('click',resetBabie);

document.querySelector('.instruct-button').addEventListener('click', function(){
    document.querySelector('.instruct-modal').style = "display:inline-block;"
    document.querySelector('.outer').classList.add('hidden');
});

document.querySelector('.instruct-close-button').addEventListener('click', function() {
    document.querySelector('.instruct-modal').style = "display:none";
    document.querySelector('.outer').classList.remove('hidden');
});