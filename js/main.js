import barba from '@./barba/core';

const navToggle = document.getElementById('dropbtn')
let sidenavOpen = false

navToggle.addEventListener('click', () => {
    if (sidenavOpen == false) {
        document.getElementById('sidenav-links').style.transform = 'translateX(0)';
        sidenavOpen = true
    } else {
        document.getElementById('sidenav-links').style.transform = 'translateX(-100%)';
        sidenavOpen = false
    }
})