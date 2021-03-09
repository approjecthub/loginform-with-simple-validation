
function validateUname(){
    const uname = document.getElementById('Uname').value
    console.log(uname.length)
    if(uname.length<=4)
    document.getElementById("uname_error").style.display='block'
    else
    document.getElementById("uname_error").style.display='none'
}

function validateEmail(){
    const email = document.getElementById("usermail").value
    const mailformat =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    
    if(!email.match(mailformat))
    document.getElementById("email_error").style.display='block'
    else
    document.getElementById("email_error").style.display='none'
}

function checkpassword1() {
    if(password1.value==password2.value){
        password2_error.style.display = 'none'
    }
    if (password1.value.length==0){
        password1_error.style.display = 'block'
        password1_error.innerHTML = "password can not be empty"
    }
    else{
        password1_error.style.display = 'none'
    }
}

function checkpassword2(){
    if (password2.value.length==0){
        password2_error.style.display = 'block'
        password2_error.innerHTML = "password can not be empty"
    }
    else if(password1.value!=password2.value){
        password2_error.style.display = 'block'
        password2_error.innerHTML = "password does not match"
    }
    else{
        password2_error.style.display = 'none'
    }
}

const password1 = document.getElementById('password1')
const password1_error = document.getElementById('password1_error')
const password2 = document.getElementById('password2')
const password2_error = document.getElementById('password2_error');
const submit = document.getElementById('submit')

password1.addEventListener('keyup', checkpassword1)

password2.addEventListener('keyup', checkpassword2)

submit.addEventListener('click',(evt)=>{
    evt.preventDefault();
    validateUname()
    validateEmail()
    checkpassword1()
    checkpassword2()
})
