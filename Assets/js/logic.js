



//Dark and Light mode toggler that manipulates bootstrap 5's html theme elemnts
const lightDarkToggler = document.getElementById('Light-Dark-Toggler');

let isLightMode = true;


lightDarkToggler.addEventListener('click', () => {
    var theme = document.querySelector('html');

        if (theme.getAttribute('data-bs-theme')==="dark") {
            theme.setAttribute('data-bs-theme', 'light');
        } 
        
        else { theme.setAttribute ('data-bs-theme', 'dark')

        }
    });
