// Timer in JS

class Timer {
    //Define constructor
    constructor(durationInput, startButton, pauseButton, callbacks){
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        if(callbacks){
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }
        //Add event listener to the pause and start button
        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }

    start = () => {
        if(this.onStart){//If this method is true(exist), call it.
            this.onStart(this.timeRemaining);
        }

        this.tick();//Call tick method first time and later call every five miles of a second
        this.interval = setInterval(this.tick, 50);
    }
    pause = () => {
        clearInterval(this.interval);//To stop the interval (pause)
    }
    
    tick = () =>{
        if(this.timeRemaining <= 0){//Whe time will be zero stops.
            this.pause();
            if(this.onComplete){//If exists this method, call it.
                this.onComplete();
            }
        } else {
            this.timeRemaining = this.timeRemaining -0.05;//Very simplify call to set and get method
            if(this.onTick){//If exists this method, call it.
                this.onTick(this.timeRemaining);
            }
        }
    }

        
    //Using the get and set methods to learn new features about JS
    
    get timeRemaining(){//To invoke the get method is not necessary to call with parentheses()
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time){//To invoke the set method is not necessary to call with parentheses()
        this.durationInput.value = time.toFixed(2);//To pass the argument is not necessary (argument)
    }// the value behind the equal symbol automatically passed as argument in the set method
}