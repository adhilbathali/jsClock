function updateClock(){
    let now = new Date()
    let seconds = now.getSeconds()
    let minute = now.getMinutes()
    let hour = now.getHours()
    let day = now.getDay();

    let screen = document.getElementById('screen');
    let hourBody = screen.querySelector('.hour-body')
    let minuteBody = screen.querySelector('.minute-body')
    let secondsBody = screen.querySelector('.seconds-body')
    let dayImage = screen.querySelector("[dayPng]")

    switch(day){
        case 1:dayImage.src = './media/monday.png'
            break;
        case 2:dayImage.src = './media/tuesday.png'
            break;
        case 3:dayImage.src = './media/wednesday.png'
            break;
        case 4:dayImage.src = './media/thursday.png'
            break;
        case 5:dayImage.src = './media/friday.png'
            break;
        case 6:dayImage.src = './media/saturday.png'
            break;
        case 7:dayImage.src = './media/sunday.png'
            break;
    }

    hourBody.textContent = hour;
    minuteBody.textContent = minute;
    secondsBody.textContent = seconds;

    if(hour > 12){
        hour = hour%12;
    }
    if(hour < 10){
        hourBody.textContent = '0'+hour;
    }
    if(minute < 10){
        minuteBody.textContent = '0'+minute;
    }
    if(seconds < 10){
        secondsBody.textContent = '0'+seconds;
    }
}

setInterval(updateClock, 1000)
updateClock()