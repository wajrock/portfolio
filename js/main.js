// window.onload = function () {
//     window.scrollTo(0, 0);
// }

var header = document.getElementById("navigationBar");
var isHovered = false;

// Gérer le survol du header
header.addEventListener("mouseover", function () {
  isHovered = true;
  header.classList.remove("hidden");
});

header.addEventListener("mouseout", function () {
  isHovered = false;
  hideHeaderAfterDelay();
});

// Gérer le défilement de la page
window.addEventListener("scroll", function () {
  if (!isHovered) {
    hideHeaderAfterDelay();
  }

  if (this.window.scrollY == 0) {
    header.classList.remove("hidden");
  }
});

function hideHeaderAfterDelay() {
  if (!isHovered) {
    header.classList.add("hidden");
  }
}

// NAVIGATION BAR
let linksNavBar = [
  ...document.getElementsByClassName("navlist")[0].getElementsByTagName("a"),
];

linksNavBar.forEach((link) => {
  link.addEventListener("click", () => {
    const currentActive = document
      .getElementsByClassName("navlist")[0]
      .getElementsByClassName("active")[0];
    currentActive.classList.remove("active");
    link.classList.add("active");
  });
});


function showMainCard(card) {
  card.style.zIndex = "1";
  card.style.opacity = "1";
  card.style.transform = "translate3D(-50%,0,0) scale(1) rotate(0)";
}

function showOtherCards(leftCard, rightCard) {
  leftCard.style.transform =
    "translate3D(-90%, 0, 0) scale(0.8) perspective(40rem) rotateY(15deg)";
  leftCard.style.opacity = ".4";

  rightCard.style.transform =
    "translate3D(-10%, 0, 0) scale(0.8) perspective(40rem) rotateY(-15deg)";
  rightCard.style.opacity = ".4";
}

function hideCard(card) {
  card.style.opacity = "0";
  card.style.zIndex = "-9";
  card.style.transform = "translate3D(-50%,0,0) scale(1) rotate(0)";
}

const checkboxes = {
    "item-1":{
        cardToShow: "project-1",
        cardToHide: "project-4",
        leftCard: "project-2",
        rightCard: "project-3"
    },
    "item-2":{
        cardToShow: "project-2",
        cardToHide: "project-3",
        leftCard: "project-4",
        rightCard: "project-1"
    },
    "item-3":{
        cardToShow: "project-3",
        cardToHide: "project-2",
        leftCard: "project-1",
        rightCard: "project-4"
    },
    "item-4":{
        cardToShow: "project-4",
        cardToHide: "project-1",
        leftCard: "project-3",
        rightCard: "project-2"
    }
};

showMainCard( document.getElementById(checkboxes["item-1"].cardToShow));
hideCard(document.getElementById(checkboxes["item-1"].cardToHide));
showOtherCards(
    document.getElementById(checkboxes["item-1"].leftCard), 
    document.getElementById(checkboxes["item-1"].rightCard)
    );

[...document.getElementsByName('slider')].forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const cardToShow = document.getElementById(checkboxes[checkbox.id].cardToShow);
        const cardToHide = document.getElementById(checkboxes[checkbox.id].cardToHide);
        const leftCard = document.getElementById(checkboxes[checkbox.id].leftCard);
        const rightCard = document.getElementById(checkboxes[checkbox.id].rightCard);

        showMainCard(cardToShow);
        hideCard(cardToHide);

        leftCard.style.zIndex = "0";
        rightCard.style.zIndex = "0";

        showOtherCards(leftCard, rightCard);
    })
});