const logout = () => {
    window.location.href = "login.html";
  };
  var reminders = localStorage.getItem("reminders");
  if (reminders) {
    reminders = JSON.parse(reminders);
    var viewRemainderDiv = document.getElementById("viewRemainder");
    viewRemainderDiv.innerHTML = "<h2>Your Reminders:</h2>";
    reminders.forEach(function (reminder) {
      var reminderInfo = document.createElement("p");
      reminderInfo.className = "inforemainder";
      reminderInfo.innerHTML =
        "Date: " +
        reminder.date +
        "<br>" +
        "Subject: " +
        reminder.subject +
        "<br>" +
        "Description: " +
        reminder.description +
        "<br>" +
        "Email: " +
        reminder.email +
        "<br>" +
        "Contact No: " +
        reminder.contactNo +
        "<br>" +
        "SMS No: " +
        reminder.smsNo +
        "<br>" +
        "Recurring Days: " +
        reminder.recurringDays.join(", ");
      var editButton = document.createElement("button");
      editButton.innerText = "Edit";
      editButton.addEventListener("click", function () {
        editReminder(reminder);
      });
      var deleteButton = document.createElement("button");
      deleteButton.innerText = "Delete";
      deleteButton.addEventListener("click", function () {
        deleteReminder(reminder);
      });

      var disableButton = document.createElement("button");
      disableButton.innerText = "Disable";
      disableButton.addEventListener("click", function () {
        disableReminder(reminder);
      });

      var enableButton = document.createElement("button");
      enableButton.innerText = "Enable";
      enableButton.addEventListener("click", function () {
        editReminder(reminder);
      });

      reminderInfo.appendChild(editButton);
      reminderInfo.appendChild(deleteButton);
      reminderInfo.appendChild(disableButton);
      reminderInfo.appendChild(enableButton);

      viewRemainderDiv.appendChild(reminderInfo);
    });

    function editReminder(reminder) {
      var confirmation = confirm("Are you sure you want to Edit this reminder?");
      window.location.href = "./modifyReminder.html";
    }
    function disableReminder(reminder) {
      var confirmation = confirm("Are you sure you want to Disable this reminder?");
      window.location.href = "disableReminder.html";
    }

    function deleteReminder(reminder) {
      var confirmation = confirm("Are you sure you want to delete this reminder?");
      if (confirmation) {
        var reminderIndex = reminders.findIndex(function (r) {
          return r.id === reminder.id;
        });
        if (reminderIndex !== -1) {
          reminders.splice(reminderIndex, 1);
          localStorage.setItem("reminders", JSON.stringify(reminders));
          console.log("Reminder deleted successfully!");
          window.location.reload(); 
        } else {
          console.log("Reminder not found with ID: " + reminder.id);
        }
      }
    }
  }