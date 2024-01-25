const button = document.querySelector('.btn');
const stop = document.querySelector('#stop');
const walk = document.querySelector('#walk')

button.addEventListener('click', () => {
    stop.className = 'light-stop-off light'
    walk.className = 'light-walk-on light'

    setTimeout(() => {
        stop.className = 'light-stop-on light'
        walk.className = 'light-walk-off light'
    }, 4000);
})