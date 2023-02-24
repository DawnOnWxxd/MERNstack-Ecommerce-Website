const getUserData = async () => {

    const userE = document.getElementById('userEmail').value
    const userP = document.getElementById('userPassword').value

    if(!userEmail || !userPassword){return console.log("Please provide all credentials")}

    axios.post('/login',{
        userEmail : userE,
        password : userP,
    })
    .then(
        (response) => {
            console.log("Successfully Logged In")
            //Amarjeet enter code here so it says "Successfully registered" on the frontend
        }, (error) => {
            console.log(error)
        }
    )
}