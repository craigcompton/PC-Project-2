window.onload = function () {
  console.log("present.js loaded");
  // Make a get request to our api route that will return every reminder
  $.get("/api/present", function (data) {
    // For each reminder that our server sends us back
    for (var i = 0; i < data.length; i++) {
      // Create a parent div to hold reminder data
      var reminderSection = $("<div>");
      // Add a class to this div: 'reminder'
      reminderSection.addClass("reminder");
      // Add an id to the reminder to mark which reminder it is
      reminderSection.attr("id", "reminder-show" + i);
      // Append the reminder to the reminder section
      $("#reminderSection").append(reminderSection);

      // Now  we add our reminder data to the reminder we just placed on the page
      $("#reminder-show" + i).append("<h5>" + (i + 1) + ". " + data[i].title + "</h5>");
      $("#reminder-show" + i).append("<h6>Date: " + data[i].date + "</h6>");
      $("#reminder-show" + i).append("<h6>Time: " + data[i].time + "</h6>");
      $("#reminder-show" + i).append("<button class='delete' data-id='" + data[i].id + "'>DELETE REMINDER</button>");

    }

    // run setInterval function to start comparing current time with the reminder times
  })
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
}

