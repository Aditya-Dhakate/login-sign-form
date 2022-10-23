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

// registerPassword.addEventListener('input', function () {
// 	registerConfirmPassword.pattern = `${this.value}`;
// })
const form = document.getElementById('form'),
 email = document.getElementById('email'),
 password = document.getElementById('password'),
 emails = document.getElementById('emails'),
 submitError = document.getElementById('submit-error'),
 submitError1 = document.getElementById('submit-error1'),
 passwords = document.getElementById('passwords'),
 conformPass = document.getElementById('conformPass');




function ValidateEmail(){
  
    const emailpattern =  /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
     if(!email.value.match(emailpattern)){
        document.getElementById('userError').innerHTML='User Email is not provided'
     }
    // else if(email.value == '' || email.value == null){
    //     document.getElementById('userError').innerHTML='User Email is not provided'
    // }
    else{
        document.getElementById('userError').innerHTML='';
        // console.log(email.value)
    return true
}
}

function ValidatePass(){
    if(password.value == ''){
        document.getElementById('passError').innerHTML='provid with password';
    }else{
        document.getElementById('passError').innerHTML='';
        return true
    }    
}

// form.addEventListenet('submit', (e) =>{
//     e.preventDefault();
//     ValidateEmail();
//     ValidatePass();

//     email.addEventListener("keyup", ValidateEmail)
//     password.addEventListener("keyup", ValidatePass)
// })


function validateForm(){
    if(!ValidateEmail() || !ValidatePass()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'please fill info'
        setTimeout(function(){submitError.style.display = 'none';}, 2000)
        return false;   
    }else{
        alert('login complete')
        submitError.style.display = 'block';
        // submitError.innerHTML = 'please fill info'
        submitError.innerHTML='Login Complete'

    }

}




function ValidateEmail1(){
    // if(emails.value == '' || emails.value == null){
    //     document.getElementById('userErrorReg').innerHTML='User Email is not provided'
    // }else if(email.value = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/){
    //     document.getElementById('userErrorReg').innerHTML='User Email is not provided'
    // }else{
    //     document.getElementById('userErrorReg').innerHTML='';
    //     // console.log(email.value)
    // return true
    const email1pattern =  /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
     if(!emails.value.match(email1pattern)){
        document.getElementById('userErrorReg').innerHTML='User Email is not provided'
     }
    // else if(email.value == '' || email.value == null){
    //     document.getElementById('userError').innerHTML='User Email is not provided'
    // }
    else{
        document.getElementById('userErrorReg').innerHTML='';
        // console.log(email.value)
    return true
}
}


function ValidatePass1(){
    if(passwords.value == ''){
        document.getElementById('passErrorReg').innerHTML='provid with password';
    
    }else{
        document.getElementById('passErrorReg').innerHTML='';
        return true
    }   
}

function ValidateconfPass(){

    if(conformPass.value == '' || passwords.value !== conformPass.value){
        // document.getElementById('confErrorReg').innerHTML='fill above value'
        // console.log('true')
        document.getElementById('confErrorReg').innerHTML='provid with above pass'
        message.textContent = "password Not Match"
    }else{
        message.textContent = "password Match"
        return true
    }
    // let message = document.getElementById('message');
    // if(passwords.value != conformPass.value){
    //     message.textContent = "password Not Match"
    // }else if(password.value.length != 0){
    //     message.textContent = 'password Not Match'
    // }else{
    //     message.textContent = 'password not match'
    // }

    // if(passwords.length == conformPass.length){
    //     message.textContent = "password Match"
    // }else if(passwords.length != 0){
    //     message.textContent = 'password not match'
    // }else{
    //     message.textContent = 'password not match'
    // }
}

// form.addEventListenet('submit', (e) =>{
//     e.preventDefault();
//     ValidateEmail1();
//     ValidatePass1();
//     ValidateconfPass();

//     emails.addEventListener("keyup", ValidateEmail1)
//     passwords.addEventListener("keyup", ValidatePass1)
//     conformPass.addEventListener("keyup", ValidateconfPass)
// })

function validateRegister(){
    if( !ValidateEmail1() || !ValidatePass1() || !ValidateconfPass()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'please fill info'
        setTimeout(function(){submitError.style.display = 'none';}, 2000)
        return false; 
    }
    else{
        alert('Registion complete')
        submitError1.style.display = 'block';
        // submitError.innerHTML = 'please fill info'
        submitError1.innerHTML='Regestion  Complete'
    }
}

