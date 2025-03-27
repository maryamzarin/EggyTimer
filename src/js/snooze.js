
// Buttons
const snoozeBtn = document.getElementById('snoozeBtn');
snoozeBtn.addEventListener("click", function() {
    window.location.href =`../pages/softboiled.html?time=${30}`;
});


const exitBtn = document.getElementById('exitBtn');
exitBtn.addEventListener("click", function() {
    window.location.href ="../index.html";
});

// should show the end image based on the dippy/soft/jammy/hard