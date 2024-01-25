const button = document.querySelector('.btn');
const emptyBox = document.querySelector('.empty');
const timerSecond = document.getElementById('second');
const timerMinute = document.getElementById('minutes');
let intervalId;
let totalTime = 0;

button.addEventListener('click', () => {
    let additionalMinutes = Number(timerMinute.value) || 0;
    let additionalSeconds = Number(timerSecond.value) || 0;

    if (additionalMinutes < 0 || additionalSeconds < 0) {
        alert('Time is over!');
        return;
    }
    if (additionalMinutes === 0 && additionalSeconds == 0) totalTime += 60

    totalTime += (additionalMinutes * 60) + additionalSeconds

    clearInterval(intervalId);
    displayTime(totalTime);

    const countDown = () => {
        intervalId = setInterval(() => {
            totalTime--;
            displayTime(totalTime);

            if (totalTime <= 0) {
                clearInterval(intervalId);
                alert('Time is over');
            }
        }, 1000);
    };

    countDown();
});

function displayTime(totalTime) {
    let displayMinutes = Math.floor(totalTime / 60);
    let displaySeconds = totalTime % 60;
    emptyBox.innerHTML = `${displayMinutes}:${displaySeconds < 10 ? '0' : ''}${displaySeconds}`;
}