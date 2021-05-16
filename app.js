const countDown = () => {
    const countDate = new Date("May 10, 2021 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    if (textDay > 0) document.querySelector(".day").innerText = textDay;
    else document.querySelector(".day").innerText = "00";

    if (textHour > 0) document.querySelector(".hour").innerText = textHour;
    else document.querySelector(".hour").innerText = "00";

    if (textMinute > 0) document.querySelector(".minute").innerText = textMinute;
    else document.querySelector(".minute").innerText = "00";

    if (textSecond > 0) document.querySelector(".second").innerText = textSecond;
    else document.querySelector(".second").innerText = "00";
};

setInterval(countDown, 1000);
