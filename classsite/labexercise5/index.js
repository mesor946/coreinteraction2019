<!DOCTYPE html>
<html>
<head>
	<title>labexercise5</title>
</head>
<body>

	<p>window.addEventListener('load', function(e) { <br>

	<em>this sets up a function that will be called whenever an event is delivered to the target. An event can be also described as an actions (whenever a page loads or a user clicks a button, etc.)</em><br>

	var appleGrid = document.getElementById('apple-grid');<br>

	<em>var declares an variable, in this case "applegrid"</em><br>

	var appleList = document.getElementById('apple-list');<br>
	var appleThumbs = document.getElementById('apple-thumbs');<br>
	var gridApples = document.querySelectorAll('.apple');<br>
	<br>
	gridApples.forEach((gridApple, i) => {<br>
		gridApple.addEventListener('click', pickApple);<br>
	});<br>
	<br>
	function pickApple(e) {<br>
		var apple = e.target;<br>
		var appleName = apple.dataset.apple.toString();<br>
		<br>
		var appleListItem = document.createElement('li');<br>
		<br>
		var ol = appleList.querySelector('ol');<br>
		ol.appendChild(appleListItem);<br>
		appleListItem.innerText = appleName;<br>
		<br>
		var appleThumb = apple.cloneNode(true);<br>
		appleThumbs.appendChild(appleThumb);<br>
		<br>
	}<br>
	<br>
});<br>

</p>

</body>
</html>







