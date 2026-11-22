console.log("ISKRA animation is connected!");

// ** CINEMATIC INTRO** //
document.addEventListener("DOMContentLoaded", function() {

    // Opening Intro Screen
    const intro = document.createElement("div");
    intro.className = "intro-screen";

    // Opening Iskra Text
    const introText = document.createElement("h1");
    introText.className = "intro-title";
    introText.textContent = "ISKRA";

    // Opening particles
    const particles = document.createElement("div");
    particles.className = "intro-particles";

    // Generate 80 particles
    for (let i = 0; i < 80; i++) {
        const particle = document.createElement("span");
        particle.className = "particle";

        particle.style.setProperty(
            "--x",
            `${(Math.random() - 0.5) * 100}vw`
        );

        particle.style.setProperty(
            "--y",
            `${(Math.random() - 0.5) * 100}vh`
        );

        particles.appendChild(particle);
    }

    // Assemble the intro screen
    intro.appendChild(introText);
    intro.appendChild(particles);
    document.body.prepend(intro);

    // Begin the particle transition
    setTimeout(() => {
        intro.classList.add("is-releasing");
    }, 1200);

    // Reveal the hero
    setTimeout(() => {
        intro.classList.add("is-hidden");
    }, 2400);

    // Remove the intro after the animation
    setTimeout(() => {
        intro.remove();
    }, 3500);

});
