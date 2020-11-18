// check for saved 'darkMode' in localStorage
let darkModeStatus = localStorage.getItem('darkMode');

const toggleDarkModeBtn = document.getElementById('toggle-dark-mode');
const DarkModeTxt = document.querySelector('.dark-mode__Txt');

const enableDarkMode = () => {
    // 1. Add the class to the body & Update Btn Txt
    document.body.classList.add('darkMode');
    DarkModeTxt.textContent = "Light Mode";
    // 2. Update darkMode in localStorage
    localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  // 1. Add the class to the body & Update Btn Txt
     document.body.classList.remove('darkMode');
     DarkModeTxt.textContent = "Dark Mode";
    // 2. Update darkMode in localStorage
     localStorage.setItem('darkMode', null);
}

// If the user already visited and enabled darkMode
// start things off with it on
if (darkModeStatus === 'enabled') {
    enableDarkMode();
  }
  

const toggleDarkMode = event => {
     darkModeStatus = localStorage.getItem('darkMode'); 

    // Checking for Theme Status
    if(darkModeStatus !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
}

// Adding Events & Execute Functions
toggleDarkModeBtn.addEventListener('click', toggleDarkMode);