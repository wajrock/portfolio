let currentLanguage = "en"; //curent language ISO-CODE

// CHANGE LANGUAGE FONCTION
let langOptions = document.querySelectorAll(".options");

langOptions.forEach((e) => {
  e.addEventListener("click", async () => {
    let currentOption = e;

    let textContentCurrent;
    let textContentOther;

    let iconPathOtherOption;
    let iconPathCurrentOption;

    let idCurrentOption;
    let idOtherOption;
    

    if (currentOption.id == "en") {
      currentLanguage = "en";
      iconPathCurrentOption = "assets/flags/us.svg";
      iconPathOtherOption = "assets/flags/fr.svg";

      textContentCurrent = "English";
      textContentOther = "Français";

      idCurrentOption = "en";
      idOtherOption = "fr";
    } else {
      currentLanguage = "fr";
      iconPathCurrentOption = "assets/flags/fr.svg";
      iconPathOtherOption = "assets/flags/us.svg";

      textContentCurrent = "Français";
      textContentOther = "English";

      idCurrentOption = "fr";
      idOtherOption = "en"
    }

    document
      .getElementsByClassName("current")[0]
      .getElementsByClassName("nameCountry")[0].textContent =
      textContentCurrent;
    
    document
      .getElementsByClassName("current")[0].id =
      idCurrentOption;

    document
      .getElementsByClassName("current")[0]
      .getElementsByClassName("flag")[0].src = iconPathCurrentOption;

    document
      .getElementsByClassName("other")[0]
      .getElementsByClassName("nameCountry")[0].textContent = textContentOther;

    document
      .getElementsByClassName("other")[0].id =
      idOtherOption;
    document
      .getElementsByClassName("other")[0]
      .getElementsByClassName("flag")[0].src = iconPathOtherOption;

    const langData = await fetchData(currentLanguage);

    updateContent(langData);
  });
});

// UPDATE TEXTS CONTENT WITH NEW LANGUAGE
function updateContent(langData) {
  const traductibleItems = document.querySelectorAll(`[data-lng]`);

  traductibleItems.forEach((e) => {
    const key = e.getAttribute("data-lng");
    e.textContent = langData[key];
  });
}

// GET LANGUAGE DATA FROM JSON FILE
async function fetchData(lang) {
  const res = await fetch(`../src/${lang}.json`);
  return res.json();
}
