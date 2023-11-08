function auth() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (email == "rono" && password == "12345") {
        window.location.assign("index.html");
        alert("Welcome, rono");
    }
    else{
        alert("Invalid information")
        return;
    }
}