const hours = document.querySelector(".hours")
const minutes = document.querySelector(".minutes")
const seconds = document.querySelector(".seconds")

const clock = setInterval(
    function time(){
        let date = new Date()
        let hour = date.getHours()
        let min = date.getMinutes()
        let sec = date.getSeconds()

        if (hour < 10) hour = `0${hour}`
        if (min < 10) min = `0${min}`
        if (sec < 10) sec = `0${sec}`

        hours.textContent = hour
        minutes.textContent = min
        seconds.textContent = sec
    }
)