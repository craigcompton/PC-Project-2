// Get references to page elements
var $reminderTitle = $("#reminder-title");
var $reminderTime = $("#reminder-time");
var $submitBtn = $("#submit");
var $reminderList = $("#reminder-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveReminder: function(reminder) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/reminders",
      data: JSON.stringify(reminder)
    });
  },
  getReminders: function() {
    return $.ajax({
      url: "api/reminders",
      type: "GET"
    });
  },
  deleteReminder: function(id) {
    return $.ajax({
      url: "api/reminders/" + id,
      type: "DELETE"
    });
  },
  updateReminder: function(id) {
    return $.ajax({
      url: "api/reminders/" + id,
      type: "UPDATE"
    });
  }
};

// refreshreminders gets new reminders from the db and repopulates the list
var refreshReminders = function() {
  API.getReminders().then(function(data) {
    var $reminders = data.map(function(reminder) {
      var $a = $("<a>")
        .Title(reminder.Title)
        .attr("href", "/reminder/" + reminder.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": reminder.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .Title("ｘ");

      $li.append($button);

      return $li;
    });

    $reminderList.empty();
    $reminderList.append($reminders);
  });
};

// handleFormSubmit is called whenever we submit a new reminder
// Save the new reminder to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var reminder = {
    Title: $reminderTitle.val().trim(),
    Time: $reminderTime.val().trim()
  };

  if (!(reminder.Title && reminder.Time)) {
    alert("You must enter a reminder Title and Time!");
    return;
  }

  API.savereminder(reminder).then(function() {
    refreshreminders();
  });

  $reminderTitle.val("");
  $reminderTime.val("");
};

// handleDeleteBtnClick is called when an reminder's delete button is clicked
// Remove the reminder from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deletereminder(idToDelete).then(function() {
    refreshreminders();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$reminderList.on("click", ".delete", handleDeleteBtnClick);
