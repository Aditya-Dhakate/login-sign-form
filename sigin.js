function switchForm(className, e) {
	e.preventDefault();
	const allForm = document.querySelectorAll('form');
	const form = document.querySelector(`form.${className}`);

	allForm.forEach(item=> {
		item.classList.remove('active');
	})
	form.classList.add('active');
}

const registerPassword = document.querySelector('form.register #password');
const registerConfirmPassword = document.querySelector('form.register #confirm-pass');

let email = document.getElementById('email')
let password = document.getElementById('password')
let emails = document.getElementById('emails')
let submitError = document.getElementById('submit-error')
let passwords = document.getElementById('passwords')
let conformPass = document.getElementById('conformPass')

var emailBool = false;
var passwordBool =false
var emailsBool =false
var submitErrorBool  =false
var passwordsBool =false
var conformPassBool = false

// form.addEventListenet('submit', (e) =>{
//     e.preventDefault();

//     checkInputs();
// })

function checkInputs(){
    const email = email.value.trim();
    const password = password.value.trim();
    const emails = emails.value.trim();
    const submitError = submitError.value.trim();
    const passwords = passwords.value.trim();
    const conformPass = conformPass.value.trim();

    if(email === ''){
        setErrorFor(email, 'email connot be blank');
    }else{
        emailBool = true
        setErrorFor(email)
    }

    if(password === ''){
      setErrorFor(password, 'password cannot be blnak')
    }else{
        passwordBool=true
        setErrorFor(password);
    }
 
    if(emails === ''){
        setErrorFor(emails, 'emails cannot be blnak')
      }else{
        passwordBool=true
          setErrorFor(emails);
      }

      if(submitError === ''){
        setErrorFor(submitError, 'submitError cannot be blnak')
      }else{
        submitErrorBool=true
          setErrorFor(submitError);
      }

      if(passwords === ''){
        setErrorFor(passwords, 'passwords cannot be blnak')
      }else{
        passwordsBool=true
          setErrorFor(passwords);
      }

      if(conformPass === ''){
        setErrorFor(conformPass, 'password cannot be blnak')
      }else if(passwords !== conformPass){
       setErrorFor(conformPass,'password does not match')
     
     }else{
        conformPassBool=true
          setErrorFor(conformPass);
      }
}

function setErrorFor(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;

    formControl.className = "from-control error";
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'from-control success';
    if(emailBool === true && passwordBool===true){
        alert('login successfully')
    }
}