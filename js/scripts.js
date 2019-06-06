$(document).ready(function() {
  console.log('jquery is enabled')

  $("form.age").submit(function(event) {
    console.log("works!");
    event.preventDefault();
    var age = $("#age").val();
    console.log(age);
    if (age === true) {
      $(".voter").show();
    } else if (age === false) {
      $(".minor").show();
  }
      console.log('.minor');

    });
  });
;
