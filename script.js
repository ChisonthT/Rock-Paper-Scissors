function getcomputerchoice(){
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
            result = 'Scissor';
    }

    return result; 
}

function getplayerselection(){
    let result = prompt("Please enter either rock, paper, scissors: ", "rock");
    return result;
}

function playround(player_selection,computer_selection){
    p_s = player_selection.toUpperCase();
    c_s = computer_selection.toUpperCase();

    if (p_s == c_s){
        console.log("It's a draw!");
    }else if ((p_s == 'ROCK') && (c_s == 'PAPER')){
        console.log("You LOSE!! Paper beats Rock.");
    }else if ((p_s == 'PAPER') && (c_s == 'SCISSOR')){
        console.log("You LOSE!! Scissor beats paper.");
    }else if ((p_s == 'SCISSOR') && (c_s == 'ROCK')){
        console.log("You LOSE!! Scissor beats Rock.");
    }else if ((p_s == 'ROCK') && (c_s == 'SCISSOR')){
        console.log("You WIN!! Rock beats scissor.");
    }else if ((p_s == 'SCISSOR') && (c_s == 'PAPER')){
        console.log("You WIN!! Scissor beats paper.");
    }else{
        console.log("You WIN!! Paper beats rock.");
    }
}

function playgame(){
    let keep_playing = true;

    while(keep_playing){
        let player_selection = getplayerselection();
        let computer_selection = getcomputerchoice();

        playround(player_selection,computer_selection);
        
        keep_playing = prompt("Please enter either true to keep playing or false to stop: ", "true");
    }
}

playgame();