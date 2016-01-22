var ref = new Firebase("https://torrid-inferno-789.firebaseio.com/");

// Add some event handlers for FB events

function update(data) {
  $("#comments").html("");
  for (var c in data) {
    var comment = data[c];
    var commentDate = new Date(comment.timestamp);
    var newLi = $(document.createElement("li"));
    newLi.addClass("feedback")
    newLi.data("id",c);
    newLi.data("Faves",comment.Faves);
    newLi.append(
     "<h2>" +
     comment.firstName +
      "</h2>" +
    "<h2>" +
      comment.lastName +
      "</h2>" +
     "<h2>" +
      comment.email +
      "</h2>" +
      "<h2>" +
    comment.message
    +
      "</h2>" +
      "<h2>" +
       commentDate.toLocaleString()+
       "</h2>" +
       "<h2>" +
        "Favorites: " + comment.faves +
        "</h2>" +
       "<button type='button' class='small fave'>Fave</button>");

 $("#comments").append(newLi);
}


};

ref.on("value", function(snapshot) {
  console.log(snapshot.val());
  update(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});





$(document).ready(function(){

  console.log("Document loaded");
  $("#add-form").submit(function(event){
    event.preventDefault();
    var firstname=$("#firstname").val();
    var lastname=$("#lastname").val();
    var email=$("#email").val();
    var message=$("#message").val();
    var timestamp= new Date().getTime();
    var favesNow = 0



     var text ={ firstName:firstname, lastName:lastname, email:email,
     message:message, timestamp:timestamp, favesNow: 0};
     ref.push(text);
     console.log("Form submitted!");

    // Go grab your info and do something with it.
  });
  $(".fave").click(function(){
    newLi.append("<button type='button' class='small'>+1</button>")
    var key = $(this).parent().data("id");

    var favesNow = $(this).parent().data("total faves");

    var favesNow = faves + 1;
    $("#feedback").append(newLi);
  });
});
