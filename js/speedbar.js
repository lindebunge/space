// https://kimmobrunfeldt.github.io/progressbar.js/

var bar = new ProgressBar.Line(speedbar, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 2000,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
    from: {color: '#FFEA82'},
    to: {color: '#ffffff'},
    step: (state, bar) => {
        bar.path.setAttribute('stroke', state.color);
    }
});

bar.animate(0.8);  // Number from 0.0 to 1.0