// Speakers object Implementation
const speakerSection = document.querySelector('.subject-speaker');

const speaker = [
  {
    picture: 'img/speakers/desire.png',
    name: 'Desire M\'Zinga',
    function: 'Minister, DRC Ministry of Agriculture',
    description: 'He has been appointed Minister of Agriculture since April 12, 2021',
  },

  {
    picture: 'img/speakers/julien.png',
    name: 'Julien Paluku',
    function: 'Minister, DRC Ministry of Industry',
    description: 'He has been appointed Minister of Industry since April 12, 2021',
  },

  {
    picture: 'img/speakers/malango.png',
    name: 'Malango Washikala',
    function: 'Co-founder and Chief Executive Officer, Altech Group',
    description: 'Social entrepreneur and development specialist',
  },

  {
    picture: 'img/speakers/timo.png',
    name: 'Timo Ntoto Aley Angu',
    function: 'Deputy Managing Director, Ecobank DRC',
    description: 'Seasoned Banker with effective leadership and solid background in Corporate Finance',
  },

  {
    picture: 'img/speakers/aaron.png',
    name: 'Aaron Leopold',
    function: 'Chief Executive Officer, EnerGrow',
    description: 'Aaron is a thought and action leader in integrated and distributed energy policies, business models',
  },

  {
    picture: 'img/speakers/atsuko.png',
    name: 'Atsuko Toda',
    function: 'Director: Agriculture Finance and Rural Development Department, African Development Bank',
    description: 'Experienced manager and expert',
  },
];

function popupateSpeakers(speakerObject) {
  let div = [];
  div.className = 'main-speaker';

  let template = [];
  if(screen.width < 768) {
    for(let i = 0; i < 2; i += 1) {
      div[i] = document.createElement('div');
      div[i].className = 'main-speaker';
      template[i] = `
        <div class="picture-speaker">
        <img src="${speakerObject[i].picture}" alt="">
        </div>
        <div class="description-speaker">
        <h4>${speakerObject[i].name}</h4>
        <span>${speakerObject[i].function}</span>
        <div></div>
        <p>
          ${speakerObject[i].description}
        </p>
        </div>
      `;

      div[i].innerHTML = template[i];
      speakerSection.appendChild(div[i]);
    }

    let loadMore = document.createElement('div');;
    loadMore.className = 'more-speaker';
    loadMore.id = 'more-speaker';
    loadMore.innerHTML = `<button class="more-speaker-button">MORE  <img src="img/icon_down.svg" alt="Show more speakers"></button>`;
    speakerSection.appendChild(loadMore);
  } else {
    for(let i = 0; i < speakerObject.length; i += 1) {
      div[i] = document.createElement('div');
      div[i].className = 'main-speaker';
      template[i] = `
        <div class="picture-speaker">
        <img src="${speakerObject[i].picture}" alt="">
        </div>
        <div class="description-speaker">
        <h4>${speakerObject[i].name}</h4>
        <span>${speakerObject[i].function}</span>
        <div></div>
        <p>
          ${speakerObject[i].description}
        </p>
        </div>
      `;

      div[i].innerHTML = template[i];
      speakerSection.appendChild(div[i]);
    }
  }
}

popupateSpeakers(speaker);

const loadMoreButton = document.querySelector('.more-speaker-button');

function loadMoreSpeaker(speakerObject) {
  document.getElementById('more-speaker').style.display = 'none';

  let div = [];
  div.className = 'main-speaker';

  let template = [];
  for(let i = 2; i < speakerObject.length; i += 1) {
    div[i] = document.createElement('div');
    div[i].className = 'main-speaker';
    template[i] = `
      <div class="picture-speaker">
      <img src="${speakerObject[i].picture}" alt="">
      </div>
      <div class="description-speaker">
      <h4>${speakerObject[i].name}</h4>
      <span>${speakerObject[i].function}</span>
      <div></div>
      <p>
        ${speakerObject[i].description}
      </p>
      </div>
    `;

    div[i].innerHTML = template[i];
    speakerSection.appendChild(div[i]);
  }
}

loadMoreButton.addEventListener('click', () => {
  loadMoreSpeaker(speaker);
});