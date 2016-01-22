$(document).ready(function(){
  $("#contact-form").submit(function(event){
    event.preventDefault();

<<<<<<< HEAD
    var Data = {
      firstName: $("#firstname").val(),
      lastName: $("#lastname").val(),
      email: $("#email").val(),
      message: $("#message").val()
    }
    console.log(Data);

=======
    // Secondary Objective: Use the AJAX methods built into jQuery to send
    // The form data to http://x.mirman.org:1031/ground4loor. Write a callback to handle
    // the response.
>>>>>>> 7b619d114a5169a0b2ec36943fc68ea76a4f2d31
  })
});

var Url = "http://x.mirman.org:1031/ground4loor";
   $.post(Url, Data, function(response){
     console.log(response);
   })

//Use jQuery to collect the values from the fields and create a
//JSON object containing them. Then, log the result to the console

// Secondary Objective: Use the AJAX methods built into jQuery to send
// The form data to http://x.mirman.org:9999. Write a callback to handle
// the response.
