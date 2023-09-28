const logout = () => {
    console.log("hy");
    window.location.href = "login.html";
  };



  document.getElementById("reminderForm").addEventListener("submit", function(event) {
    debugger
      event.preventDefault();

      var x = localStorage.getItem('username');
      var y = localStorage.getItem('reminders');
      var id;
      if (y === null) {
          id = x + 1;
      } else {
          var reminders = JSON.parse(y);
          id = x + (reminders.length + 1);
      }

      var date = document.getElementById("dateInput").value;
      var subject = document.getElementById("subjectSelect").value;
      var description = document.getElementById("descriptionTextarea").value;
      var email = document.getElementById("emailInput").value;
      var contactNo = document.getElementById("contactNoInput").value;
      var smsNo = document.getElementById("smsNoInput").value;

      // Get recurring days
      var recurringDays = [];
      if (document.getElementById("7daysCheckbox").checked) {
          recurringDays.push("7 Days");
      }
      if (document.getElementById("5daysCheckbox").checked) {
          recurringDays.push("5 Days");
      }
      if (document.getElementById("3daysCheckbox").checked) {
          recurringDays.push("3 Days");
      }
      if (document.getElementById("2daysCheckbox").checked) {
          recurringDays.push("2 Days");
      }

      var reminder = {
          id: id,
          date: date,
          subject: subject,
          description: description,
          email: email,
          contactNo: contactNo,
          smsNo: smsNo,
          recurringDays: recurringDays
      };

      var reminders = localStorage.getItem("reminders");
      if (reminders) {
          reminders = JSON.parse(reminders);
          reminders.push(reminder);
      } else {
          reminders = [reminder];
      }

      localStorage.setItem("reminders", JSON.stringify(reminders));
      window.location.href = 'index.html';
  });