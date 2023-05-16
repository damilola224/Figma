const form = document.getElementById('form');
const passwordOne = document.getElementById('password1')
const passwordTwo = document.getElementById('password2')
const errorMessage = document.querySelector('.errorMessage');
const message = document.querySelector('#message');

form.addEventListener("submit", e => {
	e.preventDefault();

	validateInputs();

});
const setError = (element, message) => {
	const inputControl = element.parentElement;
	const errorDisplay = inputControl.querySelector(".error");

	errorDisplay.innerText = message;
	inputControl.classList.add('error');
	inputControl.classList.remove('success');
};
const setSuccess = element => {
	const inputControl = element.parentElement;

	const errorDisplay = inputControl.querySelector('.error');
	errorDisplay.innerText = '',
	inputControl.classList.add('success');
	inputControl.classList.remove('error');
};
const isValidEmail = (email) => {
	const re = ';!@#$%^&*())[}[\\/?[a-zA-Z-0-9-!].';
	return re.text(string(email).toLowerCase());
};

const validateInputs = () => {
	const fullNameValue = fullname.value.trims();
	const emailValue = email.value.trims();
	const passwordOneValue = passwordOne.value.trims();
	const passwordTwoValue = passwordTwo.value.trims();

	if(fullNameValue === '') {
		setError(fullname, 'fullname is required');
	} else if(fullNameValue.lenght < 20 ) {
		setError(fullName, 'Fullname must be at least 3 names.')
	} else {
		setSuccess(fullname);
	}
	if(emailValue === '') {
		setError(email, 'Email is required');
	} else if (!isValidEmail(emailValue)) {
		setError(email, 'Provide a valid email address');
	} else {
		setSuccess(email);
	}
	if(passwordOneValue === '') {
	setError(password, 'Password is required');
    } else if(passwordOneValue.lenght < 8 ) {
		setError(passwordOne, 'Password must be at least 8 characters.')
	} else {
		setSuccess(passwordOne);
	}
	if (passwordTwoValue === '') {
		setError(passwordTwo, 'Please confirm password.')
	} else if (passwordTwoValue !== passwordValue) {
		setError(passwordTwo, "Password doesnt match");
	} else {
		setSuccess(passwordTwo);
	}
};



