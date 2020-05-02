let killswitch;

const reset = document.querySelector('#reset-button');
const autoplay = document.querySelector('#autoplay-button');
const pause = document.querySelector('#pause-button');
const numResets = document.querySelector('#num-resets');
const shootSound = document.querySelector('#shoot-sound');

const teamOneShoot = document.querySelector('#teamone-shoot-button');
const teamOneShots = document.querySelector('#teamone-numshots');
const teamOneGoals = document.querySelector('#teamone-numgoals');
const teamOneWins = document.querySelector('#teamone-wins');

const teamTwoShoot = document.querySelector('#teamtwo-shoot-button');
const teamTwoShots = document.querySelector('#teamtwo-numshots');
const teamTwoGoals = document.querySelector('#teamtwo-numgoals');
const teamTwoWins = document.querySelector('#teamtwo-wins');

reset.addEventListener('click', function() {
    if (killswitch) {
        clearInterval(killswitch);
        killswitch = undefined;
    }//end if

    if (teamOneGoals.innerText > teamTwoGoals.innerText) {
        teamOneWins.innerText = Number(teamOneWins.innerText) + 1;
    } else if (teamOneGoals.innerText < teamTwoGoals.innerText) {
        teamTwoWins.innerText = Number(teamTwoWins.innerText) + 1;
    }//end if/else if

    teamOneShots.innerText = '0';
    teamOneGoals.innerText = '0';
    teamTwoShots.innerText = '0';
    teamTwoGoals.innerText = '0';
    numResets.innerText = Number(numResets.innerText) + 1;
});//end reset click

autoplay.addEventListener('click', function() {
    if (!killswitch) {
        killswitch = setInterval(function() {
            if (Math.random() < .5) {
                teamOneShoot.click();
            } else {
                teamTwoShoot.click();
            }//end if/else
        }, 1100);//end killswitch assignment
    }//end if
});//end autoplay click

pause.addEventListener('click', function() {
    if (killswitch) {
        clearInterval(killswitch);
        killswitch = undefined;
    }//end if
});//end pause click

teamOneShoot.addEventListener('click', function() {
    shootSound.play();
    teamOneShots.innerText = Number(teamOneShots.innerText) + 1;
    if (Math.random() < .3) {
        teamOneGoals.innerText = Number(teamOneGoals.innerText) + 1;
    }//end if
});//end teamOneShoot click

teamTwoShoot.addEventListener('click', function() {
    shootSound.play();
    teamTwoShots.innerText = Number(teamTwoShots.innerText) + 1;
    if (Math.random() < .3) {
        teamTwoGoals.innerText = Number(teamTwoGoals.innerText) + 1;
    }//end if
});//end teamOneShoot click