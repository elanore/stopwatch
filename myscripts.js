window.onload = function(){
    let minutes = 0;
    let seconds = 0;
    let tens = 00;
    let appendMinutes = document.querySelector('#minutes');
    let appendSeconds = document.querySelector('#seconds');
    let appendTens = document.querySelector('#tens');

    let startBtn = document.querySelector('#start');
    let stopBtn = document.querySelector('#stopbtn');
    let resetBtn = document.querySelector('#resetbtn');

    console.log("hello world");

    let Interval;

    const startTimer = ()=>{
        tens++;
        if (tens <= 9){
            appendTens.innerHTML ='0'+tens

        }
        if (tens >0){
            appendTens.innerHTML = tens;
        }

        if(tens> 99){
            seconds++;
            appendSeconds.innerHTML ='0'+seconds;
        }

    }

}
