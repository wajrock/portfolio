let itemsWhealer = [...document.querySelectorAll('.child')];

let skillsInformation =
{
    "html":
    {
        title: "HTML",
        "level": 
        {
            "en": "Advanced",
            "fr": "Avancé",
        },
        link_logo: "html.png",
        color: "#FC490B"
    },

    "css":
    {
        title: "CSS",
        "level": 
        {
            "en": "Advanced",
            "fr": "Avancé",
        },
        link_logo: "css.png",
        color: "#2196F3"
    },

    "sass":
    {
        title: "SASS",
        "level": 
        {
            "en": "Intermediate",
            "fr": "Intermédiaire",
        },
        link_logo: "sass.png",
        color: "#CC6699"
    },

    "js":
    {
        title: "Javascript",
        "level": 
        {
            "en": "Intermediate",
            "fr": "Intermédiaire",
        },
        link_logo: "js.png",
        color: "#FFDF00"
    },

    "ts":
    {
        title: "TypeScript",
        "level": 
        {
            "en": "Beginner",
            "fr": "Débutant",
        },
        link_logo: "ts.png",
        color: "#0078CF"
    },

    "react":
    {
        title: "React",
        "level": 
        {
            "en": "Beginner",
            "fr": "Débutant",
        },
        link_logo: "react.png",
        color: "#37C4EA"
    },

    "sql":
    {
        title: "SQL",
        "level": 
        {
            "en": "Intermediate",
            "fr": "Intermédiaire",
        },
        link_logo: "sql.png",
        color: "#E48E00"
    },

    "php":
    {
        title: "PHP",
        "level": 
        {
            "en": "Intermediate",
            "fr": "Intermédiaire",
        },
        link_logo: "php.png",
        color: "#8F9ED1"
    },

    "java":
    {
        title: "Java",
        "level": 
        {
            "en": "Intermediate",
            "fr": "Intermédiaire",
        },
        link_logo: "java.png",
        color: "#DB380E"
    },

    "c++":
    {
        title: "C++",
        "level": 
        {
            "en": "Beginner",
            "fr": "Débutant",
        },
        link_logo: "c++.png",
        color: "#00599C"
    },

    "python":
    {
        title: "Python",
        "level": 
        {
            "en": "Intermediate",
            "fr": "Intermédiaire",
        },
        link_logo: "python.png",
        color: "#407DAF"
    },

    "figma":
    {
        title: "Figma",
        "level": 
        {
            "en": "Intermediate",
            "fr": "Intermédiaire",
        },
        link_logo: "figma.png",
        color: "#B659FF"
    },
}





itemsWhealer.forEach(e => {
    e.addEventListener('mouseenter',() => {
        e.style.width = "4rem";

        var transformMatrix = window.getComputedStyle(document.querySelector("#skillsWhealer")).transform;

        // Extrait l'angle de rotation à partir de la matrice de transformation
        var rotationValues = transformMatrix.split('(')[1].split(')')[0].split(',');
        var angle = Math.atan2(parseFloat(rotationValues[1]), parseFloat(rotationValues[0])) * (180 / Math.PI);

        removeViewSkill();
        viewSkill(e.id,skillsInformation,angle);


    })

    e.addEventListener('mouseleave',() => {
        e.style.width = "3rem";
        
    })
});

document.getElementById('skillsWhealer').addEventListener('mouseleave',()=>{
    removeViewSkill()
})

