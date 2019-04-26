$(document).ready(function(){
 


var fcolor = ["#d2232a","#ec008c","#ff4df2","#ff5169","#ff8400","#fff200","#41ad49","#79dcff","#00aeef","#bd98ff"]



var randomFcolor = Math.floor(Math.random()*fcolor.length);



console.log(randomFcolor)


function randomStuff(){

var randomFcolor = fcolor [Math.floor(Math.random() * fcolor.length)]

}

setInterval(function(){

	randomStuff();

	$("p").css({"-webkit-text-stroke-color": fcolor[randomFcolor]});




}, 500);

});





//end document ready function
