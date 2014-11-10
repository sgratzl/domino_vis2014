

function onFragment(s, activate, reset) {
    //resolve position to include the parent is the script
    var n = s.node();
    var bak;
    Reveal.addEventListener('fragmentshown', function (event) {
        if (event.fragment === n) {
            bak = activate(s);
        }
    });
    Reveal.addEventListener('fragmenthidden', function (event) {
        if (event.fragment === n) {
            reset(s, bak);
        }
    });
    return n;
}
function addFragment(activate, reset) {
    //resolve position to include the parent is the script
    var script = document.currentScript || (function () {
        var scripts = document.getElementsByTagName("script");
        return scripts[scripts.length - 1];
    })();
    var slide = script.parentNode;
    while(slide.nodeName.toLowerCase() !== 'section' && slide.nodeName.toLowerCase() !== 'body') {
        slide = slide.parentNode;
    }
    //add a dummy fragment
    var s = d3.select(slide).append('b').attr('class','fragment');
    return onFragment(s, activate, reset);
}
function onPreviousFragment(type, activate, reset) {
    //resolve position to include the parent is the script
    var script = document.currentScript || (function () {
        var scripts = document.getElementsByTagName("script");
        return scripts[scripts.length - 1];
    })();
    var n = script.previousSibling;
    while(n.nodeName.toLowerCase() !== type) {
        n = n.previousSibling;
    }
    return onFragment(d3.select(n), activate, reset);
}