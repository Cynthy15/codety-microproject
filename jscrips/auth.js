
const onSignup = () =>{
    const first_name = document.getElementById("firstName").value;
    const last_name = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log({
        first_name, last_name, email, password
    })

    auth.createUserWithEmailAndPassword(email, password)
    .then((userAccount) => {
        db.collection("users").doc().set({first_name,last_name,email,created_at:new Date()})
        .then((userProfile) => {
            console.log(userProfile);
            alert("User registered successfully")
            window.location.href="./lapregister.html";
        })
        .catch((error) => {
            alert(" user profile not registered")
            console.log("error");
        })
    })
    .catch((error) => {
        alert("Error occurred");
        console.log(error)
    })
}
const onLogin=() => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
 
    auth.signInWithEmailAndPassword(email,password)
    .then((userSession) => {
        alert("user logged in successfully")
        window.location.href="./working page.html";
        console.log(userSession);
    })
    .catch((error) => {
        alert("Invalid credentials")
        console.log(error);
    })
}
