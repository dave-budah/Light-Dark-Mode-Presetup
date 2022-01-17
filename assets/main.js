const darkBtn = document.querySelector('.fas');
const bodyE1 = document.querySelector('body');

const darkMode = () => {
    bodyE1.classList.toggle('dark')
}

darkBtn.addEventListener('click', () => {
    setDarkMode = localStorage.getItem('dark');

    if (setDarkMode !== 'on') {
        darkMode();
        //set the value of the btn to "on"

        setDarkMode = localStorage.setItem('dark', 'on');
    } else {
        darkMode();
        //set the value of the btn to "off"
        setDarkMode = localStorage.setItem('dark', null);
    }
});

// Get the value of the "dark" item from the local storage.

let setDarkMode = localStorage.getItem('dark');

// check dark mode is on or off on page reload
if (setDarkMode === 'on'){
    darkMode();
}
