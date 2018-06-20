console.log('Scripts loaded');

function stopWatch(){
    let startTime, endTime, running, duration = 0;
    this.start = function(){
        if(running){
            throw new Error('The stop watch already started');
        }
        running = true;
        startTime = new Date();
    };
    this.stop = function(){
        if(!running){
            throw new Error('The stop watch is not running');
        }
        running = false;
        endTime = new Date();
        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    };
    this.reset = function(){
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };
    Object.defineProperty(this, 'duration', ()=>{

    })
}