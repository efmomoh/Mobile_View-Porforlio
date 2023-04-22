//hamburger menu and menu

const openBtn = document.querySelector('#open-menu');
const closeBtn = document.querySelector('#close-menu');
const menu = document.querySelector('.nav-item-links');
const overlay = document.querySelector('.overlay');

  openBtn.addEventListener('click', () => {  //open menu or nav bar
  menu.style.display = 'block';
  openBtn.style.display = 'none';
  closeBtn.style.display = 'inline-block';

  overlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden'; //prevent scrolling if over lay is not hidden
});

const closeNavbar = () => { //clont btn
  menu.style.display = 'none';
  openBtn.style.display = 'inline-block';
  closeBtn.style.display = 'none';
  overlay.classList.add('hidden');
  document.body.style.overflow = 'scroll';
};
closeBtn.addEventListener('click', () => {
  closeNavbar();
});

 //end of menu and hamburger

const projectsArea = document.querySelector('.cards');
const modalPopUp = document.querySelector('#window');

const cards = [
  {
    id: 1,
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads no accounts or sign-ups required',
    featureImg: './portfolio-icons/mobile1.png',
    technology: ['HTML', 'CSS', 'Ruby on Rails', 'JavaScript'],
    platform: 'CANOPY',
    stack: 'Back End Dev',
    year: 2023,
    livelink: 'https://efmomoh.github.io/Mobile_View-Portforlio/',
    linkSource: 'https://github.com/efmomoh/Mobile_View-Portforlio',
  },
  {
    id: 2,
    name: 'Multi-Post Stories',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    featureImg: './portfolio-icons/mobile2.jpg',
    technology: ['HTML', 'CSS', 'Ruby on Rails', 'JavaScript'],
    platform: 'FACEBOOK',
    stack: 'Full Stack Dev',
    year: 2023,
    livelink: 'https://efmomoh.github.io/Mobile_View-Portforlio/',
    linkSource: 'https://github.com/efmomoh/Mobile_View-Portforlio',
  },
  {
    id: 3,
    name: 'Facebook 360',
    description: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    featureImg: './portfolio-icons/mobile3.jpg',
    technology: ['HTML', 'CSS', 'Ruby on Rails', 'JavaScript'],
    platform: 'FACEBOOK',
    stack: 'Full Stack Dev',
    year: 2023,
    livelink: 'https://efmomoh.github.io/Mobile_View-Portforlio/',
    linkSource: 'https://github.com/efmomoh/Mobile_View-Portforlio',
  },
  {
    id: 4,
    name: 'Uber Navigation',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    featureImg: './portfolio-icons/mobile4.jpg',
    technology: ['HTML', 'CSS', 'Ruby on Rails', 'JavaScript'],
    platform: 'Uber',
    stack: 'Lead Developer',
    year: 2023,
    livelink: 'https://efmomoh.github.io/Mobile_View-Portforlio/',
    linkSource: 'https://github.com/efmomoh/Mobile_View-Portforlio',
  },
];

function generateContent() {
  projectsArea.innerHTML = cards
    .map(
      (content) => `          
         <div class="details">
        <img src=${content.featureImg}  alt="image" />

        <div class="card-info">
          <h2>${content.name}</h2>

          <div class="title-and-date">
            <p class="title">CANOPY</p>
            <span></span>
            <p class="muted">${content.stack}</p>
            <span></span>
            <p class="muted">${content.year}</p>
          </div>

          <p class="description">${content.description}</p>
          <ul class="stack">
          ${content.technology.map((x) => `<li>${x}</li>`).join('')}
          </ul>
          <a class="detail-btn btn" id=${content.id}href="#">See cards</a>
        </div>
      </div> `,
    )
    .join('');
}

projectsArea.addEventListener('click', (e) => {
  if (e.target.classList.contains('detail-btn')) {
    modalPopUp.style.display = 'block';
    const id = parseFloat(e.target.id);
    const search = cards.find((x) => x.id === id);
    if (search !== undefined) {
      modalPopUp.innerHTML = `
             <div class="popup">
            <div class="header-close window-container">
              <h3 class="popup-title">${search.name}</h3>
              <i id="close-btn" class="uil uil-multiply"></i>
            </div>
            <div class="title-and-date window-container">
              <p class="title">${search.platform}</p>
              <span></span>
              <p class="muted">${search.stack}</p>
              <span></span>
              <p class="muted">${search.year}</p>
            </div>
            <div class="card-info window-container">
          <img class="main-img" src=${search.featureImg} alt="" />
          <div class="switch">
            <div class="description">
              <p>
               ${search.description}
              </p>
              <p class="hide">
              ${search.description}
              </p>
            </div>
            <div class="stack-and-buttons">
              <ul class="stack">
                  ${search.technology.map((x) => `<li>${x}</li>`).join('')}
              </ul>
              <div class="buttons">
                <a href=${search.livelink} class="see-live"
                  ><img src="./portfolio-icons/gitHubEnable.png" alt="see live"
                /></a>
                <a href=${search.linkSource} class="see-source"
                  ><img src="./portfolio-icons/gitHubEnable.png" alt="see source"
                /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
     `;
    }
  }
  generateContent();
});
modalPopUp.addEventListener('click', (e) => {
  if (e.target.id === 'close-btn') {
    modalPopUp.style.display = 'none';
  }
  generateContent();
});
generateContent();