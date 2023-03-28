
// Buttons variables

const startStopBtn = document.querySelector('#startStopBtn')
const resetBtn = document.querySelector('#resetBtn')

// Timer variables

let seconds = 0
let minutes = 0
let hours = 0

// leadings zeros

let leadingSeconds = 0
let leadingMinutes = 0
let leadingHours = 0

// timer and set interval variables

let timerInterval = null
let timerStatus = 'stopped'

function stopWatch() {
    
    seconds++


    if(seconds/60 === 1) {
        seconds = 0
        minutes++

        if(minutes/60 === 1) {
            minutes = 0
            hours++
        }
    }

    if(seconds < 10) {
        leadingSeconds = "0" + seconds.toString()
    } else {
        leadingSeconds = seconds
    }

    if(minutes < 10) {
        leadingMinutes = "0" + minutes.toString()
    } else {
        leadingMinutes = minutes
    }

    if(hours < 10) {
        leadingHours = "0" + hours.toString()
    } else {
        leadingHours = hours
    }

    let displayTimer = document.getElementById('timer').innerText = 
    leadingHours + ':' + leadingMinutes + ':' + leadingSeconds
    
}

startStopBtn.addEventListener('click', function() {
    
    if (timerStatus === 'stopped') {
        timerInterval = window.setInterval(stopWatch, 1000)
        timerStatus = 'started'
        startStopBtn.innerHTML = '<i class="fa-solid fa-pause fa-2xl" style="color: #ffffff;"></i>'
        startStopBtn.classList.add('pause')
    } else {
        window.clearInterval(timerInterval)
        timerStatus = 'stopped'
        startStopBtn.innerHTML = '<i class="fa-solid fa-play fa-2xl" style="color: #ffffff;"></i>'
        startStopBtn.classList.remove('pause')
    }

})

resetBtn.addEventListener('click', function() {
    window.clearInterval(setInterval)

    seconds = 0
    minutes = 0
    hours = 0

    document.getElementById('timer').innerText = '00:00:00'
})


