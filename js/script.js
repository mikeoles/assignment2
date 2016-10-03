$(document).ready(function(){

  $("#submittedFeedback").hide();
  $("#signupForm").submit(function( event ) {

    event.preventDefault();

    var error = false;

    if($("#firstName").val().length<2){
      error = true;
      $("#firstNameError").text("Enter full first name");
    }else{
      $("#firstNameError").text("");
    }

    if($("#lastName").val().length<2){
      error = true;
      $("#lastNameError").text("Enter full last name");
    }else{
      $("#lastNameError").text("");
    }

    var email = $("#email").val();
    if(email.length<6){
      error = true;
      $("#emailError").text("Enter a complete email");
    }else{
      $("#emailError").text("");
    }

    if(!$("input[name='state']:checked").val()) {
      error = true;
      $("#stateError").text("Please choose a state");
    }else{
      $("#stateError").text("");
    }

    if (!$("#signupForm input:checkbox:checked").length > 0)
    {
      error = true;
      $("#positionError").text("Please select at least one position");
    }else{
      $("#positionError").text("");
    }

    var age = parseInt($("#age").val());
    if($("#age").val().length===0){
      error = true;
      $("#ageError").text("Please enter an age");
    }else if(age<18){
      error = true;
      $("#ageError").text("Must be 18 to join");
    }else if(age>99){
      error = true;
      $("#ageError").text("Age entered is too high");
    }else{
      $("#ageError").text("");
    }

    if(!error){
      $(".signup-form").hide();
      $("#submittedFeedback").fadeIn();
    }
  });
});
