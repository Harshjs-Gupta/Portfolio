"use strict";
const slidUp1 = function () {
  document.querySelector(".card1").classList.remove("hidden");
  document.querySelector(".card1").style.animation = "slideUp 1s linear";
};
const slidUp2 = function () {
  document.querySelector(".card2").classList.remove("hidden");
  document.querySelector(".card2").style.animation = "slideUp 1s linear";
};
const slidUp3 = function () {
  document.querySelector(".card3").classList.remove("hidden");
  document.querySelector(".card3").style.animation = "slideUp 1s linear";
};
const slidUp4 = function () {
  document.querySelector(".card4").classList.remove("hidden");
  document.querySelector(".card4").style.animation = "slideUp 1s linear";
};
const slidUp5 = function () {
  document.querySelector(".card5").classList.remove("hidden");
  document.querySelector(".card5").style.animation = "slideUp 1s linear";
};
const slidUp6 = function () {
  document.querySelector(".card6").classList.remove("hidden");
  document.querySelector(".card6").style.animation = "slideUp 1s linear";
};

const project1 = document.querySelector(".project-container1");
const project2 = document.querySelector(".project-container2");
const project3 = document.querySelector(".project-container3");
const project4 = document.querySelector(".project-container4");
const project5 = document.querySelector(".project-container5");
const project6 = document.querySelector(".project-container6");

project1.addEventListener("mouseover", slidUp1);
project2.addEventListener("mouseover", slidUp2);
project3.addEventListener("mouseover", slidUp3);
project4.addEventListener("mouseover", slidUp4);
project5.addEventListener("mouseover", slidUp5);
project6.addEventListener("mouseover", slidUp6);

const Hide1 = function () {
  document.querySelector(".card1").classList.add("hidden");
};
const Hide2 = function () {
  document.querySelector(".card2").classList.add("hidden");
};
const Hide3 = function () {
  document.querySelector(".card3").classList.add("hidden");
};
const Hide4 = function () {
  document.querySelector(".card4").classList.add("hidden");
};
const Hide5 = function () {
  document.querySelector(".card5").classList.add("hidden");
};
const Hide6 = function () {
  document.querySelector(".card6").classList.add("hidden");
};

project1.addEventListener("mouseout", Hide1);
project2.addEventListener("mouseout", Hide2);
project3.addEventListener("mouseout", Hide3);
project4.addEventListener("mouseout", Hide4);
project5.addEventListener("mouseout", Hide5);
project6.addEventListener("mouseout", Hide6);
