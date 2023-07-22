const rndInt = Math.floor(Math.random() * 10) + 1
let guessed_number = 0, counter = 3;

// initialize UI elements
let inpt = document.querySelector('#floatingInput');
let result_btn = document.querySelector('#result-btn');
let state = document.querySelector('#state');
let restart_btn = document.querySelector('#restart-btn');
let div_restart = document.querySelector('#div-restart');


// add event listener
result_btn.addEventListener('click', takeAnswer);
restart_btn.addEventListener('click', restartGame);


// restart Game function
function restartGame(e){
  location.reload();
}
// answer verification function
function takeAnswer(e) {
  e.preventDefault();
  guessed_number = inpt.value;
  if (counter >= 1) {
    counter--
    if (counter == 0 && guessed_number != rndInt) {
      state.innerHTML = `<div class="alert alert-danger text-center" role="alert">
            <h4 class="alert-heading">Game Over!</h4>
            <hr>
            <p class="mb-0"><b>You lost</b></p>
          </div>`
          inpt.value = '';
          inpt.setAttribute('disabled','');
          restart_btn.removeAttribute('disabled');
    }
    else if (guessed_number == rndInt) {
      state.innerHTML = `<div class="alert alert-success text-center" role="alert">
            <h4 class="alert-heading">You Win!</h4>
            <hr>
            <p class="mb-0"><b>Congratulations</b></p>
          </div>`
      inpt.value = '';
      inpt.setAttribute('disabled','');
      restart_btn.removeAttribute('disabled');
    } else if (guessed_number < rndInt) {
      state.innerHTML = `<div class="alert alert-warning text-center" role="alert">
            <h4 class="alert-heading">${counter} chances left!</h4>
            <hr>
            <p class="mb-0"><b>Hints: </b>Correct answer is larger</p>
          </div>`
      inpt.value = '';
    } else if (guessed_number > rndInt) {
      state.innerHTML = `<div class="alert alert-warning text-center" role="alert">
            <h4 class="alert-heading">${counter} chances left!</h4>
            <hr>
            <p class="mb-0"><b>Hints: </b>Correct answer is Smaller</p>
          </div>`
      inpt.value = '';
    } else {
      state.innerHTML = `<div class="alert alert-danger text-center" role="alert">
            <h4 class="alert-heading">Something went wrong!</h4>
            <hr>
            <p class="mb-0"><b>Hints: </b>enter number in number field</p>
          </div>`
      inpt.value = '';
    }
  }
}