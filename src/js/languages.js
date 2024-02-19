let currentLanguage = localStorage.getItem("lang") ? localStorage.getItem("lang") : "en";

window.onload = async function () {
  const langData = await fetchData(currentLanguage);

  if (localStorage.getItem("lang")) {
    updateContent(langData);
  }
};

document.getElementById("langSwitch").addEventListener("click", async (e) => {
  e.target.innerHTML == "EN"
    ? (currentLanguage = "en")
    : (currentLanguage = "fr");

  localStorage.setItem("lang", currentLanguage);

  const langData = await fetchData(currentLanguage);

  updateContent(langData);
});



// UPDATE TEXTS CONTENT WITH NEW LANGUAGE
function updateContent(langData) {
  const traductibleItems = document.querySelectorAll(`[data-lng]`);

  traductibleItems.forEach((e) => {
    const key = e.getAttribute("data-lng");
    e.innerHTML = langData[key];
  });
}

// GET LANGUAGE DATA FROM JSON FILE
async function fetchData(lang) {
  const res = await fetch(`/portfolio/src/${lang}.json`);

  return res.json();
}
