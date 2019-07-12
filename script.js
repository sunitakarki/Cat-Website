var catNoRadioButton = document.getElementById('cat_no');
var catYesRadioButton = document.getElementById('cat_yes');

catNoRadioButton.addEventListener('click',function() {
  alert('I Do Not Like You Either');
});

catYesRadioButton.addEventListener('click',function() {
  alert('Thank You! Please Sign Up and Adopt Me.');

});





$(document).ready(function(){
  $("#flip").click(function(){
   $("#panel").slideToggle("slow");
 });
});


function myFunction() {
  var inpObj = document.getElementById("id1");
  if (!inpObj.checkValidity()) {
    document.getElementById("demo").innerHTML = inpObj.validationMessage;
  } else {
    document.getElementById("demo").innerHTML = "Please Take Good Care of Your New Companion(s)! :)";
  } 
} 


$(document).ready(function(){
  $("#reset_button").click(function(){
    $(this).hide();
  });
});


