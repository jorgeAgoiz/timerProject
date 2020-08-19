// Simple timer in JS
class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks){
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        if(callbacks){
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }

    start = () => {
        if(this.onStart){
            this.onStart();
        }

        this.tick();
        this.interval = setInterval(this.tick, 1000);
    }
    pause = () => {
        clearInterval(this.interval);
    }
    onDurationChange = () => {

    }
    tick = () =>{//Using the get and set methods to learn new features about JS
        if(this.timeRemaining <= 0){
            this.pause();
            if(this.onComplete){
                this.onComplete();
            }
        } else {
            this.timeRemaining = this.timeRemaining -1;//Very simplify call to set and get method
            if(this.onTick){
                this.onTick();
            }
        }
    }
        

    get timeRemaining(){//To invoke the get method is not necessary to call with parentheses()
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time){//To invoke the set method is not necessary to call with parentheses()
        this.durationInput.value = time;//To pass the argument is not necessary (argument)
    }// the value behind the equal symbol automatically passed as argument in the set method
}