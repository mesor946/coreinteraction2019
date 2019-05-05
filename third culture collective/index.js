$(document).ready(function() {
	var wavesurfer = WaveSurfer.create({
	    container: '#waveform',
	    waveColor: 'violet',
	    progressColor: 'purple'
	});
	wavesurfer.load('https://github.com/mesor946/coreinteraction2019/raw/master/episode1.mp3');

	console.log(wavesurfer)
});