// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("appStoreBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
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
      openModal("modalSuccess");
      })
    .catch(error => console.error('Error!', error.message))
})

function openModal(id) {
    document.getElementById(id).classList.add('open');
    document.body.classList.add('modal-open');
}

// close currently open modal
function closeModal() {
    document.querySelector('.modal.open').classList.remove('open');
    document.body.classList.remove('modal-open');
    modal.style.display= "none";
}