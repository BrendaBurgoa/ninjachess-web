// Confetti

const Confettiful = function (el) {
    this.el = el;
    this.containerEl = null;
  
    this.confettiFrequency = 3;
    this.confettiColors = ["#fce18a", "#ff726d", "#b48def", "#f4306d"];
    this.confettiAnimations = ["slow", "medium", "fast"];
  
    this._setupElements();
    this._renderConfetti();
  };
  
  Confettiful.prototype._setupElements = function () {
    const containerEl = document.createElement("div");
    const elPosition = this.el.style.position;
  
    if (elPosition !== "relative" || elPosition !== "absolute") {
      this.el.style.position = "relative";
    }
  
    containerEl.classList.add("confetti-container");
  
    this.el.appendChild(containerEl);
  
    this.containerEl = containerEl;
  };
  
  Confettiful.prototype._renderConfetti = function () {
    this.confettiInterval = setInterval(() => {
      const confettiEl = document.createElement("div");
      const confettiSize = Math.floor(Math.random() * 3) + 7 + "px";
      const confettiBackground = this.confettiColors[
        Math.floor(Math.random() * this.confettiColors.length)
      ];
      const confettiLeft = Math.floor(Math.random() * this.el.offsetWidth) + "px";
      const confettiAnimation = this.confettiAnimations[
        Math.floor(Math.random() * this.confettiAnimations.length)
      ];
  
      confettiEl.classList.add(
        "confetti",
        "confetti--animation-" + confettiAnimation
      );
      confettiEl.style.left = confettiLeft;
      confettiEl.style.width = confettiSize;
      confettiEl.style.height = confettiSize;
      confettiEl.style.backgroundColor = confettiBackground;
  
      confettiEl.removeTimeout = setTimeout(function () {
        confettiEl.parentNode.removeChild(confettiEl);
      }, 3000);
  
      this.containerEl.appendChild(confettiEl);
    }, 25);
  };
  


  // Modals

// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("appStoreBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the input field in the modal
var modalInput = document.getElementById("modalInput");

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    modalInput.value = ""; // Clear the input field
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal2) {
        modal.style.display = "none";
        modalInput.value = ""; // Clear the input field
    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == document.querySelector('.confetti-container')) {
        document.querySelector('.modal.open').classList.remove('open');
        document.querySelector('.confetti-container').style.display= "none";
        document.body.classList.remove('modal-open');
        modalInput.value = ""; // Clear the input field
    }
}


//Mail
const scriptURL = 'https://script.google.com/macros/s/AKfycby5N_iEV_8FZ4iVlK2go-J4SHi7t4ZYYrpqp11T_1qQcTDyk1q7zH8SnCb9hONmhFfuYA/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(function(){
      response=> console.log('Success!', response);
      modal.style.display= "none";
      openModal("modalSuccess");
      })
    .catch(error => console.error('Error!', error.message))
})

function openModal(id) {
    document.getElementById(id).classList.add('open');
    document.body.classList.add('modal-open');
    window.confettiful = new Confettiful(document.querySelector(".confetti"));
}

// close currently open modal
function closeModal() {
    document.querySelector('.modal.open').classList.remove('open');
    document.querySelector('.confetti-container').style.display= "none";
    document.body.classList.remove('modal-open');
    modalInput.value = ""; // Clear the input field
    //modal.style.display= "none";
}

