const savedToken = JSON.parse(localStorage.getItem('tokenData'))
console.log(`Token data is : ${savedToken}`)

const getUserData = async () => {
    const userN = document.getElementById('userName').value
    const userE = document.getElementById('userEmail').value
    const userP = document.getElementById('userPassword').value

    if(!userName || !userEmail || !userPassword){return console.log("Please provide all credentials")}

    axios.post('/register',{
        userName: userN,
        userEmail : userE,
        password : userP,
    })
    .then(
        (response) => {
            saveToken({name:response.data.name, token:response.data.token})
            //Amarjeet enter code here so it says "Successfully registered" on the frontend
        }, (error) => {
            console.log(error)
        }
    )
}

const saveToken = async token => {
    localStorage.setItem('tokenData', JSON.stringify(token))
}