function removeViewSkill(){
    if (document.getElementById('detailsSkills')) {
        document.getElementById('skillsWhealer').removeChild(document.getElementById('detailsSkills'));
    }
    document.getElementById('headingSkills').style.display = "block";
    
}
function viewSkill(id,skillDict,angle){
    console.log(angle);
            // Crée une section
document.getElementById('headingSkills').style.display = "none";
const detailsSkillsSection = document.createElement("section");
detailsSkillsSection.classList.add("detailsSkills");
detailsSkillsSection.id = "detailsSkills";
detailsSkillsSection.style.transform = "rotate(" + (-angle) + "deg)";

// Crée un titre h3
const titleH3 = document.createElement("h3");
titleH3.classList.add("detailsSkills__title", "basic-title");
titleH3.id = "detailsSkills__title";
titleH3.textContent = skillDict[id].title;

// Crée une div pour le niveau de compétence
const skillLevelDiv = document.createElement("div");
skillLevelDiv.classList.add("skillLevel");

// Crée une div pour la barre de progression
const progressBarDiv = document.createElement("div");
progressBarDiv.classList.add("skillLevel__progressbar");

// Crée une div pour la partie actuelle de la barre de progression
const currentProgressBarDiv = document.createElement("div");
currentProgressBarDiv.classList.add("skillLevel__progressbar-current");
currentProgressBarDiv.style.background = skillDict[id].color;
if (skillDict[id].level[localStorage.getItem('lang')] == "Beginner"){
    currentProgressBarDiv.classList.add('beginner');
} else if (skillDict[id].level == "Intermediate"){
    currentProgressBarDiv.classList.add('intermediate');
    
} else {
    currentProgressBarDiv.classList.add("advanced");
}

// Crée un paragraphe pour le texte du niveau de compétence
const skillLevelTextP = document.createElement("p");
skillLevelTextP.classList.add("skillLevel__text");
skillLevelTextP.id = "skillLevel__text";
skillLevelTextP.style.color = skillDict[id].color
skillLevelTextP.textContent = skillDict[id].level[localStorage.getItem('lang')];

// Ajoute les éléments au DOM (à la section skillLevel)
progressBarDiv.appendChild(currentProgressBarDiv);
skillLevelDiv.appendChild(progressBarDiv);
skillLevelDiv.appendChild(skillLevelTextP);

// Crée une div pour les projets
const projectsDiv = document.createElement("div");
projectsDiv.classList.add("detailsSkills__projects");

// projectsDiv.addEventListener('mouseenter',()=>{
//     projectsDiv.style.backgroundColor = skillDict[id].color;
// })

// projectsDiv.addEventListener('mouseleave',()=>{
//     projectsDiv.style.backgroundColor = "transparent";
// })

// Crée une image
const image = document.createElement("img");
image.src = "assets/skills/"+skillDict[id].link_logo;
image.alt = "";

// Crée un paragraphe pour le texte des projets JavaScript
const projectsTextP = document.createElement("p");
localStorage.getItem('lang') == "en" ? projectsTextP.textContent = "My"+skillDict[id].title+"'s Projects" : projectsTextP.textContent = "Mes projets "+skillDict[id].title;

// Crée un élément svg
const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svgElement.setAttribute("width", "24");
svgElement.setAttribute("height", "24");
svgElement.setAttribute("viewBox", "0 0 24 24");

// Crée un chemin pour l'icône
const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
pathElement.setAttribute("fill", "currentColor");
pathElement.setAttribute("d", "M13.293 7.293a.999.999 0 0 0 0 1.414L15.586 11H8a1 1 0 0 0 0 2h7.586l-2.293 2.293a.999.999 0 1 0 1.414 1.414L19.414 12l-4.707-4.707a.999.999 0 0 0-1.414 0");

// Ajoute le chemin à l'élément svg
svgElement.appendChild(pathElement);

// Ajoute les éléments au DOM (à la section projects)
projectsDiv.appendChild(image);
projectsDiv.appendChild(projectsTextP);
projectsDiv.appendChild(svgElement);

// Ajoute tous les éléments à la section principale
detailsSkillsSection.appendChild(titleH3);
detailsSkillsSection.appendChild(skillLevelDiv);
detailsSkillsSection.appendChild(projectsDiv);

// Ajoute la section au corps du document (ou à un autre conteneur approprié)
document.getElementById('skillsWhealer').appendChild(detailsSkillsSection);
}