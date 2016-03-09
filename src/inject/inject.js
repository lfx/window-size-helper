var ID = "window-size-helper-dev-liudas-eu";
var label;

function resize() { 
    label.classList.remove(ID + "-hide");
    label.classList.add(ID + "-show");
    label.innerHTML = window.innerWidth + "px &times; " + window.innerHeight + "px";
}

function makeLabel() {
    label = document.createElement("div");
    label.setAttribute("id", ID);
    label.classList.add(ID + "-hide");
    document.body.appendChild(label);
}

function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

var hideLabel = debounce(function() {
    label.classList.remove(ID + "-show");
    label.classList.add(ID + "-hide");
}, 1000);


makeLabel();

window.addEventListener('resize', hideLabel);
window.addEventListener('resize', resize);