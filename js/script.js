
  
  let randomNumber = Math.floor(Math.random() * 3 + 1);

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

  let computerMove = getMoveName(randomNumber);

  printMessage('Mój ruch to: ' + computerMove);


  let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

  console.log('Gracz wpisał: ' + playerInput);

  let playerMove = getMoveName(playerInput);

  printMessage('Twój ruch to: ' + playerMove);


  let argComputerMove =  getMoveName(randomNumber);
  let argPlayerMove = getMoveName(playerInput);

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
