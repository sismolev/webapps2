$(document).ready(function(){
  $("#contact-form").submit(function(event){
    event.preventDefault();

    var Data = {
      firstName: $("#firstname").val(),
      lastName: $("#lastname").val(),
      email: $("#email").val(),
      message: $("#message").val()
    }
    console.log(Data);

  })
});

var Url = "http://x.mirman.org:1031/ground4loor";
   $.post(Url, Data, function(responsedata){
     console.log(responsedata);
   })

//Use jQuery to collect the values from the fields and create a
//JSON object containing them. Then, log the result to the console

// Secondary Objective: Use the AJAX methods built into jQuery to send
// The form data to http://x.mirman.org:9999. Write a callback to handle
// the response.
