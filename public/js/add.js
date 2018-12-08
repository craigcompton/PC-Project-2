var now = moment();
var timeNow = moment().format('h:mm a')
var reminderNow = [];
var timeTodayArr = [];

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
      $("#reminder-show" + i).append("<button class='update' data-id='" + data[i].id + "'>EDIT</button>");
      $("#reminder-show" + i).append("<button class='delete' data-id='" + data[i].id + "'>DELETE</button>");

      //   $("#reminder-show" + i).append("<h5>Pages: " + data[i].pages + "</h5>");

      timeTodayArr.push(data[i].time);
      reminderNow.push(data[i].title);
      console.log(timeTodayArr, reminderNow);
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
      window.location.reload();
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

// When user clicks submit-btn for a new reminder
$("#addSubmit").on("click", function (event) {
  event.preventDefault();

  // Make a new reminder object
  var newReminder = {
    title: $("#newReminder").val().trim(),
    date: $("#newDate").val().trim(),
    time: $("#newTime").val().trim(),
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
});
setInterval(function () {
  // if the current time equals a time in our timeTodayArr
  for (let i = 0; i < timeTodayArr.length; i++) {
    //  console.log(timeNow)
    var now = moment().format('HH:mm:00')
    console.log(now);
    console.log(timeTodayArr[i]);
    //  moment = moment.format()
    if (now === timeTodayArr[i]) {
      // console.log(timeTodayArr);
      if (window.Notification && Notification.permission !== "denied") {
        Notification.requestPermission(function (status) {  // status is "granted", if accepted by user
          var n = new Notification('Reminder', {
            body: reminderNow[i],
            // icon: '/path/to/icon.png' // optional
          });
        });
      }
      console.log("alert is working");
      //  alert(reminderNow[i]);  
    }
  }
  console.log("this timer is working");
}, 15000)