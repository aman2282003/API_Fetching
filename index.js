let userContainer = document.querySelector(".user-container")
    function displaydata(userData){
    userData.forEach( user =>{
        // create and card element
        let usercart = document.createElement("div");
        usercart.className = "item"
        // create an image element
        let userimage = document.createElement("img")
        userimage.src = user.avatar
        // create a p tag which display name 
        let username = document.createElement("p")
        username.textContent = ` Name: ${user.first_name} ${user.last_name}`
        let useremail = document.createElement("p")
        useremail.textContent = `Email: ${user.email}`

        usercart.append(userimage, username, useremail)
        userContainer.append(usercart)

    })
}
function fetching(){
    userContainer.textContent = ""
    fetch("https://reqres.in/api/users")
    .then(function(res){
    return res.json()
    }).then(function(response){
    displaydata(response.data)
    })
}
