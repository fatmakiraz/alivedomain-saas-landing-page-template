const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

const endDate = document.querySelector('.js-endDate')
const countdown = document.querySelector('.js-countdown')
const countdownValues = document.querySelectorAll('.js-countdownValue')

let tempDate = new Date()
let tempYear = tempDate.getFullYear()
let tempMonth = tempDate.getMonth()
let tempDay = tempDate.getDate()

const futureDate = new Date(tempYear, tempMonth, tempDay + 2, 14, 19, 0)

const year = futureDate.getFullYear()
const date = futureDate.getDate()
const hours = futureDate.getHours()
const minutes = futureDate.getMinutes()

const month = months[futureDate.getMonth()]
const weekday = weekdays[futureDate.getDay()]

endDate.innerHTML = `<mark class="text-wavy">Launch Day Sale</mark> ends in`
const futureTime = futureDate.getTime()

function getRemainingTime() {
    const now = new Date().getTime()
    const diff = futureTime - now
    const oneDay = 24 * 60 * 60 * 1000
    const oneHour = 60 * 60 * 1000
    const oneMinute = 60 * 1000

    let days = diff / oneDay
    days = Math.floor(days)

    let hours = Math.floor((diff % oneDay) / oneHour)
    let minutes = Math.floor((diff % oneHour) / oneMinute)
    let seconds = Math.floor((diff % oneMinute) / 1000)

    const values = [days, hours, minutes, seconds]

    function formatValue(value) {
        if (value < 10) {
            return value = `0${value}`
        }
        return value
    }

    countdownValues.forEach((value, index) => {
        value.innerHTML = formatValue(values[index])
    })

    if (days > 1) {
        document.querySelector('.js-countdownTextDay').textContent = 'days'
    }

    if (diff < 0) {
        clearInterval(countdown)
        countdown.innerHTML = `<p class="countdown__alert" >Sorry, this offer has expired</p>`
    }
}

let setCountdown = setInterval(getRemainingTime, 1000)

getRemainingTime()