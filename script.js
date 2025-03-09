document.addEventListener("DOMContentLoaded", function() {
    let verified = false;

    document.getElementById("verify-btn").addEventListener("click", function() {
        if (verified) {
            window.location.href = "https://example.com/cheat-download"; // Hier Cheat-Download-Link einfügen
        }
    });

    // Fake-Prüfung (hier kann eine echte API integriert werden)
    setTimeout(function() {
        verified = true;
        document.getElementById("verify-btn").textContent = "✅ Download freigeschaltet!";
        document.getElementById("verify-btn").disabled = false;
        document.getElementById("verify-btn").style.background = "#16a085";
    }, 10000); // Nach 10 Sekunden wird der Button freigeschaltet (Fake-Verifizierung)
});
