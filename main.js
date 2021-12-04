function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/dph-I0nfx/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}