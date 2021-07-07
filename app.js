
document.getElementById("hamburger").addEventListener("click", showOverlay);

function showOverlay() {
    console.log('click');
    document.getElementById("overlay").style.display = "block";
}

document.getElementById("close").addEventListener("click", hideOverlay);

function hideOverlay() {
    console.log('click');
    document.getElementById("overlay").style.display = "none";
}