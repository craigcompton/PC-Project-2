window.onload = function () {
  console.log("add.js loaded");
  // Make a get request to our api route that will return every book
  $.get("/api/add", function (data) {
    // For each book that our server sends us back
    for (var i = 0; i < data.length; i++) {
      // Create a parent div to hold book data
      var reminderSection = $("<div>");
      // Add a class to this div: 'well'
      reminderSection.addClass("well");
      // Add an id to the well to mark which well it is
      reminderSection.attr("id", "reminder-show" + i);
      // Append the well to the well section
      $("#reminderSection").append(reminderSection);

      // Now  we add our book data to the well we just placed on the page
      $("#reminder-show" + i).append("<h5>" + (i + 1) + ". " + data[i].title + "</h5>");
      $("#reminder-show" + i).append("<h6>Date: " + data[i].date + "</h6>");
      $("#reminder-show" + i).append("<h6>Time: " + data[i].time + "</h6>");
      // $("#reminder-show" + i).append("<button class='update' data-id='" + data[i].id + "'>UPDATE</button>");
      $("#reminder-show" + i).append("<button class='delete' data-id='" + data[i].id + "'>DELETE</button>");
      
      //   $("#reminder-show" + i).append("<h5>Pages: " + data[i].pages + "</h5>");
    }

    $(".delete").click(function () {
      $.ajax({
        method: "DELETE",
        url: "/api/reminder/" + $(this).attr("data-id")
      })
        // On success, run the following code
        .then(function () {
          console.log("Deleted Successfully!");
        });
      // $(this).closest("#reminder-show" + i).remove();
    });

    $(".update").click(function () {
      $.ajax({
        method: "PUT",
        url: "/api/reminder/" + $(this).attr("data-id")
      })
        // On success, run the following code
        .then(function () {
          console.log("Updated Successfully!");
        });
      // $(this).closest("#reminder-show" + i).remove();
    });

  });
};


// The code in add.js handles what happens when the user clicks the "Add a book" button.
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();
if (dd < 10) {
  dd = '0' + dd
}
if (mm < 10) {
  mm = '0' + mm
}

today = yyyy + '-' + mm + '-' + dd;

document.getElementById("newDate").setAttribute("min", today);


// When user clicks add-btn
$("#addSubmit").on("click", function (event) {
  event.preventDefault();

  // Make a newBook object
  var newReminder = {
    title: $("#newReminder").val().trim(),
    date: $("#newDate").val().trim(),
    time: $("#newTime").val().trim(),
    // alarmType: $("#newAlarm").val().trim()
  };


  // Send an AJAX POST-request with jQuery
  $.post("/api/addNew", newReminder)
    // On success, run the following code
    .then(function (data) {
      // Log the data we found
      console.log(data);
    });

  // Empty each input box by replacing the value with an empty string
  $("#newReminder").val("");
  $("#newDate").val("");
  $("#newTime").val("");
  $("#newAlarm").val("");
});