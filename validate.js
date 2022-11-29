const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const error = [];
  const success = [];

  const fullname = document.getElementById('name');
  const firstname = document.getElementById('first_name');
  const lastname = document.getElementById('last_name');
  const email = document.getElementById('email');
  const text = document.getElementById('text_area');

  if (fullname.value === '') {
    error.push(fullname, 'Fullname is required');
  } else if (fullname.value.length > 30) {
    error.push(text, 'name must not exceed 30 characters');
  } else {
    success.push(fullname);
  }

  if (firstname.value === '') {
    error.push(firstname, 'Firtsname is required');
  } else {
    success.push(firstname);
  }

  if (lastname.value === '') {
    error.push(lastname, 'Lastname is required');
  } else {
    success.push(lastname);
  }

  if (email.value === '') {
    error.push(email, 'Email is required');
  } else {
    success.push(email);
  }

  if (text.value === '') {
    error.push(' Enter your text here');
  } else if (text.value.length > 500) {
    error.push(text, 'Text must not exceed 500 words');
  } else {
    success.push(text);
  }

  const message = document.getElementById('error');
  message.innerText = error;
});
