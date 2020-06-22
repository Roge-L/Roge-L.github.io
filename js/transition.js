import barba from '../node_modules/@barba/core';

barba.init({
    transitions: [{
        name: 'opacity-transition',
        leave(data) {
          console.log('working');
        },
        enter(data) {
          console.log('working')
        }
    }]
  })

  var tl = gsap.timeline();

  tl.from('#home-page-title', {duration: 1, y: -30, opacity: 0});
  tl.from('#home-page-subtitle-1', {duration: 0.5, y: 10, opacity: 0});
  tl.from('#home-page-subtitle-2', {duration: 0.5, y: 10, opacity: 0})
