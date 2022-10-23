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

// const myForm = document.getElementById('myForm')
// const myForm1 = document.getElementById('myForm1')
let email = document.getElementById('email')
let password = document.getElementById('password')
// let useremail = document.getElementById('useremail')
let emails = document.getElementById('emails')
let passwords = document.getElementById('passwords')
let conformPass = document.getElementById('conformPass')


// emai 
function ValidateEmail(){
    // var email = document.getElementById('email').Value;

    if(email.value == '' || email.value == null){
        document.getElementById('userError').innerHTML='User Email is not provided'
    }else{
        document.getElementById('userError').innerHTML='';
        // console.log(email.value)
    return true
}
}

function ValidatePass(){
    if(password.value == ''){
        document.getElementById('passError').innerHTML='provid with password';
        // flag = 0 ;  
        // e.preventDefault(); 
    }else{
        document.getElementById('passError').innerHTML='';
        // flag = 1;
        // console.log(password.value)
    }    
}



function validateForm(){
    if(!ValidateEmail() || !ValidatePass()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'please fill info'
        setTimeout(function(){submitError.style.display = 'none';}, 2000)
        return false;   
    }
}