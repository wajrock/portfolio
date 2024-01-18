// window.onload = function () {
//     window.scrollTo(0, 0);
// }


// NAVIGATION BAR
let linksNavBar = [...document.getElementsByClassName('navlist')[0].getElementsByTagName('a')];

linksNavBar.forEach(link => {
    link.addEventListener('click', () => {
        const currentActive = document.getElementsByClassName('navlist')[0].getElementsByClassName('active')[0];
        currentActive.classList.remove('active');
        link.classList.add('active');
    })
});

let language = "en";
let opacityFR;
let opacityUS;

if (language == "en"){
    document.getElementById('fr-flag').style.opacity = "0.3";
    opacityFR = "0.3";
    opacityUS = "1";
} else {
    document.getElementById('us-flag').style.opacity = "0.3";
    opacityFR = "1";
    opacityUS = "0.3";
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