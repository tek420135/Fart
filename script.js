// PotGrowHub Interaction Script - Jules Edition
// Science of Attraction & Dopamine Logic

// 1. GSAP Floating animations for Smoke Puffs (Curiosity Gaps)
gsap.to(".smoke-puff", {
    y: "-=25",
    x: "+=15",
    duration: 5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    stagger: {
        each: 0.5,
        from: "random"
    }
});

// 2. Groot Figure Pulse (Breathing & Life)
gsap.to("#groot", {
    scale: 1.025,
    y: "-=8",
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});

// 3. Swaying Leaves (Organic Movement)
gsap.to(".leaf", {
    rotation: "+=12",
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    stagger: 0.15
});

// 4. Shimmering Trichomes (Crystalline Glow)
gsap.to(".trichome-shimmer", {
    opacity: 0.5,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});

// 5. Information Modal Logic (Science of Attention)
const modal = document.getElementById("infoModal");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const closeBtn = document.querySelector(".close-modal");

const contentMap = {
    'Mission': 'PotGrowHub is designed for the newbie, the mediocre user, or the modern ganjapreneur. We enable anyone to create, grow, sell, and enjoy cannabis-related products with ease and innovation. No Home Base - Growing Everywhere.',
    'Menu': 'Explore our curated menu of high-end accessories, bespoke grow room equipment, and unique digital collectibles designed to elevate your experience. Each item is a manifestation of your intent.',
    'Services': 'From 3D-modeled bongs to custom grow room specs, our services are tailored to the modern ganjapreneur. We connect you directly with the market through internet-native sciences.',
    'Facts': 'Did you know? Cannabis has been used for over 5,000 years. Modern ganjapreneurship is the science of manifesting that ancient energy into today\'s tech and economy.',
    'Tips': 'Tip #1: Always start with the science of manifestation. Think it, speak it, search it, and PotGrowHub will help you build it into a tangible reality.',
    'Gamification': 'WIN BIG: Participate in our weekly "Manifestation Challenges". Design the best custom piece and win gear, NFTs, or global recognition in the Hub.'
};

function showInfo(section) {
    modalTitle.innerText = section;
    modalBody.innerHTML = `<p>${contentMap[section] || "Manifesting data..."}</p><br><button class="control-btn" style="width:100%" onclick="closeModal()">Explore Further</button>`;
    modal.style.display = "block";

    // GSAP Modal Entrance (Anticipatory Dopamine)
    gsap.from(".modal-content", {
        scale: 0.7,
        opacity: 0,
        y: 100,
        duration: 0.7,
        ease: "back.out(1.7)"
    });
}

function closeModal() {
    gsap.to(".modal-content", {
        scale: 0.8,
        opacity: 0,
        y: 50,
        duration: 0.3,
        onComplete: () => {
            modal.style.display = "none";
            gsap.set(".modal-content", { scale: 1, opacity: 1, y: 0 });
        }
    });
}

closeBtn.onclick = closeModal;

window.onclick = (event) => {
    if (event.target == modal) {
        closeModal();
    }
};

// 6. Customizer Logic (Immersive Interaction)
function updatePreview(title, desc) {
    const previewTitle = document.getElementById('previewTitle');
    const previewDesc = document.getElementById('previewDesc');
    const previewArea = document.getElementById('previewArea');
    const overlay = document.getElementById('virtual-overlay');

    // Visual Feedback (Dopamine Trigger)
    gsap.to(previewArea, {
        scale: 0.96,
        backgroundColor: "rgba(76, 175, 80, 0.15)",
        duration: 0.2,
        yoyo: true,
        repeat: 1,
        onComplete: () => {
            previewTitle.textContent = title;
            previewDesc.textContent = desc;
            overlay.style.display = "block";

            // "Virtually Try It On" Animation
            gsap.fromTo(overlay, {
                opacity: 0,
                scale: 0.5,
                rotation: -10,
                borderColor: "var(--gold)"
            }, {
                opacity: 1,
                scale: 1,
                rotation: 0,
                borderColor: "rgba(76, 175, 80, 0.4)",
                duration: 1,
                ease: "elastic.out(1, 0.3)"
            });

            // Randomize "Needed Products" tip
            const tips = ["Add Golden Brackets", "Add Violet LEDs", "Add Hemp Padding", "Add Smart Sensors"];
            const randomTip = tips[Math.floor(Math.random() * tips.length)];
            previewDesc.innerHTML += `<br><br><span style="color:var(--gold); font-size: 0.9rem;">✨ Manifestation Tip: ${randomTip} for better performance.</span>`;
        }
    });
}

// 7. Voice Search Simulation (Intellectual Seduction)
const voiceBtn = document.getElementById('voiceBtn');
if (voiceBtn) {
    voiceBtn.addEventListener('click', () => {
        const input = document.getElementById('searchInput');
        input.placeholder = "Listening to your thoughts...";
        input.style.boxShadow = "0 0 40px var(--primary-green), inset 0 0 10px var(--primary-green)";

        // Simulating the "Aha!" moment
        setTimeout(() => {
            input.placeholder = "Manifesting intent...";
            setTimeout(() => {
                input.value = "Custom 4ft walnut grow rack with built-in curing drawer";
                input.placeholder = "Tell us what you want to manifest...";
                input.style.boxShadow = "none";
                // Trigger Dopamine Flash
                triggerFlash();
            }, 1200);
        }, 1500);
    });
}

// 8. Search Manifestation Logic (Science of Manifestation)
function triggerFlash() {
    const flash = document.createElement('div');
    flash.style.position = 'fixed';
    flash.style.top = '0'; flash.style.left = '0';
    flash.style.width = '100%'; flash.style.height = '100%';
    flash.style.background = 'white';
    flash.style.zIndex = '9999';
    flash.style.opacity = '0';
    document.body.appendChild(flash);

    gsap.to(flash, {
        opacity: 0.7,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        onComplete: () => {
            document.body.removeChild(flash);
        }
    });
}

document.querySelector('.search-btn').addEventListener('click', () => {
    const query = document.getElementById('searchInput').value;
    if (query) {
        triggerFlash();
        const btn = document.querySelector('.search-btn');
        const originalText = btn.innerText;
        btn.innerText = "Connecting...";

        setTimeout(() => {
            btn.innerText = originalText;
            alert(`BOOM! PotGrowHub has manifested your ${query}. Connecting you to the global ganjapreneur network now. No Home Base - Growth Everywhere.`);
        }, 1200);
    } else {
        alert('Yo, the Hub needs your intent. Tell us what you want to manifest!');
    }
});

// Interactive Eye Glow on Hover
const groot = document.getElementById('groot');
groot.addEventListener('mouseenter', () => {
    gsap.to(".eye", {
        scale: 1.5,
        boxShadow: "0 0 30px var(--gold)",
        duration: 0.3
    });
});
groot.addEventListener('mouseleave', () => {
    gsap.to(".eye", {
        scale: 1,
        boxShadow: "0 0 15px var(--gold)",
        duration: 0.3
    });
});

console.log("PotGrowHub: Science of Manifestation initialized.");
