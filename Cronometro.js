

var h1 = document.getElementById("h1")
var m1 = document.getElementById("m1")
var s1 = document.getElementById("s1")

var min = 00
var sec = 00
var hr = 00

var interval

//2 digitos
function twoDigit(digit){
    if(digit<10){
        return("0"+digit)
    }else{
        return(digit)
    }
}

//play
function play(){
    interval = setInterval(watch,1000)
    
    document.getElementById("ball").style.animation="timer 1s linear infinite"
}

//pause
function pause(){
    clearInterval(interval)

    document.getElementById("ball").style.animationPlayState="paused"
}

//stop
function stop(){
    clearInterval(interval)
    min=00
    sec=00
    hr=00

    document.getElementById("watch").innerText="00:00:00"

    document.getElementById("ball").style.animationIterationCount="1"
}

//relogio
function watch(){

    var h = Number(h1.value)
    var m = Number(m1.value)
    var s = Number(s1.value)

    sec++
    if(sec==60){
        min++
        sec=0
        }if(min==60){
        hr++
        min=0
    }
    document.getElementById("watch").innerText=twoDigit(hr)+":"+twoDigit(min)+":"+twoDigit(sec)


        // TIMER
    if( sec == s && min == m && hr == h){
        alert("Timer")
        clearInterval(interval)
        

        document.getElementById("watch").innerText="00:00:00"

        document.getElementById("ball").style.animationIterationCount="1"
    }
}


//cronometro
function start(){

    interval = setInterval(watch,1000)
    
    document.getElementById("ball").style.animation="timer 1s linear infinite"

    var h = Number(h1.value)
    var m = Number(m1.value)
    var s = Number(s1.value)

    document.getElementById("p").innerText=`Alarme definido para tocar em ${h}:${m}:${s}`


} 
