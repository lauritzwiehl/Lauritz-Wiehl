document.addEventListener("DOMContentLoaded", function () {
    const devText = document.getElementById("dev-text");
    const footerText = document.getElementById("footer-text");
    let isDevelopment = true;

    setInterval(() => {
        if (isDevelopment) {
            devText.innerHTML = '<span class="status">In Progress</span><span class="divider"> | </span><span class="version">Last updated: October 19th</span>';
            footerText.innerHTML = '&copy; 2024 Lauritz Wiehl. All rights reserved.';
        } else {
            devText.innerHTML = '<span class="status">In Entwicklung</span><span class="divider"> | </span><span class="version">Zuletzt aktualisiert: 19. Oktober</span>';
            footerText.innerHTML = '&copy; 2024 Lauritz Wiehl. Alle Rechte vorbehalten.';
        }
        isDevelopment = !isDevelopment;
    }, 5000);
});