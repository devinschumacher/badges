// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Check if GSAP is loaded
    if (typeof gsap === 'undefined') {
        console.error("GSAP library not loaded. Make sure to include the GSAP script in your HTML.");
        return;
    }
    
    // Animation speed
    const speed = 4.5;
    
    // Create the timelines with infinite repeats
    const r = gsap.timeline({ repeat: -1 });
    const o = gsap.timeline({ repeat: -1 });
    const h = gsap.timeline({ repeat: -1 });
    
    // Animation for rotation and position
    r.to("#app", {
        "--r": "180deg",
        "--p": "0%",
        duration: speed,
        ease: "sine.in"
    }).to("#app", {
        "--r": "360deg",
        "--p": "100%",
        duration: speed,
        ease: "sine.out"
    });
    
    // Animation for opacity
    o.to("#app", {
        "--o": 1,
        duration: speed/2,
        ease: "power1.in"
    }).to("#app", {
        "--o": 0,
        duration: speed/2,
        ease: "power1.out"
    });
    
    // Animation for holographic effect
    h.to("#app", {
        "--h": "100%",
        duration: speed/2,
        ease: "sine.in"
    }).to("#app", {
        "--h": "50%",
        duration: speed/2,
        ease: "sine.out"
    }).to("#app", {
        "--h": "0%",
        duration: speed/2,
        ease: "sine.in"
    }).to("#app", {
        "--h": "50%",
        duration: speed/2,
        ease: "sine.out"
    });
    
    console.log("SERP Badge animations initialized!");
});
