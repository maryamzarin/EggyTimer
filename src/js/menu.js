

// Buttons
const softBtn = document.getElementById('3minBtn');
//softBtn.onclick = toPage('../pages/softboiled.html');
softBtn.addEventListener("click", function() {
    window.location.href =`../pages/softboiled.html?time=${5}`;
});

const medBtn = document.getElementById('5minBtn');
//medBtn.onclick = toPage('../pages/softboiled.html');
medBtn.addEventListener("click", function() {
    window.location.href =`../pages/softboiled.html?time=${300}`;
});

const hardBtn = document.getElementById('7minBtn');
//hardBtn.onclick = toPage('../pages/softboiled.html'); //doesnt work cause have to reference the function w/o the ()
hardBtn.addEventListener("click", function() {
    window.location.href =`../pages/softboiled.html?time=${420}`;
});

const xhardBtn = document.getElementById('10minBtn');
//xhardBtn.onclick = toPage('../pages/softboiled.html');
xhardBtn.addEventListener("click", function() {
    window.location.href =`../pages/softboiled.html?time=${600}`;
});


//functions

function toPage(pageName) {
    window.location.href = pageName;
};