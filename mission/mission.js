const theme = document.getElementById("theme");

function change_theme() {
    if (theme.value === 'dark') {
        const body_content = document.querySelector('body');
        body_content.classList.add('dark');
        const logo_img = document.getElementsByClassName('byui-logo')[0];
        logo_img.setAttribute('src', 'byui-logo_white.png');
    }
    else {
        const body_content = document.querySelector('body');
        body_content.classList.remove('dark');
        const logo_img = document.getElementsByClassName('byui-logo')[0];
        logo_img.setAttribute('src', 'byui-logo_blue.webp')
    }
}

theme.addEventListener('change', change_theme)
