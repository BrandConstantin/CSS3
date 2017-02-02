var context = new AudioContext();

oscillator = context.createOscillator();
analyser = context.createAnalyser();
oscillator.connect(context.destination);

//oscillator.start(context.currentTime);
//oscillator.stop(context.currentTime + 3);
oscillator.isPlaying = false;

function play(){
    (oscillator.isPlaying ? oscillator.stop() : oscillator.start());
    oscillator.isPlaying =! oscillator.isPlaying;
};

function CambioFrecuencia(val){
    oscillator.frequency.value = val;
}

function CambiaTipo(type){
    oscillator.type = type;
}