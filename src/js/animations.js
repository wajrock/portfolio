function isAboutInViewport() {
  var aboutElement = document.querySelector("#about");
  var aboutPosition = aboutElement.getBoundingClientRect().top;

  return aboutPosition <= 0;
}

function animateAbout() {
  document.querySelector("#about").style.gap = "1rem";
  document.querySelector("#about").style.background = "black";
  document.querySelector("#aboutPicture").style.width = "70%";
  document.querySelector("#aboutContent").style.transitionDelay = ".5s";
  document.querySelector("#aboutContent").style.opacity = "1";
}

function removeAboutAnimation() {
  document.querySelector("#aboutContent").style.transitionDelay = "";
  document.querySelector("#aboutContent").style.opacity = "0";
  document.querySelector("#about").style.gap = "0";
  document.querySelector("#about").style.background = "";
  document.querySelector("#aboutPicture").style.width = "0";
}

function isTitleAcademicInViewport() {
  let titleElement = document.querySelector("#academic__title");
  let titlePosition = titleElement.getBoundingClientRect().top;
  let titleHeight = titleElement.getBoundingClientRect().height;

  return titlePosition < window.innerHeight - titleHeight;
}

function animateTitleAcademic() {
  document.querySelector("#academicSpan").style.color = "white";
  document.querySelector("#honoursSpan").style.color = "white";
}

function removeAnimationTitleAcademic() {
  document.querySelector("#academicSpan").style.color = "";
  document.querySelector("#honoursSpan").style.color = "";
}

function isAcademicGridInViewport() {
  let academicGrid = document.querySelector("#academicContent");
  let academicGridPosition = academicGrid.getBoundingClientRect().top;

  return academicGridPosition < window.innerHeight;
}

function opacityAcademicGrid() {
  const currentScroll = window.scrollY;
  const academicGrid = document.querySelector("#academicContent");
  const academicGridY = academicGrid.getBoundingClientRect().y;
  const academicGridHeight = academicGrid.getBoundingClientRect().height;

  let currentOpacity =
    (-1 / (academicGridHeight * 0.6)) * academicGridY + 1 / 0.6;

  if (currentOpacity >= 0 && currentOpacity <= 1) {
    academicGrid.style.opacity = currentOpacity;
  }

  if (currentOpacity >= 1) {
    [...document.querySelectorAll(".academicItem__picture")].forEach((e) => {
      e.style.height = "100%";
    });
  } else {
    [...document.querySelectorAll(".academicItem__picture")].forEach((e) => {
      e.style.height = "0";
    });
  }
}

function isTitleSkillsInViewport() {
  let titleElement = document.querySelector("#skills__title");
  let titlePosition = titleElement.getBoundingClientRect().top;
  let titleHeight = titleElement.getBoundingClientRect().height;

  return titlePosition < window.innerHeight - 2 * titleHeight;
}

function animateTitleSkills() {
  document.querySelector("#webSpan").style.transitionDelay = "0s";
  document.querySelector("#designSpan").style.transitionDelay = "1s";
  document.querySelector("#oopSpan").style.transitionDelay = "2s";

  document.querySelector("#webSpan").style.color = "white";
  document.querySelector("#designSpan").style.color = "white";
  document.querySelector("#oopSpan").style.color = "white";
}

function removeAnimationTitleSkills() {
  document.querySelector("#webSpan").style.transitionDelay = "";
  document.querySelector("#designSpan").style.transitionDelay = "";
  document.querySelector("#oopSpan").style.transitionDelay = "";

  document.querySelector("#webSpan").style.color = "";
  document.querySelector("#designSpan").style.color = "";
  document.querySelector("#oopSpan").style.color = "";
}

function skillsGridIsInViewport() {
  const skillsGridPosition =
    document.getElementById("wrap").getBoundingClientRect().top * 1.3;

  return skillsGridPosition <= window.innerHeight;
}

function skillsGridAnimation() {
  const heightGrid = document.getElementById("skills").offsetHeight;
  const currentScroll = window.scrollY;
  const skillsOffset = document.getElementById("skills").offsetTop;
  const currentScale =
    1.6 - ((currentScroll - skillsOffset) / heightGrid) * 0.9;

  if (currentScale >= 1) {
    document.getElementById(
      "grid"
    ).style.transform = `scale3D(${currentScale},${currentScale},1)`;
  }

  if (
    currentScroll >=
    document.getElementById("skills").offsetTop + window.innerHeight * 5
  ) {
    document.getElementById("grid").style.transform = "scale3D(1,1,1)";
  }
}

function isTitleProjectsInViewport() {
  let titleElement = document.querySelector("#projectsHeader");
  let titlePosition = titleElement.getBoundingClientRect().top;
  let titleHeight = titleElement.getBoundingClientRect().height;

  return titlePosition < window.innerHeight - titleHeight;
}

