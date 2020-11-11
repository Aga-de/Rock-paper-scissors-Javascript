{
  const playGame = function(playerInput) {

  clearMessages();

  const randomNumber = Math.floor(Math.random() * 3 + 1);

  const getMoveName = function(randomNumber) {
    if(randomNumber == 1) {
      return 'kamień';
    }
    else if(randomNumber == 2) {
      return 'papier';
    }
    else if(randomNumber == 3) {
      return 'nożyce';
    }
    else {
    printMessage('Nie znam ruchu o id ' + randomNumber + '.');
    return 'nieznany ruch';
    }
  }

  console.log('Wylosowana liczba to: ' + randomNumber);

  const computerMove = getMoveName(randomNumber);

  printMessage('Mój ruch to: ' + computerMove);

  
  console.log('Gracz wpisał: ' + playerInput);

  const playerMove = getMoveName(playerInput);

  printMessage('Twój ruch to: ' + playerMove);


  const argComputerMove =  getMoveName(randomNumber);
  const argPlayerMove = getMoveName(playerInput);

  console.log('moves:', argComputerMove, argPlayerMove); 

  const displayResult = function(argComputerMove, argPlayerMove) {  
    if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
      printMessage('Ty wygrywasz!');
      return 'Ty wygrywasz!';
    }
    else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
      printMessage('Ty przegrywasz!');
      return 'Ty przegrywasz!';
    }
    else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
      printMessage('Remis!');
      return 'Remis!';
    }
    else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
      printMessage('Ty wygrywasz!');
      return 'Ty wygrywasz!';
    }
    else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
      printMessage('Ty przegrywasz!');
      return 'Ty przegrywasz!';
    } 
    else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
      printMessage('Remis!');
      return 'Remis!';
    }
    else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
      printMessage('Ty przegrywasz!');
      return 'Ty przegrywasz!';
    }
    else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
      printMessage('Ty przegrywasz!');
      return 'Ty przegrywasz!';
    }
    else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
      printMessage('Remis!');
      return 'Remis!';
    }
    else if (argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch') {
      printMessage('Błędnie wpisany ruch!');
      return 'Błędnie wpisany ruch!';
    }
    else if (argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch') {
      printMessage('Błędnie wpisany ruch!');
      return 'Błędnie wpisany ruch!';
    }
    else if (argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch') {
      printMessage('Błędnie wpisany ruch!');
      return 'Błędnie wpisany ruch!';
    }
  }
  displayResult(argComputerMove,argPlayerMove);
} 

  document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
  });
  document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
  });
  document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
  });
}