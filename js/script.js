// playGame
{
function playGame(argPlayerMove) {
    clearMessages();


    // computer move
    const randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    const argComputerMove = getMoveName(randomNumber);

    function getMoveName(argMoveId) {
        if (argMoveId == 1) {
            return 'kamień';
        } else if (argMoveId == 2) {
            return 'papier'
        } else if (argMoveId == 3) {
            return 'nożyce'
        }
    }


    printMessage('Mój ruch to: ' + argComputerMove);

    // player move


    printMessage('Twój ruch to: ' + argPlayerMove);

    // game result


    function displayResult(argComputerMove, argPlayerMove) {
        
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

        if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
            printMessage('Ty wygrywasz!');
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
            printMessage('Ty przegrywasz!');
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
            printMessage('Remis!');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
            printMessage('Remis!');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
            printMessage('Ty przegrywasz!');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
            printMessage('Ty Wygrywasz!');
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
            printMessage('Remis!');
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
            printMessage('Ty Wygrywasz!');
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
            printMessage('Ty przegrywasz!');
        } else if (argPlayerMove == 'nieznany ruch') {
            printMessage('Wybierz liczbe od 1 do 3!');
        }
    } 
    displayResult(argComputerMove, argPlayerMove);
    // listener
}
const buttonOne = document.getElementById('play-rock');
buttonOne.addEventListener('click', function () {
    playGame('kamień')
});


const buttonTwo = document.getElementById('play-paper');
buttonTwo.addEventListener('click', function () {
    playGame('papier')
});

const buttonThree = document.getElementById('play-scissors');
buttonThree.addEventListener('click', function () {
    playGame('nożyce')
});






}
