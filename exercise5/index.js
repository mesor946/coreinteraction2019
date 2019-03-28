
//check if document is ready
$(document).ready(function(){
 
    var width = $(document).width() - 300;
    var height = $(document).height() - 300;
    var colors = [ "blue"]
    
//random color and position every 2 second
    setInterval(function(){
    var positionLeft = Math.random() * width + "px";
    var positionTop = Math.random() * height + "px";
         
    var randomNumber = Math.random()*colors.length;
    var randomColor = colors[Math.floor(randomNumber)];
 
    $('#circle').css("left", positionLeft)
    $('#circle').css("top", positionTop)
    $('#circle').css("background-color", randomColor)

    $('#circle1').css("left", positionLeft)
    $('#circle1').css("top", positionTop)

     $('#circle2').css("left", positionLeft)
    $('#circle2').css("top", positionTop)

     $('#circle3').css("left", positionLeft)
    $('#circle3').css("top", positionTop)

     $('#circle4').css("left", positionLeft)
    $('#circle4').css("top", positionTop)
 
 
 
    },2000)
 
  
//end document ready function
})