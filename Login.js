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
const myForm = document.getElementById('myForm')
const myForm1 = document.getElementById('myForm1')
let email = document.getElementById('email')
let password = document.getElementById('password')
// let useremail = document.getElementById('useremail')
let emails = document.getElementById('emails')
let passwords = document.getElementById('passwords')
let conformPass = document.getElementById('conformPass')
let flag = 1
// let Validate2 = 1

myForm.addEventListener('submit', (e) =>{
    // e.preventDefault();
    // console.log('provide with info')

    if(email.value == '' || email.value == null){
        document.getElementById('userError').innerHTML='User Email is not provided'
    }else{
        document.getElementById('userError').innerHTML='';
        // flag = 1;
        console.log(email.value)
    }
// })
// function ValidateForm(){
    // if(email.value == ''){
        // console.log("user Email not provided")
        // alert("provide with Email")
        // document.getElementById('userError').innerHTML='User Email is not provided';
        // flag = 0;
        // e.preventDefault();
    // }else{
        // document.getElementById('userError').innerHTML='';
        // flag = 1;
    // }

    if(password.value == ''){
        document.getElementById('passError').innerHTML='provid with password';
        flag = 0 ;  
        e.preventDefault();
    }else{
        document.getElementById('passError').innerHTML='';
        flag = 1;
        console.log(password.value)
    }
     
    if(flag){
        return true;
    }else{
        return false;
    }
    

})
// }




myForm1.addEventListener('submit', (e) =>{
// function ValidateFormReg(){
    if(emails.value == ''){
        // console.log("user not ")
        document.getElementById('userErrorReg').innerHTML='provide email';
        // Validate2 = 0
    }else{
        document.getElementById('userErrorReg').innerHTML='';
        // Validate2 = 1
        console.log(emails.value)
    }



    if(passwords.value == ""){
        document.getElementById('passErrorReg').innerHTML='provide with password'
    }else{
        document.getElementById('passErrorReg').innerHTML=''
        console.log(passwords.value)
    }
    // if(confirmpass.value ==''){
    //   document.getElementById('passErrorReg').innerHTML='provide with above password'
    // }console.log(confirmpass.value)
    
    // if(Validate2){
    //     return true
    // }else{
    //     return false
    // }
// }

// function ValidatePassword(){
    // let passwords = document.getElementById('passwords');
    // let conformPass = document.getElementById('conformPass');
    // console.log(passwords,confirmpass)
    let message = document.getElementById('message');
    if(passwords.length != 0){
        if(passwords == conformPass){
            message.textContent = "password Matchs";
        }else{
            message.textContent = "password not matchs"
            // console.log(conformPass)
        }
      
    }
    //  if(conformPass == passwords){
    //     message.textContent = "password  Matchs"; 
    //  }else{
    //     message.textContent = "password not matchs"
    //  }
    //  myForm1.addEventListener('submit', (e) =>{
        // e.preventDefault();
        // console.log('form has been submited')
    // }
})

// how to use addEventListener? 