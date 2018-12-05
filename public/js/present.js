window.onload = function() {
  console.log("present.js loaded");
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
    $("#reminder-show" + i).append("<h5>" + (i + 1) + ". " + data[i].title + "</h5>");
    $("#reminder-show" + i).append("<h6>Date: " + data[i].date + "</h6>");
    $("#reminder-show" + i).append("<h6>Time: " + data[i].time + "</h6>");
    $("#reminder-show" + i).append("<button class='delete' data-id='" + data[i].id + "'>DELETE REMINDER</button>");
  //   $("#reminder-show" + i).append("<h5>Pages: " + data[i].pages + "</h5>");
  
  // may be write a for loop which is running throgh the database and checking that if the curret date and time 
  // matches with any date and time in the databse then pop up that reminder and beep the ringtone. 
  // write a function here to check if date(currentdate)=== data[i].date

}

// run setInterval function to start comparing current time with the reminder times
})
$(".delete").click(function() {

  $.ajax({
    method: "DELETE",
    url: "/api/reminder/" + $(this).attr("data-id")
  })
    // On success, run the following code
    .then(function() {
      console.log("Deleted Successfully!");
    });

  // $(this).closest("#reminder-show" + i).remove();
  

});
}); 
};

