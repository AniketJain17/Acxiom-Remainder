const logout = () => {
    window.location.href = "login.html";
  };

  document
    .getElementById("reminderForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      var x = localStorage.getItem("username");
      var y = localStorage.getItem("reminders");
      var id;
      if (y === null) {
        id = x + 1;
      } else {
        var reminders = JSON.parse(y);
        id = x + reminders.length + 1;
      }

      var date = document.getElementById("dateInput").value;
      var subject = document.getElementById("subjectSelect").value;
      var description = document.getElementById(
        "descriptionTextarea"
      ).value;
      var email = document.getElementById("emailInput").value;
      var contactNo = document.getElementById("contactNoInput").value;
      var smsNo = document.getElementById("smsNoInput").value;

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
        recurringDays: recurringDays,
      };

      var reminders = localStorage.getItem("reminders");
      if (reminders) {
        reminders = JSON.parse(reminders);

        // Find the selected reminder by its description
        var selectedReminderDescription =
          document.getElementById("reminderSelect").value;
        var selectedReminderIndex = reminders.findIndex(function (rem) {
          return rem.description.startsWith(selectedReminderDescription);
        });

        // Modify the selected reminder
        if (selectedReminderIndex !== -1) {
          reminders[selectedReminderIndex] = reminder;
        }
      }

      localStorage.setItem("reminders", JSON.stringify(reminders));
      window.location.href = "index.html";
    });

  // Update form fields when a reminder is selected
  document
    .getElementById("reminderSelect")
    .addEventListener("change", function () {
      var reminders = localStorage.getItem("reminders");
      if (reminders) {
        reminders = JSON.parse(reminders);

        // Find the selected reminder by its description
        var selectedReminderDescription =
          document.getElementById("reminderSelect").value;
        var selectedReminder = reminders.find(function (rem) {
          return rem.description.startsWith(selectedReminderDescription);
        });
        document.getElementById("reminderId").value = selectedReminder.id;
        document.getElementById("dateInput").value = selectedReminder.date;
        document.getElementById("subjectSelect").value =
          selectedReminder.subject;
        document.getElementById("descriptionTextarea").value =
          selectedReminder.description;
        document.getElementById("emailInput").value =
          selectedReminder.email;
        document.getElementById("contactNoInput").value =
          selectedReminder.contactNo;
        document.getElementById("smsNoInput").value =
          selectedReminder.smsNo;

        document.getElementById("7daysCheckbox").checked = false;
        document.getElementById("5daysCheckbox").checked = false;
        document.getElementById("3daysCheckbox").checked = false;
        document.getElementById("2daysCheckbox").checked = false;

        selectedReminder.recurringDays.forEach(function (day) {
          if (day === "7 Days") {
            document.getElementById("7daysCheckbox").checked = true;
          } else if (day === "5 Days") {
            document.getElementById("5daysCheckbox").checked = true;
          } else if (day === "3 Days") {
            document.getElementById("3daysCheckbox").checked = true;
          } else if (day === "2 Days") {
            document.getElementById("2daysCheckbox").checked = true;
          }
        });
      }
    });