function animateTitleProjects() {
  document.querySelector("#websitesProjectsSpan").style.transitionDelay = "0s";
  document.querySelector("#webAppsProjectsSpan").style.transitionDelay = "1s";
  document.querySelector("#videoGamesProjectsSpan").style.transitionDelay =
    "2s";

  document.querySelector("#websitesProjectsSpan").style.color = "white";
  document.querySelector("#webAppsProjectsSpan").style.color = "white";
  document.querySelector("#videoGamesProjectsSpan").style.color = "white";

  document.querySelector("#projectsHeader__buttons").style.opacity = "1";
}

function removeAnimationTitleProjects() {
  document.querySelector("#websitesProjectsSpan").style.transitionDelay = "";
  document.querySelector("#webAppsProjectsSpan").style.transitionDelay = "";
  document.querySelector("#videoGamesProjectsSpan").style.transitionDelay = "";

  document.querySelector("#websitesProjectsSpan").style.color = "";
  document.querySelector("#webAppsProjectsSpan").style.color = "";
  document.querySelector("#videoGamesProjectsSpan").style.color = "";

  document.querySelector("#projectsHeader__buttons").style.opacity = "0";
}

function isFirstLineProjectsInViewport() {
  let firstLinePosition = document
    .getElementById("firstLineProjects")
    .getBoundingClientRect().top;

  return firstLinePosition < window.innerHeight;
}

function opacityFirstLineProjects() {
  const currentScroll = window.scrollY;
  const item = document.getElementById("firstLineProjects");
  const itemLineY = item.getBoundingClientRect().y;
  const itemLineHeight = item.getBoundingClientRect().height;

  let currentOpacity = (-1 / (itemLineHeight * 0.6)) * itemLineY + 1 / 0.6;
  item.style.opacity = currentOpacity;
}

function opacityImagesFirstLineProjects() {
  const topViewport = 0.03 * window.innerWidth;
  const firstLinePosition = document
    .getElementById("firstLineProjects")
    .getBoundingClientRect().y;
  const project1 = document.getElementById("bg-project-1");
  const project2 = document.getElementById("bg-project-2");
  const project3 = document.getElementById("bg-project-3");
  const project4 = document.getElementById("bg-project-4");

  if (firstLinePosition <= topViewport) {
    project1.style.opacity = "1";
    project2.style.opacity = "1";
    document.getElementById("link-1").classList.add("hover");
    document.getElementById("link-2").classList.add("hover");
    document.getElementById('infos-1').classList.add('hover');
    document.getElementById('infos-2').classList.add('hover');
  } else {
    project1.style.opacity = "0";
    project2.style.opacity = "0";
    document.getElementById("link-1").classList.remove("hover");
    document.getElementById("link-2").classList.remove("hover");
    document.getElementById('infos-1').classList.remove('hover');
    document.getElementById('infos-2').classList.remove('hover');
  }
}

function opacityImagesSecondtLineProjects() {
  const topViewport = 0.12 * window.innerWidth;
  const firstLinePosition = document
    .getElementById("secondLineProjects")
    .getBoundingClientRect().y;

  if (firstLinePosition <= topViewport) {
    document.getElementById("bg-project-3").style.opacity = "1";
    document.getElementById("bg-project-4").style.opacity = "1";

    document.getElementById("link-3").classList.add("hover");
    document.getElementById("link-4").classList.add("hover");
    document.getElementById("infos-3").classList.add("hover");
    document.getElementById("infos-4").classList.add("hover");
    // document.getElementById('title-3').classList.add('hover');
    // document.getElementById('title-4').classList.add('hover');
  } else {
    document.getElementById("bg-project-3").style.opacity = "0";
    document.getElementById("bg-project-4").style.opacity = "0";

    document.getElementById("link-3").classList.remove("hover");
    document.getElementById("link-4").classList.remove("hover");
    document.getElementById("infos-3").classList.remove("hover");
    document.getElementById("infos-4").classList.remove("hover");
    // document.getElementById('title-3').classList.remove('hover');
    // document.getElementById('title-4').classList.remove('hover');
  }
}

window.addEventListener("scroll", function () {
  // // ABOUT SECTION ANIMATIONS TRIGGER
  if (isAboutInViewport()) {
    animateAbout();
  } else {
    removeAboutAnimation();
  }

  // TITLE ACADEMIC SECTION ANIMATIONS TRIGGER
  if (isTitleAcademicInViewport()) {
    animateTitleAcademic();
  } else {
    removeAnimationTitleAcademic();
  }

  // ACADEMIC ITEMS ANIMATIONS TRIGGER
  opacityAcademicGrid();

  // SKILLS TITLE ANIMATIONS TRIGGER
  if (isTitleSkillsInViewport()) {
    animateTitleSkills();
  } else {
    removeAnimationTitleSkills();
  }

  // SKILLS GRID ANIMATIONS TRIGGER
  if (skillsGridIsInViewport()) {
    skillsGridAnimation();
  }

  // TITLE PROJECTS SECTION ANIMATIONS TRIGGER
  if (isTitleProjectsInViewport()) {
    animateTitleProjects();
  } else {
    removeAnimationTitleProjects();
  }

  if (isFirstLineProjectsInViewport()) {
    opacityFirstLineProjects();
    opacityImagesFirstLineProjects();
    opacityImagesSecondtLineProjects();
  }
});
