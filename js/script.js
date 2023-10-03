// playGame

function playGame(){
    function clearMessages(playerInput){
    if(playerInput == '1'){
        argPlayerMove = 'kamień';
    }else if(playerInput == '2'){
        argPlayerMove = 'papier';
    }else if(playerInput == '3'){
        argPlayerMove = 'nożyce';
    }
    }

    // computer move
    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let argComputerMove = getMoveName(randomNumber);

    /* if(randomNumber == 1){
    computerMove = 'kamień';
    }else if(randomNumber == 2){
    computerMove = 'papier';
    }else if(randomNumber == 3){
    computerMove = 'nożyce';
    } */

    function getMoveName(argMoveId){
    if(argMoveId == 1){
    return 'kamień';
    } else if(argMoveId == 2){
    return 'papier'
    } else if(argMoveId == 3){
    return 'nożyce'
    }
    }


    printMessage('Mój ruch to: ' + argComputerMove);

    // player move

    /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

    console.log('Gracz wpisał: ' + playerInput);
    
    let playerMove = getMoveName(randomNumber);

    if(playerInput == '1'){
    playerMove = 'kamień';
    }else if(playerInput == '2'){
    playerMove = 'papier';
    }else if(playerInput == '3'){
    playerMove = 'nożyce';
    } 
    */
    printMessage('Twój ruch to: ' + argPlayerMove); 

    // game result

    /* if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
    } else if( computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Ty przegrywasz!');
    } else if( computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Remis!');
    } else if( computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Remis!');
    } else if( computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Ty przegrywasz!');
    } else if( computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty Wygrywasz!');
    } else if( computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage('Remis!');
    } else if( computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty Wygrywasz!');
    } else if( computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Ty przegrywasz!');
    } else if(playerMove == 'nieznany ruch'){
    printMessage('Wybierz liczbe od 1 do 3!');
    } */
    function displayResult(argComputerMove, argPlayerMove){
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    printMessage('Ty wygrywasz!');
    } else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
    printMessage('Ty przegrywasz!');
    } else if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
    printMessage('Remis!');
    } else if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
    printMessage('Remis!');
    } else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
    printMessage('Ty przegrywasz!');
    } else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
    printMessage('Ty Wygrywasz!');
    } else if( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
    printMessage('Remis!');
    } else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
    printMessage('Ty Wygrywasz!');
    } else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
    printMessage('Ty przegrywasz!');
    } else if( argPlayerMove == 'nieznany ruch'){
    printMessage('Wybierz liczbe od 1 do 3!');
    }
    } 
    // listener
    function buttonClicked(){
    playGame(playerInput);
    
    buttonOne.addEventListener('click', buttonClicked);
    let buttonOne = document.getElementById('play-rock');
    }
    function buttonClicked(){
    let buttonTwo = document.getElementById('play-paper');
    buttonTwo.addEventListener('click', buttonClicked);
    }
    function buttonClicked(){
    let buttonThree = document.getElementById('play-scissors');
    buttonThree.addEventListener('click', buttonClicked);
    }

}