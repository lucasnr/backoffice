const form = document.querySelector('.login__form');
form.onsubmit = handleSubmit;

function handleSubmit(event) {
  event.preventDefault();
  window.location.href = 'dashboard.html'; //simple redirect
}