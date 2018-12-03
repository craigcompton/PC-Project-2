

window.onload = function() {
    console.log("page loaded");
    // Make a get request to our api route that will return every book
$.get("/api/present", function(data) {
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
      $("#reminder-show" + i).append("<h2>" + (i + 1) + ". " + data[i].title + "</h2>");
      $("#reminder-show" + i).append("<h3>Date: " + data[i].date + "</h4>");
      $("#reminder-show" + i).append("<h3>Time: " + data[i].time + "</h4>");
    //   $("#reminder-show" + i).append("<h3>Pages: " + data[i].pages + "</h4>");
    }
  });
    
  };


  