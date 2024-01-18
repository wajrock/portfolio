let currentLanguage = "en"; //curent language ISO-CODE

// CHANGE LANGUAGE FONCTION
let langOptions = document.querySelectorAll(".flags_item");

langOptions.forEach((e) => {
  e.addEventListener("click", async () => {
    
    e.id == "us-flag" ? currentLanguage = "en" : currentLanguage = "fr";

    const langData = await fetchData(currentLanguage);

    updateContent(langData);
  });
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
  const res = await fetch(`../src/${lang}.json`);
  return res.json();
}
