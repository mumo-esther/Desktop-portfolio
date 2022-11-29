const btn = document.querySelector('.menu-btn');
const icon = document.querySelector('.union');

// eslint-disable-next-line func-names
btn.onclick = function () {
  if (icon.classList.contains('.union')) {
    icon.classList.replace('.union', '.btn-close-nav');
  } else {
    icon.classList.replace('.btn-close-nav', '.union');
  }
};
const navMenu = document.getElementById('nav-menu');
const toggleMenu = document.getElementById('nav-toggle');
const closeMenu = document.getElementById('nav-close');

toggleMenu.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

closeMenu.addEventListener('click', () => {
  navMenu.classList.remove('show');
});

const navLinks = document.querySelectorAll('.nav-item');

function linkshandler() {
  navMenu.classList.remove('show');
}
navLinks.forEach((n) => n.addEventListener('click', linkshandler)); navLinks.forEach((n) => n.addEventListener('click', linkshandler));

/* eslint-disable max-len */
const works = document.getElementById('works');

// const cardObj = [
//   {
//     img: [desktopSnapshoot, mobileSnapshoot],
//     title: 'Multi-Post stories',
//     h3: 'Gain + Glory',
//     lang: ['React', 'Css', 'JavaScript', 'Html'],
//     description:
//        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
//     demo: 'https://app-pokemon-webapp.netlify.app/',
//     source: 'https://github.com/mavericks-db/capstone03',
//   },
// ];
// eslint-disable-next-line no-plusplus
for (let i = 0; i < 6; i++) {
  const div = document.createElement('div');
  works.appendChild(div);
  div.innerHTML = `
            <article class="card-work">
                <div class="card-image">
                </div>
                <h2 class="card-title">
                 
                </h2>
                <h2>
                    Gain+Glory
                </h2>
                <ul class="card-tags">
                    <li>React</li>
                    <li>css</li>
                    <li>JavaScript</li>
                    <li>html</li>
                </ul>
                <button type="button" class="btn-popup">
                    See Project
                </button>
            </article>`;
}
const popbtn = document.querySelectorAll('.btn-popup');
popbtn.forEach((n) => {
  n.addEventListener('click', () => {
    const main = document.createElement('div');
    main.className = 'main';
    const desktoppopup = document.createElement('div');
    desktoppopup.className = 'popup';
    main.innerHTML = `<article class="card-work">
                <div">
                  <img src="./images/Snapshoot Portfolio desktop.png" alt="pop-up window image"
                   class="popupcard-image">
                </div>
                <div class="title">
                <h2 class="card-title">
                    Keeping track of
                     hundreds of
                     <br>
                      components
                </h2>
                 <div class = "titleright">
                <button type="button">
                    See Live<img src="./images/seelive.png" alt="live icon">
                </button>
                <button type="button">
                  See Source <img src="./images/white-github.png" alt="github icon">
                </button>
                </div>
                </div>
                <ul class="popupcard-tags">
                    <li>Codekit</li>
                    <li>Github</li>
                    <li>JavaScript</li>
                    <li>Bootsrap</li>
                    <li>Codepen</li>
                    <li>Terminal</li>
                </ul>
                <h6 class="card-text">

                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea
                </h6>
               
               <button class="close" >
                <i class=" fa fa-times"></i>
                </button>
            </article>`;
    main.appendChild(desktoppopup);
    works.appendChild(main);
    const close = document.querySelector('.close');
    close.addEventListener('click', () => {
      works.removeChild(main);
    });
  });
});
// mobile popup
const mobilepopbtn = document.querySelectorAll('.btn-popup');
mobilepopbtn.forEach((n) => {
  n.addEventListener('click', () => {
    const main = document.createElement('div');
    main.className = 'mobilemain';
    const mobilepopup = document.createElement('div');
    mobilepopup.className = 'popup';
    main.innerHTML = `<article class="card-work">
                <div">
                  <img src="./images/Snapshoot Portfolio mobile.png" alt="pop-up window image"
                   class="popupcard-image">
                </div>
            
                <h2 class="card-title">
                    Keeping track of
                     hundreds of
                     <br>
                      components
                </h2>
                
                <ul class="popupcard-tags">
                    <li>Ruby on Rails</li>
                    <li>Css</li>
                    <li>JavaScript</li>
                   
                </ul>
                <h6 class="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea
                </h6>
                 <div>
                <button type="button">
                    See Live<img src="./images/seelive.png" alt="live icon">
                </button>
                <button type="button">
                  See Source <img src="./images/white-github.png" alt="github icon">
                </button>
                </div>
               <button class="close" >
                <i class=" fa fa-times"></i>
                </button>
            </article>`;
    main.appendChild(mobilepopup);
    works.appendChild(main);
    const close = document.querySelector('.close');
    close.addEventListener('click', () => {
      works.removeChild(main);
    });
  });
});

// media query
// eslint-disable-next-line no-unused-vars
function init() {
  const query = window.matchMedia('("min-width:767px")');

  if (query.matches) {
    document.querySelector('desktoppopup').style.display = 'block';
  } else {
    document.querySelector('mobilepopup').style.display = 'block';
  }
}
