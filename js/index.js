gsap.from('.home-page-text', {duration: 1.5, opacity: 0})
gsap.from('#home-page-subtitle-1, #home-page-subtitle-2', {y: 20})
gsap.from('#home-page-title', {x: 20})

document.addEventListener('click', () => {
    window.location.href = 'profile.html'
})