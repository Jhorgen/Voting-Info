$(document).ready(function() {

  $("form.age").submit(function(event) {
    event.preventDefault();
    var age = $(".form-control").val();
    if (age === "18, or older") {
      $(".minor").hide();
      $(".voter").show();
    } else if(age === "Under 18") {
      $(".voter").hide();
      $(".minor").show();
    }  else {
      $(".voter").hide();
      $(".minor").hide();
    }
  });
  });
