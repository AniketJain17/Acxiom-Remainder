document.getElementById("myForm").addEventListener("submit", function (event) {
  console.log("hiii");
  event.preventDefault();

  var username = document.getElementById("usernameInput").value;
  var password = document.getElementById("passwordInput").value;
  console.log("hiii");

  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  alert("Form values stored in localStorage!");

  document.getElementById("myForm").reset();
});
