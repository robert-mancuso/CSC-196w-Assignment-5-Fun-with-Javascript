function Alert() {
            alert("Hello, world!");
    }

function makeBigger() {
    var textElement = document.getElementById("textArea");
    textElement.style.fontSize = "2em";
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("fancyShmancy").addEventListener("change", fancySchmancyEffect);
    document.getElementById("boringBetty").addEventListener("change", boringBettyEffect);
});

function fancySchmancyEffect() {
    var textElement = document.getElementById("textArea");
    textElement.style.color = "#1e90ff"; // Dodger blue is one of my favorite colors!
    textElement.style.fontStyle = "italic";
    textElement.style.fontFamily = "Courier New";
    textElement.style.fontWeight = "bold";
    textElement.style.textDecoration = "underline";
}

function boringBettyEffect() {
    var textElement = document.getElementById("textArea");
    textElement.style.color = "";
    textElement.style.fontStyle = "";
    textElement.style.fontFamily = "";
    textElement.style.fontWeight = "";
    textElement.style.textDecoration = "";
}

function radioButtonAlert() {
    alert("Boring Betty effect active.");
}

function mooEffect() {
    var textElement = document.getElementById("textArea");
    var textContent = textElement.textContent;
    textElement.textContent = textContent.toUpperCase() + "-Moo";
}