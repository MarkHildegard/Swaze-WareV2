let tiktokClicked = false;
let discordClicked = false;
let downloadBtn = document.getElementById("download-btn");
let verifiedContent = document.getElementById("verified-content");
let downloadLinkBtn = document.getElementById("download-link");

// Funktion, um den Download-Button zu aktivieren
function checkVerification() {
    if (tiktokClicked && discordClicked) {
        // Anzeigen des verifizierten Inhalts
        verifiedContent.style.display = "block"; 
        downloadBtn.disabled = true;
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

// Event-Listener für den Download-Button
downloadLinkBtn.addEventListener("click", function() {
    window.location.href = "https://gofile.io/d/Z1TbG3"; // Gofile.io-Link
});
