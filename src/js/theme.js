changeTheme(localStorage.getItem('theme'));

document.getElementById('lightThemeIcon').addEventListener('click', () => {
    localStorage.setItem('theme','light');
    changeTheme('light');
})

document.getElementById('darkThemeIcon').addEventListener('click', () => {
  localStorage.setItem('theme','dark');
    changeTheme('dark');
})


function changeTheme(newTheme){
    //   --background-color-light: #f1f5f9;
    // --background-color-dark: #020307;

    // --main-color: #135baf;

    // --title-color-light: #1e293b;
    // --title-color-dark: #999faa;

    // --subtitle-color-light: #a2a5ae;
    // --subtitle-color-dark: #424a62;

    // --text-color-light: #525252;
    // --text-color-dark: #acacac;

    // --color-card-ligh: #f1f5f9;
    // --color-card-dark: #03050b;

    // --gradient-card-dark-30: rgba(2, 3, 7, 0.38);
    // --gradient-card-dark-60: rgba(2, 3, 7, 0.87);
    // --gradient-card-dark-100: rgba(2, 3, 7, 0.9);
      let root = document.querySelector(':root');

      if (newTheme == "dark"){
        document.getElementById('lightThemeIcon').style.display = "block";
        document.getElementById('darkThemeIcon').style.display = "none";
        document.body.style.backgroundImage = "url('/assets/background_dark.png')";
        document.getElementById('contact').style.backgroundImage = "url('/assets/map_dark.svg')";
        root.style.setProperty('--background-color-light', '#020307');
        root.style.setProperty('--opposite-background-color-light', '#f1f5f9');
        root.style.setProperty('--title-color-light', '#999faa');
        root.style.setProperty('--subtitle-color-light', '#424a62');
        root.style.setProperty('--text-color-light', '#acacac');
        root.style.setProperty('--color-card-light', '#04050A');
        root.style.setProperty('--color-timeline-light', '#0a101f');
        root.style.setProperty('--color-navbar-light', 'rgba(3,5,11,0.45)');
        root.style.setProperty('--gradient-card-light-30', 'rgba(2, 3, 7, 0.38)');
        root.style.setProperty('--gradient-card-light-60', 'rgba(2, 3, 7, 0.75)');
        root.style.setProperty('--gradient-card-light-100', 'rgba(2, 3, 7, 0.99)');
      } else {
        document.getElementById('darkThemeIcon').style.display = "block";
        document.getElementById('lightThemeIcon').style.display = "none";
        document.body.style.backgroundImage = "url('/assets/background.png')";
        document.getElementById('contact').style.backgroundImage = "url('/assets/map.svg')";
        root.style.setProperty('--background-color-light', '#f1f5f9');
        root.style.setProperty('--opposite-background-color-light', '#020307');
        root.style.setProperty('--title-color-light', '#1e293b');
        root.style.setProperty('--subtitle-color-light', '#a2a5ae');
        root.style.setProperty('--text-color-light', '#525252');
        root.style.setProperty('--color-card-light', '#f1f5f9');
        root.style.setProperty('--color-timeline-light', '#e9e9e9');
        root.style.setProperty('--color-navbar-light', 'rgba(241,245,249,0.54)');
        root.style.setProperty('--gradient-card-light-30', 'rgba(241, 245, 249, 0.38)');
        root.style.setProperty('--gradient-card-light-60', 'rgba(241, 245, 249, 0.75)');
        root.style.setProperty('--gradient-card-light-100', 'rgba(241, 245, 249, 0.99)');
      }
    }