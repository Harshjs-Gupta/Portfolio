document.querySelector(".nav_bar").addEventListener("click", function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains("nav_links")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

const seeBtn = document.querySelector(".seeMore");
const closeBtn = document.querySelector(".close_btn");
const aboutContainer = document.querySelector(".More_about_me");

//About section

seeBtn.addEventListener("click", function () {
  aboutContainer.classList.remove("hidden_aboutBox");
});

closeBtn.addEventListener("click", function () {
  aboutContainer.classList.add("hidden_aboutBox");
});

// Portfolio section

const projectContainer = document.querySelector(".container1");
const projects = [
  "project-container1",
  "project-container2",
  "project-container3",
  "project-container4",
  "project-container5",
  "project-container6",
];

const cardClass = ["card1", "card2", "card3", "card4", "card5", "card6"];

// Selecting all project elements
const upAnimation = projects.map((projectClass) =>
  document.querySelector(`.${projectClass}`)
);

// Selecting all card elements
const cards = cardClass.map((classCard) =>
  document.querySelector(`.${classCard}`)
);

upAnimation.forEach((projectElement, index) => {
  if (projectElement) {
    projectElement.addEventListener("mouseover", function () {
      const card = cards[index]; // Get the corresponding card
      if (card.classList.contains("hidden")) {
        card.classList.remove("hidden");
        card.classList.remove("Down_animation");
        card.classList.add("Up_animation");
      }
    });
  }
  projectElement.addEventListener("mouseleave", function () {
    const card = cards[index]; // Get the corresponding card
    if (card) {
      card.classList.remove("Up_animation");
      card.classList.add("Down_animation");

      // Wait for the animation to end before adding the 'hidden' class
      card.addEventListener(
        "animationend",
        function () {
          card.classList.add("hidden");
        },
        { once: true }
      );
    }
  });
});
