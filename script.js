function getComputerChoice(){
    let com_choice = Math.floor(Math.random() * 3);
    let result;
    switch(com_choice){
        case 0:
            result = 'Rock';
            break;
        case 1:
            result = 'Paper';
            break;
        default:
            result = 'Scissors';
    }

    return result; 
}

function gameReset(){

    let pScore = document.querySelector('#playerScore');
    let cScore = document.querySelector('#computerScore');

    pScore.textContent = 0;
    cScore.textContent = 0;
    
    pScore.dataset.value = 0;
    cScore.dataset.value = 0;
}

function playRound(player_selection,computer_selection){

    let pScore = document.querySelector('#playerScore');
    let cScore = document.querySelector('#computerScore');

    let pValue = pScore.dataset.value;
    let cValue = cScore.dataset.value;

    let thing = pScore.textContent;
    

    if ((player_selection == 'Rock') && (computer_selection == 'Paper')){
        cValue++;
    }
    
    if ((player_selection == 'Paper')&&(computer_selection == 'Scissors')){
        cValue++;
    }
    
    if ((player_selection == 'Scissors')&&(computer_selection == 'Rock')){
        cValue++;
    }
    
    if((player_selection == 'Rock')&&(computer_selection == 'Scissors')){
        pValue++;
    }
    
    if((player_selection == 'Paper')&&(computer_selection == 'Rock')){
        pValue++;
    }
    
    if ((player_selection == 'Scissors')&&(computer_selection =='Paper')){
        pValue++;
    }

    pScore.dataset.value = pValue;
    cScore.dataset.value = cValue;

    pScore.textContent = pValue;
    cScore.textContent = cValue;

    console.log(player_selection);
    console.log(computer_selection);
}

function playGame(){

    let game_buttons = document.querySelector('#game_btns');

    game_buttons.addEventListener('click', (e) => {
        let target = e.target;
        let pScore = document.querySelector('#playerScore');
        let cScore = document.querySelector('#computerScore');

        switch(target.id) {
            case 'newGame':
                gameReset();
                break;

            case 'Rock':
            case 'Paper':
            case 'Scissors':
                let c_choice = getComputerChoice();
                playRound(target.id,c_choice);
                break;
        }

        if (pScore.dataset.value == 5){
            alert("You won!!");
            gameReset();
        }
        
        if (cScore.dataset.value == 5){
            alert("You Lost!!");
            gameReset();
        }
    })
}

playGame();

