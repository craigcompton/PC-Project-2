window.onload = function() {
    console.log("future.js loaded");
    // Make a get request to our api route that will return every book
$.get("/api/future", function(data) {
    // For each book that our server sends us back
    for (var i = 0; i < data.length; i++) {
      // Create a parent div to hold book data
      var reminderSection = $("<div>");
      // Add a class to this div: 'reminder'
      reminderSection.addClass("reminder");
      // Add an id to the reminder to mark which reminder it is
      reminderSection.attr("id", "reminder-show" + i);
      // Append the reminder to the reminder section
      $("#reminderSection").append(reminderSection);
  
      // Now  we add our reminder data to the reminder we just placed 
      $("#reminder-show" + i).append("<h5>" + (i + 1) + ". " + data[i].title + "</h5>");
      $("#reminder-show" + i).append("<h6>Date: " + data[i].date + "</h6>");
      $("#reminder-show" + i).append("<h6>Time: " + data[i].time + "</h6>");
    }
  });
    
  };