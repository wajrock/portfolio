let currentLanguage = localStorage.getItem('lang'); //curent language ISO-CODE
// console.log(currentLanguage);
let opacityFR;
let opacityUS;

window.onload = async function (){
  const langData = await fetchData(currentLanguage);
  if (currentLanguage == "fr"){
    document.getElementById('us-flag').style.opacity = "0.3";
    opacityFR = "1";
    opacityUS = "0.3";
} else {
    document.getElementById('fr-flag').style.opacity = "0.3";
    opacityFR = "0.3";
    opacityUS = "1";
}
  updateContent(langData);
}

// CHANGE LANGUAGE FONCTION
let langOptions = document.querySelectorAll(".flags_item");

langOptions.forEach((e) => {
  e.addEventListener("click", async () => {
    
    e.id == "us-flag" ? currentLanguage = "en" : currentLanguage = "fr";
    
    localStorage.setItem('lang',currentLanguage);

    if (currentLanguage == "fr"){
      document.getElementById('us-flag').style.opacity = "0.3";
      opacityFR = "1";
      opacityUS = "0.3";
  } else {
      document.getElementById('fr-flag').style.opacity = "0.3";
      opacityFR = "0.3";
      opacityUS = "1";
  }

    
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




// FLAG HOVERS
document.getElementById('us-flag').addEventListener('mouseenter', () =>{
    document.getElementById('fr-flag').style.opacity = "0.3";
    document.getElementById('us-flag').style.opacity = "1";
})

document.getElementById('us-flag').addEventListener('mouseleave', () =>{
    document.getElementById('fr-flag').style.opacity = opacityFR;
    document.getElementById('us-flag').style.opacity = opacityUS;
})

document.getElementById('fr-flag').addEventListener('mouseenter', () =>{
    document.getElementById('us-flag').style.opacity = "0.3";
    document.getElementById('fr-flag').style.opacity = "1";
})

document.getElementById('fr-flag').addEventListener('mouseleave', () =>{
    document.getElementById('fr-flag').style.opacity = opacityFR;
    document.getElementById('us-flag').style.opacity = opacityUS;
    
})