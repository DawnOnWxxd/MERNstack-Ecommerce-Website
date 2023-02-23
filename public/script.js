const getUserData = async () => {
    const userN = document.getElementById('userName').value
    const userE = document.getElementById('userEmail').value
    const userP = document.getElementById('userPassword').value

    if(!userName || !userEmail || !userPassword){return console.log("Please provide all credentials")}
    console.log({userName,userEmail,userPassword});

    axios.post('/register',{
        userName: userN,
        userEmail : userE,
        password : userP,
    })
    .then(
        (response) => {
            console.log(response)
            //Amarjeet enter code here so it says "Successfully registered on the frontend"
        }, (error) => {
            console.log(error)
        }
    )
}