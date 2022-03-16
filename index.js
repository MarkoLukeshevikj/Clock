setInterval(() => {
    let now = new Date()
    let sec= now.getSeconds()
    let min = now.getMinutes()
    let h = now.getHours()
        
    const seconds = document.getElementById('seconds')
    const minutes = document.getElementById('minutes')
    const hours = document.getElementById('hours')
        
    let secondsDegrees = ((sec / 60) * 360)
    let minutesDegrees = ((min/ 60) * 360)
    let hoursDegrees = ((h / 12) * 360)
        
    seconds.style.transformOrigin = 'bottom center'
    seconds.style.transform = `rotate(${secondsDegrees}deg)`;  

    minutes.style.transformOrigin = 'bottom center'
    minutes.style.transform = `rotate(${minutesDegrees}deg)`;  

    hours.style.transformOrigin = 'bottom center'
    hours.style.transform = `rotate(${hoursDegrees}deg)`

    }, 1000)

