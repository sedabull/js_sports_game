const reset = document.querySelector('#reset-button');
const numResets = document.querySelector('#num-resets');
const shootSound = document.querySelector('#shoot-sound');

const teamOneShoot = document.querySelector('#teamone-shoot-button');
const teamOneShots = document.querySelector('#teamone-numshots');
const teamOneGoals = document.querySelector('#teamone-numgoals');

const teamTwoShoot = document.querySelector('#teamtwo-shoot-button');
const teamTwoShots = document.querySelector('#teamtwo-numshots');
const teamTwoGoals = document.querySelector('#teamtwo-numgoals');

reset.addEventListener('click', function() {
    teamOneShots.innerText = '0';
    teamOneGoals.innerText = '0';
    teamTwoShots.innerText = '0';
    teamTwoGoals.innerText = '0';
    numResets.innerText = Number(numResets.innerText) + 1;
});//end reset click

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