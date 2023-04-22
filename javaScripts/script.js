// hamburger menu and menu

const openBtn = document.querySelector('#open-menu');
const closeBtn = document.querySelector('#close-menu');
const menu = document.querySelector('.nav-item-links');
const overlay = document.querySelector('.overlay');

openBtn.addEventListener('click', () => {
  menu.style.display = 'block';
  openBtn.style.display = 'none';
  closeBtn.style.display = 'inline-block';

  overlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
});

// close & open the menu bar

const closeNavbar = () => {
  menu.style.display = 'none';
  openBtn.style.display = 'inline-block';
  closeBtn.style.display = 'none';
  overlay.classList.add('hidden');
  document.body.style.overflow = 'scroll';
};
closeBtn.addEventListener('click', () => {
  closeNavbar();
});
// ham end
// begin card section

const projectsCards = document.querySelector('.cards');
const modalPopUp = document.querySelector('#window');

// arr of objects

const cards = [
  {
    id: 1,
    title: 'Tonic',
    description: 'A daily selection of privately personalized reads no accounts or sign-ups required',
    img1: './portfolio-icons/mobile1.png',
    technology: ['HTML', 'CSS', 'Ruby on Rails', 'JavaScript'],
    platform: 'CANOPY',
    stack: 'Back End Dev',
    year: 2023,
    livelink: 'https://efmomoh.github.io/Mobile_View-Portforlio/',
    linkSource: 'https://github.com/efmomoh/Mobile_View-Portforlio',
  },
  {
    id: 2,
    title: 'Multi-Post Stories',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    img1: './portfolio-icons/mobile2.jpg',
    technology: ['HTML', 'CSS', 'Ruby on Rails', 'JavaScript'],
    platform: 'FACEBOOK',
    stack: 'Full Stack Dev',
    year: 2023,
    livelink: 'https://efmomoh.github.io/Mobile_View-Portforlio/',
    linkSource: 'https://github.com/efmomoh/Mobile_View-Portforlio',
  },
  {
    id: 3,
    title: 'Facebook 360',
    description: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    img1: './portfolio-icons/mobile3.jpg',
    technology: ['HTML', 'CSS', 'Ruby on Rails', 'JavaScript'],
    platform: 'FACEBOOK',
    stack: 'Full Stack Dev',
    year: 2023,
    livelink: 'https://efmomoh.github.io/Mobile_View-Portforlio/',
    linkSource: 'https://github.com/efmomoh/Mobile_View-Portforlio',
  },
  {
    id: 4,
    title: 'Uber Navigation',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    img1: './portfolio-icons/mobile4.jpg',
    technology: ['HTML', 'CSS', 'Ruby on Rails', 'JavaScript'],
    platform: 'Uber',
    stack: 'Lead Developer',
    year: 2023,
    livelink: 'https://efmomoh.github.io/Mobile_View-Portforlio/',
    linkSource: 'https://github.com/efmomoh/Mobile_View-Portforlio',
  },
];

function generateContent() {
  projectsCards.innerHTML = cards
    .map(
      (content) => `          
         <div class="details">
        <img src=${content.img1}  alt="img1" />

        <div class="card-info">
          <h2>${content.title}</h2>

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
          <a class="detail-btn btn" id=${content.id}href="#">See Projects</a>
        </div>
      </div> `,
    )
    .join('');
}

projectsCards.addEventListener('click', (e) => {
  if (e.target.classList.contains('detail-btn')) {
    modalPopUp.style.display = 'block';
    const id = parseFloat(e.target.id);
    const search = cards.find((x) => x.id === id);
    if (search !== undefined) {
      modalPopUp.innerHTML = `
             <div class="popup">
            <div class="header-close window-container">
              <h3 class="popup-title">${search.title}</h3>
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
          <img class="main-img" src=${search.img1} alt="" />
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

// function for cards ends here

// form validation goes here

function showMessage(input, message, type) {
  const msg = input.parentNode.querySelector('small');
  msg.innerHTML = message;

  // updating the input clases
  input.className = type ? 'success' : 'error';
  return type;
}
function showError(input, message) {
  return showMessage(input, message, false);
}
function showSuccess(input) {
  return showMessage(input, '', true);
}
function hasValue(input, message) {
  if (input.value.trim() === '') {
    return showError(input, message);
  }
  return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
  // check if value is not empty then accept if it's not

  if (!hasValue(input, requiredMsg)) {
    return false;
  }
  // check global values and chrs to validate email RegEx
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$/;

  const email = input.value.trim();
  const email2 = input.value.trim().toLowerCase();

  if (!emailRegex.test(email) && (email !== email2)) {
    return showError(input, invalidMsg);
  }
  return true;
}

const form = document.getElementById('register');
const NAME_REQ = 'Please Enter your name';
const MSG_REQ = 'Field Cannot be empty';
const EMAIL_REQ = 'Please Enter Your email';
const EMAIL_INVALID = 'Please Enter a correct email address in Lowercase';
const btn = document.getElementById('submit-btn');

// signal rejection if the input is wrong
});