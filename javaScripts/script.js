const hamburger = document.querySelector('.hamburger');
const menuList = document.querySelector('.menu-list');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menuList.classList.toggle('active');
});

document.querySelectorAll('.menu').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  menuList.classList.remove('active');
}));

const cards = [
  {
    id:1,
    title: 'Tonic',
    lists: ['CANOPY', 'Back End Dev', 2023],
    img1: './portfolio-icons/card-3.png',
    img2: './portfolio-icons/card-1.jpg',
    text1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    text2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
    tags1: ['HTML', 'CSS', 'JavaScript'],
    tags2: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'JavaScript'],
    seeLive: 'See live',
    seeSource: 'See source',
  },
  {
    id:2,
    title: 'Tonic',
    title2: 'Tonic',
    img1: './portfolio-icons/mobile1.png',
    img2: './portfolio-icons/desk1.jpg',
    dot: './portfolio-icons/dot.png',
    lists: ['CANOPY', 'Back End Dev', 2023],
    lists2: ['CANOPY', 'Back End Dev', 2023],
    text1: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    text2: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    tags: ['HTML', 'CSS', 'JavaScript'],
    tags2: ['HTML', 'CSS', 'JavaScript'],
    button: 'See Project',
  },
  {
    id:3,
    title: 'Multi-Post Stories',
    title2: 'Multi-Post Stories',
    img1: './portfolio-icons/mobile2.png',
    img2: './portfolio-icons/desk2.png',
    lists: ['CANOPY', 'Back End Dev', 2023],
    lists2: ['FACEBOOK', 'Full Stack Dev', 2023],
    text1: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    text2: "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    tags: ['HTML', 'CSS', 'JavaScript'],
    tags2: ['HTML', 'Ruby on Rails', 'CSS', 'JavaScript'],
    button: 'See Project',
  },
  {
    id:4,
    title: 'Tonic',
    title2: 'FaceBook 360',
    img1: './portfolio-icons/mobile3.png',
    img2: './portfolio-icons/desk3.png',
    lists: ['CANOPY', 'Back End Dev', 2023],
    lists2: ['FACEBOOK', 'Full Stack Dev', 2023],
    text1: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    text2: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    tags: ['HTML', 'CSS', 'JavaScript'],
    tags2: ['HTML', 'Ruby on Rails', 'CSS', 'JavaScript'],
    button: 'See Project',
  },
  {
    id:5,
    title: 'Multi-Post Stories',
    title2: 'Uber Navigation',
    img1: './portfolio-icons/mobile4.jpg',
    img2: './portfolio-icons/desk4.png',
    lists: ['CANOPY', 'Back End Dev', 2023],
    lists2: ['Uber', 'Load Developer', 2023],
    text1: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    text2: "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
    tags: ['HTML', 'CSS', 'JavaScript'],
    tags2: ['HTML', 'CSS', 'Ruby on Rails', 'JavaScript'],
    button: 'See Project',
  }
];
const myCards = document.querySelector('.work-sections');
function displayCards() {
  let displayCard = '';
  for (let i = 1; i < cards.length; i += 1) {
    displayCard += `
      <div class="snapshoot-container" id="background">
        <div class="flex" id="flex-1">
          <div class="snap">
            <div class="snapshoot-1" id="snapshoot-1"></div>
          </div>
          <div class="enssah">
            <h3>${cards[i].title}</h3>
            <div class="canopy-section">
              <ul>
                <li class="canopy">${cards[i].lists[0]}</li>
                <li>
                  <img src="./portfolio-icons/dot.png" alt=""> ${cards[i].lists[1]}
                </li>
                <li>
                  <img src="./portfolio-icons/dot.png" alt=""> ${cards[i].lists[2]}
                </li>
              </ul>
            </div>
            <p class="my-p">${cards[i].text1}</p>
            <div class="btn-lang">
              <ul>
                ${cards[i].tags.map((tag) => `<li><button class="lang-btn" type="button">${tag}</button></li>`).join('')};
              </ul>
            </div>
            <button class="button" type="button" id="desktop-btn">${cards[i].button}</button>
          </div>
        </div>
      </div>
    `;
  }
  myCards.innerHTML = displayCard;
}
displayCards();
