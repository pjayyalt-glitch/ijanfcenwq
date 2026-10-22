
const openButton = document.getElementById("openLetter");
const confession = document.getElementById("confession");
const heartsContainer = document.getElementById("hearts");

if (openButton && confession) {
    openButton.addEventListener("click", function () {
        confession.hidden = false;
        openButton.textContent = "YOU FOUND MY SECRET ♡";
        openButton.disabled = true;

        confession.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });
    });
}

// Falling hearts
const heartColors = ["#f2b8d0", "#c9c5ff", "#ff8fb1", "#ffffff"];

if (heartsContainer) {
    for (let i = 0; i < 32; i++) {
        const heart = document.createElement("span");

        heart.className = "falling-heart";
        heart.textContent = Math.random() > 0.5 ? "♥" : "♡";

        heart.style.setProperty("--left", Math.random() * 100 + "%");
        heart.style.setProperty("--size", 12 + Math.random() * 25 + "px");
        heart.style.setProperty("--duration", 7 + Math.random() * 12 + "s");
        heart.style.setProperty("--delay", -Math.random() * 18 + "s");
        heart.style.setProperty("--blur", Math.random() * 3 + "px");
        heart.style.setProperty(
            "--heart-opacity",
            (0.2 + Math.random() * 0.5).toFixed(2)
        );
        heart.style.setProperty(
            "--heart-color",
            heartColors[Math.floor(Math.random() * heartColors.length)]
        );

        heartsContainer.appendChild(heart);
    }
}

// Visitor counter
async function loadVisitorCount() {
    const display = document.getElementById("visitor-count");

    if (!display) return;

    try {
        if (typeof Counter === "undefined") {
            display.textContent = "--";
            return;
        }

        const counter = new Counter({
            workspace: "my-confession-site"
        });

        const result = await counter.up("page-views");
        display.textContent = result.data.up_count;
    } catch (error) {
        console.error("Visitor counter error:", error);
        display.textContent = "--";
    }
}

loadVisitorCount();
