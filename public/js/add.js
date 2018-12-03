// The code in add.js handles what happens when the user clicks the "Add a book" button.

// When user clicks add-btn
$("#addSubmit").on("click", function(event) {
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
      .then(function(data) {
        // Log the data we found
        console.log(data);
      });
  
    // Empty each input box by replacing the value with an empty string
    $("#newReminder").val("");
    $("#newDate").val("");
    $("#newTime").val("");
    $("#newAlarm").val("");
  
  });