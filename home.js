document.querySelector(".nav_bar").addEventListener("click", function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains("nav_links")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

const education_btn = document.querySelector(".education");
const skill_btn = document.querySelector(".skill");
const about_btn = document.querySelector(".aboutMe");
const education_container = document.querySelector(".education-container");
const skill_container = document.querySelector(".skill-container");
const about_container = document.querySelector(".about-container");

education_btn.addEventListener("click", function () {
  if (education_container.classList.contains("hidden")) {
    education_container.classList.remove("hidden");
    about_container.classList.add("hidden");
    skill_container.classList.add("hidden");
    skill_btn.classList.remove("active");
    education_btn.classList.add("active");
    about_btn.classList.remove("active");
  } else {
    education_btn.classList.remove(".active");
    education_btn.classList.add("hidden");
  }
});

skill_btn.addEventListener("click", function () {
  if (skill_container.classList.contains("hidden")) {
    skill_container.classList.remove("hidden");
    education_container.classList.add("hidden");
    about_container.classList.add("hidden");
    education_btn.classList.remove("active");
    skill_btn.classList.add("active");
    about_btn.classList.remove("active");
  } else {
    skill_btn.classList.add("hidden");
    skill_container.classList.add("hidden");
    skill_btn.classList.remove("active");
  }
});

about_btn.addEventListener("click", function () {
  if (about_container.classList.contains("hidden")) {
    about_container.classList.remove("hidden");
    education_container.classList.add("hidden");
    skill_container.classList.add("hidden");
    about_btn.classList.add("active");
    education_btn.classList.remove("active");
    skill_btn.classList.remove("active");
  }
});

const project1_btn = document.querySelector(".project1");
const project2_btn = document.querySelector(".project2");
const project_container1 = document.querySelector(".project-container");
const project_container2 = document.querySelector(".project-container2");

project1_btn.addEventListener("click", function () {
  if (project_container1.classList.contains("hidden")) {
    project_container1.classList.remove("hidden");
    project_container2.classList.add("hidden");
    project1_btn.classList.add("active");
    project2_btn.classList.remove("active");
  }
});

project2_btn.addEventListener("click", function () {
  if (project_container2.classList.contains("hidden")) {
    project_container2.classList.remove("hidden");
    project_container1.classList.add("hidden");
    project1_btn.classList.remove("active");
    project2_btn.classList.add("active");
  }
});
