var Prediction;

Webcam.set({
width:355,
height:225,
image_format:'png',
png_quality:90
});

Webcam.attach("camera");

function takeSnapshot()
{
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML = '<img id="capturedImg" src="'+data_uri+'">';
    });
}

console.log(ml5.version);

ImageClassifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/iMkWNS1nX/model.json', modelLoaded);

function modelLoaded()
{
    console.log("Model is loaded!!!");
}

function speak()
{
    synth = window.speechSynthesis;
    data1 = "The Prediction is - " + Prediction;
    var speech = new SpeechSynthesisUtterance(data1);
    synth.speak(speech);

}