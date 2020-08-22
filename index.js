const durationInput = document.querySelector(`#duration`);
const startButton = document.querySelector(`#start`);
const pauseButton = document.querySelector(`#pause`);
const circle = document.querySelector(`circle`);

const perimeter = circle.getAttribute(`r`) * 2 * Math.PI;//To define the perimeter
circle.setAttribute(`stroke-dasharray`, perimeter);//Set the attribute with the perimeter

let duration;
//Create a timer object
const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuration){
        duration = totalDuration;
    },
    onTick(timeRemaining){//Update the dashoffset style every 5 miles of second
        circle.setAttribute(`stroke-dashoffset`, (perimeter * timeRemaining)/ duration - perimeter);
        
    },
    onComplete(){//Messages of complete
        console.log('Timer is completed');
        alert('Time is over');
    }
    
});