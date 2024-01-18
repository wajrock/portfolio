const aboutViewport = document.getElementById("about").offsetTop;
const academicViewport = document.getElementById("academic").offsetTop;
const contactViewport = document.getElementById("contact").offsetTop;

const firstLineProjects = document.getElementById("gradesApp").offsetTop;
const secondLineProjects = document.getElementById("metaWebsite").offsetTop;
const timelineViewPort = document.getElementById("timeline").offsetTop;

document.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  const currentHeightTimeline =
    ((currentScroll - timelineViewPort + window.innerHeight * 0.5) /
      document.getElementById("timeline").offsetHeight) *
    100;

  if (
    currentScroll >=
    timelineViewPort - window.innerHeight + window.innerHeight / 2
  ) {
    document.getElementById("activetimeline").style.height =
      currentHeightTimeline + "%";
  } else {
    document.getElementById("activetimeline").style.height = "0%";
  }

  if (currentHeightTimeline >= 16) {
    document.getElementById("firstCard").style.opacity = "1";
    document.getElementById('first').classList.add('activePoint');
  } else {
    document.getElementById("firstCard").style.opacity = "0";
    document.getElementById('first').classList.remove('activePoint');
  }

  if (currentHeightTimeline >= 50) {
    document.getElementById("secondCard").style.opacity = "1";
    document.getElementById('second').classList.add('activePoint');
  } else {
    document.getElementById("secondCard").style.opacity = "0";
    document.getElementById('second').classList.remove('activePoint');
  }

  if (currentHeightTimeline >= 84) {
    document.getElementById("thirdCard").style.opacity = "1";
    document.getElementById('third').classList.add('activePoint');
  } else {
    document.getElementById("thirdCard").style.opacity = "0";
    document.getElementById('third').classList.remove('activePoint');
  }

  if (currentScroll == 0) {
    document
      .getElementById("navigationBar")
      .classList.add("navigationBar__animation");
  }

  // ANIMATION TRIGGER ABOUT SECTION
  if (
    currentScroll >= aboutViewport - 400 &&
    currentScroll <= aboutViewport + 500
  ) {
    document.getElementById("about").classList.add("animationAbout");
    document.getElementById("about").style.opacity = "1";
  } else {
    document.getElementById("about").classList.remove("animationAbout");
    document.getElementById("about").style.opacity = "0";
  }

  // ANIMATION TRIGGER PROJECTS SECTION
  if (currentScroll >= firstLineProjects - window.innerHeight * 0.7) {
    document.getElementById("gradesApp").style.opacity = "1";
    document.getElementById("keopsGame").style.opacity = "1";
  } else {
    document.getElementById("gradesApp").style.opacity = "0";
    document.getElementById("keopsGame").style.opacity = "0";
  }

  if (currentScroll >= secondLineProjects - window.innerHeight * 0.7) {
    document.getElementById("metaWebsite").style.opacity = "1";
    document.getElementById("portfolioWebsite").style.opacity = "1";
  } else {
    document.getElementById("metaWebsite").style.opacity = "0";
    document.getElementById("portfolioWebsite").style.opacity = "0";
  }

  // ANIMATION TRIGGER CONTACT SECTION
  if (currentScroll >= contactViewport - 200) {
    document.getElementById("contact").style.opacity = "1"; // Disable transition temporarily
  } else {
    document.getElementById("contact").style.opacity = "0";
  }
});
