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
    // console.log(mailformat.test(email))
    
    if(!email.match(mailformat))
    document.getElementById("email_error").style.display='block'
    else
    document.getElementById("email_error").style.display='none'
}