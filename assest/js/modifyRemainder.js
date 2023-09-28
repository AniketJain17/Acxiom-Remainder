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
    document.getElementById("emailInput").value = reminder.email;
    document.getElementById("contactNoInput").value = reminder.contactNo;
    document.getElementById("smsNoInput").value = reminder.smsNo;

    reminder.recurringDays.forEach(function (day) {
      document.getElementById(day.toLowerCase() + "daysCheckbox").checked = true;
    });

    var editReminderForm = document.getElementById("editReminderForm");
    editReminderForm.addEventListener("submit", function (event) {
      event.preventDefault();

      
      var updatedReminder = {
        id: document.getElementById("reminderId").value,
        date: document.getElementById("dateInput").value,
        subject: document.getElementById("subjectSelect").value,
        description: document.getElementById("descriptionTextarea").value,
        email: document.getElementById("emailInput").value,
        contactNo: document.getElementById("contactNoInput").value,
        smsNo: document.getElementById("smsNoInput").value,
        recurringDays: [],
      };

      
      var recurringDaysCheckboxes = document.querySelectorAll(
        'input[type="checkbox"]:checked'
      );
      recurringDaysCheckboxes.forEach(function (checkbox) {
        updatedReminder.recurringDays.push(checkbox.id.replace("daysCheckbox", "").toUpperCase());
      });

     
      var reminderIndex = reminders.findIndex(function (r) {
        return r.id === updatedReminder.id;
      });
      if (reminderIndex !== -1) {
        reminders[reminderIndex] = updatedReminder;
        localStorage.setItem("reminders", JSON.stringify(reminders));
        console.log("Reminder updated successfully!");
        window.location.href = "index.html"; // Redirect to the main page
      } else {
        console.log("Reminder not found with ID: " + updatedReminder.id);
        window.location.href = "index.html";
      }
    });
  });