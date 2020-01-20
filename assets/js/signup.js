const dots = document.querySelectorAll('.signup__dot-navigator');
const buttons = document.querySelectorAll('.form__btn');
const steps = document.querySelectorAll('.signup__step');
buttons.forEach((button, index) => {
  if(index === buttons.length-1) { //is the last button
    return;
  }

  button.onclick = () => {
    steps.forEach(step => step.classList.remove('signup__step--selected'));
    steps[index+1].classList.add('signup__step--selected');
    
    dots.forEach(dot => dot.classList.remove('signup__dot-navigator--selected'));
    dots[index+1].classList.add('signup__dot-navigator--selected');

    if(index === 1) { //last form
      const hasAccount = document.querySelector('.signup__has-account');
      hasAccount.classList.add('show');
    }
  }
});

const forms = document.querySelectorAll('.form');
forms.forEach(form => form.onsubmit = (event) => event.preventDefault());