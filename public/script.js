const getUserData = async () => {
    const userName = document.getElementById('userName').value
    const userEmail = document.getElementById('userEmail').value
    const userPassword = document.getElementById('userPassword').value

    if(!userName || !userEmail || !userPassword){return console.log("Please provide all credentials")}
    console.log({userName,userEmail,userPassword});

    axios.post('/register',{
        userName: userName,
        password : userPassword
    })
    .then(
        (response) => {
            console.log(response)
        }, (error) => {
            console.log(error)
        }
    )
}