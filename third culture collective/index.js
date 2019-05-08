$(document).ready(function() {

	var container = document.querySelector("#waveform")

	var url = container.dataset.url;

			console.log(url)




	var wavesurfer = WaveSurfer.create({
	    container: '#waveform',
	    waveColor: 'black',
	    progressColor: '#FF9200'
	});
	wavesurfer.load(url);

	//wavesurfer.on('ready', function () {
    	//wavesurfer.play();
	//});


	document.getElementById("play").addEventListener("click",function () {
    	wavesurfer.play();
    })

    document.getElementById("pause").addEventListener("click",function () {
    	wavesurfer.pause();
    })


});