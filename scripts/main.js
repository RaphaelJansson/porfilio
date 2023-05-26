document.addEventListener("DOMContentLoaded", () => {
  const CLOSE_POINT = true;

  const parent = document.getElementById("parent");
  const contact = document.getElementById("contact");
  const experience = document.getElementById("experience");
  const skills = document.getElementById("skills");
  const education = document.getElementById("education");
  const about = document.getElementById("about");
  const theme = document.getElementById("theme");

  // window.addEventListener("load", function () {
  //   animateLineAbout();
  // });

  theme.addEventListener("click", () => {
    changeTheme();
  });

  let currentLine = 0;
  experience.addEventListener("click", () => {
    animateLineExperience();
  });

  contact.addEventListener("click", () => {
    animateLineContact();
  });

  skills.addEventListener("click", () => {
    animateLineSkills();
  });

  education.addEventListener("click", () => {
    animateLineEducation();
  });

  about.addEventListener("click", () => {
    animateLineAbout();
  });

  function animatePoint(pointName, close = false) {
    var point = document.getElementById(pointName);
    if (close) {
      point.style.transform = "scale(0)";
      return;
    }
    point.style.transform = "scale(2)";
    setTimeout(function () {
      point.style.transform = "scale(1)";
    }, 500);
  }

  function animateLineContact() {
    const lineContactRight = document.getElementById("line-contact-right");
    const lineContactTop = document.getElementById("line-contact-top");
    if (!currentLine) {
      currentLine = 1;
      parent.style.transform = "translate(-200px)";
      lineContactRight.classList.add("stretched");
      setTimeout(function () {
        lineContactTop.classList.add("stretched");
        parent.style.transform = "translate(-200px, 600px)";
      }, 500);
    } else {
      currentLine = 0;
      lineContactTop.classList.remove("stretched");
      parent.style.transform = "translate(-200px, 0)";
      setTimeout(function () {
        lineContactRight.classList.remove("stretched");
        parent.style.transform = "translate(0)";
      }, 500);
    }
  }

  function animateLineExperience() {
    const lineExperienceTop = document.getElementById("line-experience-top");
    const lineExperienceLeft = document.getElementById("line-experience-left");
    if (!currentLine) {
      currentLine = 4;
      parent.style.transform = "translate(550px, 0)";
      lineExperienceLeft.classList.add("stretched");
      setTimeout(function () {
        lineExperienceTop.classList.add("stretched");
        parent.style.transform = "translate(550px, 500px)";
        animatePoint("experience-point");
      }, 500);
    } else {
      currentLine = 0;
      animatePoint("experience-point", CLOSE_POINT);
      lineExperienceTop.classList.remove("stretched");
      parent.style.transform = "translate(0, 150px)";
      setTimeout(function () {
        lineExperienceLeft.classList.remove("stretched");
        parent.style.transform = "translate(0)";
      }, 500);
    }
  }

  function animateLineSkills() {
    const lineSkillsRight = document.getElementById("line-skills-right");
    const lineSkillsBottom = document.getElementById("line-skills-bottom");

    if (!currentLine) {
      currentLine = 2;
      parent.style.transform = "translate(-800px)";
      lineSkillsRight.classList.add("stretched");
      setTimeout(function () {
        lineSkillsBottom.classList.add("stretched");
        parent.style.transform = "translate(-800px, -100px)";
        animatePoint("skills-point");
      }, 500);
    } else {
      currentLine = 0;
      lineSkillsBottom.classList.remove("stretched");
      parent.style.transform = "translate(-800px, 0)";
      animatePoint("skills-point", CLOSE_POINT);
      setTimeout(function () {
        lineSkillsRight.classList.remove("stretched");
        parent.style.transform = "translate(0)";
      }, 500);
    }
  }

  function animateLineEducation() {
    const lineEducationRightOne = document.getElementById(
      "line-education-right-one"
    );
    const lineEducationRightTwo = document.getElementById(
      "line-education-right-two"
    );
    const lineEducationBottomOne = document.getElementById(
      "line-education-bottom-one"
    );
    const lineEducationBottomTwo = document.getElementById(
      "line-education-bottom-two"
    );
    const lineEducationBottomThree = document.getElementById(
      "line-education-bottom-three"
    );
    if (!currentLine) {
      currentLine = 3;
      parent.style.transform = "translate(0, -450px)";
      lineEducationBottomOne.classList.add("stretched");
      setTimeout(function () {
        lineEducationRightOne.classList.add("stretched");
        parent.style.transform = "translate(-400px, -450px)";
      }, 500);
      setTimeout(function () {
        lineEducationBottomTwo.classList.add("stretched");
      }, 650);
      setTimeout(function () {
        animatePoint("education-point-language");
        animatePoint("education-point");
        lineEducationRightTwo.classList.add("stretched");
        lineEducationBottomThree.classList.add("stretched");
      }, 1000);
    } else {
      currentLine = 0;
      animatePoint("education-point-language", CLOSE_POINT);
      animatePoint("education-point", CLOSE_POINT);
      lineEducationRightTwo.classList.remove("stretched");
      lineEducationBottomThree.classList.remove("stretched");
      setTimeout(function () {
        lineEducationRightOne.classList.remove("stretched");
        lineEducationBottomTwo.classList.remove("stretched");
        parent.style.transform = "translate(0, -550px)";
      }, 500);
      setTimeout(function () {
        lineEducationBottomOne.classList.remove("stretched");
        parent.style.transform = "translate(0)";
      }, 1000);
    }
  }

  function animateLineAbout() {
    const lineAboutTop = document.getElementById("line-about-top");
    const lineAboutLeft = document.getElementById("line-about-left");
    if (!currentLine) {
      currentLine = 4;
      parent.style.transform = "translate(0, 150px)";
      lineAboutTop.classList.add("stretched");
      setTimeout(function () {
        lineAboutLeft.classList.add("stretched");
        parent.style.transform = "translate(450px, 150px)";
      }, 500);
    } else {
      currentLine = 0;
      lineAboutLeft.classList.remove("stretched");
      parent.style.transform = "translate(0, 150px)";
      setTimeout(function () {
        lineAboutTop.classList.remove("stretched");
        parent.style.transform = "translate(0)";
      }, 500);
    }
  }
});
