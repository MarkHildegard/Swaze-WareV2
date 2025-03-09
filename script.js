let tiktokClicked = false;
let discordClicked = false;
let downloadBtn = document.getElementById("download-btn");

// Funktion, um den Download-Button zu aktivieren
function checkVerification() {
    if (tiktokClicked && discordClicked) {
        downloadBtn.textContent = "✅ Download freigeschaltet!";
        downloadBtn.disabled = false;
        downloadBtn.style.background = "#16a085";
        downloadBtn.onclick = function() {
            // Gofile.io-Link für die Datei
            window.location.href = "https://gofile.io/d/Z1TbG3"; 
        };
    }
}

// Event-Listener für TikTok-Link
document.getElementById("tiktok-link").addEventListener("click", function() {
    tiktokClicked = true;
    checkVerification();
});

// Event-Listener für Discord-Link
document.getElementById("discord-link").addEventListener("click", function() {
    discordClicked = true;
    checkVerification();
});
