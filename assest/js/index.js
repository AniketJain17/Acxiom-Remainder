const logout = () => {
    window.location.href = "login.html";
  };

  const currentDate = new Date();
  const name = localStorage.getItem('username')
  document.getElementById("username").innerHTML = "Welcome to the Acxiom Reminder Application, " + name
  document.getElementById("date").innerHTML = "Today is: " + currentDate.toDateString();