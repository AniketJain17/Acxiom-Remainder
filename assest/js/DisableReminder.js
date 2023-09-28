document.addEventListener("DOMContentLoaded", function() {
    var urlParams = new URLSearchParams(window.location.search);
    var reminderId = urlParams.get("id");
    if (!reminderId) {
      console.log("Reminder ID is missing in the URL");
      return;
    }

    var reminders = localStorage.getItem("reminders");
    if (!reminders) {
      console.log("No reminders found in the local storage");
      return;
    }

    reminders = JSON.parse(reminders);
    var reminder = reminders.find(function (r) {
      return r.id === reminderId;
    });

    if (!reminder) {
      console.log("Reminder not found with ID: " + reminderId);
      return;
    }

    document.getElementById("reminderId").value = reminder.id;
    document.getElementById("dateInput").value = reminder.date;
    document.getElementById("subjectSelect").value = reminder.subject;
    document.getElementById("descriptionTextarea").value = reminder.description;
    document.getElementById("descriptionTextarea").disabled=true

    var updatedReminder = {
        id: document.getElementById("reminderId").value,
        date: document.getElementById("dateInput").value,
        subject: document.getElementById("subjectSelect").value,
        description: document.getElementById("descriptionTextarea").value,
    }

  })