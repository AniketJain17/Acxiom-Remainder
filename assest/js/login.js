document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var username = document.getElementById("usernameInput").value;
    var password = document.getElementById("passwordInput").value;

    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
        window.location.href = "index.html";
    } else {
        window.location.href = 'loginFailed.html';
    }
});