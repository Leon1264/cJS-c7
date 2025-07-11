function validate(e){
    e.preventDefault()
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const age = document.getElementById("age").value
    const messageBox = document.getElementById("message")

    var message = ""
    if (email === ""){
        message = 'Please enter your email'
        messageBox.style.color = "red"
    }
    else if (password===""){
        message = "Password must be atleast 8 characters"
        messageBox.style.color = "red"
    }
    else if (age === ""){
        message = "Age must be between 12 and 50"
        messageBox.style.color = "red"
    }
    else{
        message = "Log In successful"
        messageBox.style.color = "green"
    }

    messageBox.innerText = message
}