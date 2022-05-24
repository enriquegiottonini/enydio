window.onload = function() {
    // Month Day, Year Hour:Minute:Second, id-of-element-container
    countUpFromTime("Jan 4, 2021 18:00:00", 'countup1'); // ****** Change this line!
};

function countUpFromTime(countFrom, id) {

    countFrom = new Date(countFrom).getTime();

    var now = new Date(),
        countFrom = new Date(countFrom),
        timeDifference = (now - countFrom);
        
    var secondsInADay = 60 * 60 * 1000 * 24,
        secondsInAHour = 60 * 60 * 1000;
        
    days = Math.floor(timeDifference / (secondsInADay) * 1);

    years = Math.floor(days / 365);
    if (years >= 1){ days = days - (years * 365) }

    var daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    var months = Math.floor(days / daysInMonth)
    if (months >= 1){ 
        let i=1;
        for(i;i<=months; i++)
            days = days - new Date(now.getFullYear(), i, 0).getDate()
        }


    hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour) * 1);
    mins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
    secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);

    var idEl = document.getElementById(id);

    idEl.getElementsByClassName('years')[0].innerHTML = years;
    idEl.getElementsByClassName('months')[0].innerHTML = months;
    idEl.getElementsByClassName('days')[0].innerHTML = days;
    idEl.getElementsByClassName('hours')[0].innerHTML = hours;
    idEl.getElementsByClassName('minutes')[0].innerHTML = mins;
    idEl.getElementsByClassName('seconds')[0].innerHTML = secs;

    clearTimeout(countUpFromTime.interval);
    countUpFromTime.interval = setTimeout(function(){ countUpFromTime(countFrom, id); }, 1000);
}