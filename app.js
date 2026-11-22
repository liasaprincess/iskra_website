<!---HERO INTRO--->

document.addEventLIstender("DOMContentLoaded", function() => {

    <!--- Opening Intro Screen --->
    cost.introElement = document.CreateElement("div");
    intro.className = "intro-screen";

    <!--- Opening Iskra Text --->
    const.introElement = document.CreateElement("h1");
    introText.className = "intro-text";
    introText.textContent = "ISKRA";

    <!---OPENING PARTICLES---!>
    const.particles = document.CreateElement("div");
    particles.className = "intro-particles";

     // Generate 500 particles
    for (let i = 0; i < 500; i++) {
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
    intro.appendChild(title);
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
