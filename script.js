$(document).ready(function () {
    let clockElement = document.querySelector('.Clock-Calendar');
    let format = true;
    let switchElement = true;
    let time = {
        h: '',
        m: '',
        s: ''
    };

    let calendar = {
        y: '',
        m: '',
        d: ''
    };

    function displayTime() {
        let currentTime = new Date();
        time.h = currentTime.getHours();
        time.m = currentTime.getMinutes();
        time.s = currentTime.getSeconds();


        if (time.s < 10) {
            time.s = '0' + time.s;
        }
        if (time.m < 10) {
            time.m = '0' + time.m;
        }
        if (time.h < 10) {
            time.h = '0' + time.h;
        }
        if (format === true) {
            return `${time.h}:${time.m}:${time.s}`;
        } else {
            return `${time.h}:${time.m}`;
        }
    }

    function displayCalendar() {
        let currentDate = new Date();
        calendar.y = currentDate.getFullYear();
        calendar.m = currentDate.getMonth();
        calendar.d = currentDate.getDate();

        if (calendar.m < 10) {
            calendar.m = '0' + calendar.m;
        }
        if (calendar.d < 10) {
            calendar.d = '0' + calendar.d;
        }
        if (format === true) {
            return `${calendar.d}.${calendar.m}.${calendar.y}`;
        } else {
            return `${calendar.d}/${calendar.m}/${calendar.y}`;
        }
    }

    function changeFormat() {
        format = !format;
        return format;
    }

    function switchClockAndCalendar() {
        switchElement = !switchElement;
    }

    $('.Clock-Calendar').mousedown(function (event) {
        switch (event.which) {
            case 1:
                changeFormat();
                break;
            case 3:
                switchClockAndCalendar();
                break;
        }
    });

    $('.Clock-Calendar').hover(function () {
        $('body').css('background-color', '#ea7d63');
        $('.Clock-Calendar').css('color', '#000000');
    });

    $('.Clock-Calendar').mouseout(function () {
        $('body').css('background-color', '#80d4ea');
        $('.Clock-Calendar').css('color', '#ffffff');
    });

    setInterval(run, 1);

    function run() {
        if (switchElement === true) {
            clockElement.innerText = displayTime();
        } else {
            clockElement.innerText = displayCalendar();
        }
    }


    setInterval(displayTime, 1000);
    displayTime();
    setInterval(displayCalendar, 1000);
    displayCalendar();
});