let avatars = {
  aang: { img: './images/avatars/aang.png' },
  deku: { img: './images/avatars/deku.png' },
  goku: { img: './images/avatars/goku.png' },
  link: { img: './images/avatars/link.png' },
  luffy: { img: './images/avatars/luffy.png' },
  naruto: { img: './images/avatars/naruto.png' },
  sasuke: { img: './images/avatars/sasuke.png' },
  vegeta: { img: './images/avatars/vegeta.png' },
  zoro: { img: './images/avatars/zoro.png' }
};

let battlefields = {
  deathstar: { img: './images/battlefields/deathstar.jpg' },
  desert: { img: './images/battlefields/desert.jpg' },
  kame: { img: './images/battlefields/kame.png' },
  lava: { img: './images/battlefields/lava.jpeg' },
  namek: { img: './images/battlefields/namek.jpeg' },
  sky: { img: './images/battlefields/sky.jpeg' },
  space: { img: './images/battlefields/space.jpeg' },
  water: { img: './images/battlefields/water.jpeg' },
  woods: { img: './images/battlefields/woods.jpeg' },
}

let weapons = {
  rock: { img: './images/weapons/rock-with-face.png' },
  paper: { img: './images/weapons/paper-with-face.png' },
  scissors: { img: './images/weapons/scissors-with-face.png' },
}

let stageTitle = $('<h2></h2>');
let stageOptions = $('<div></div>');
let stageInput = $('<input id="textInput">');
let stageSubmit = $('<button>Submit</button>');

let userInfo = {
  name: '',
  champion: '',
  avatar: '',
  score: 0,
  results: [], // will host round#, weapon choice, result
}
let rivalInfo = {
  rival: '',
  avatar: '',
  score: 0,
  results: [],
}

// User Elements
let userTitle = $('<h2></h2>').text(userInfo.name);
let userImage = $('<img class="avatars">');
let user = $('<div></div>')
  .append(userTitle)
  .append(userImage);

// Rival Elements
let rivalTitle = $('<h2></h2>');
let rivalImage = $('<img class="avatars">');
let rival = $('<div></div>')
  .append(rivalTitle)
  .append(rivalImage);

// Tracker Elements
let currentRound = 1;
let roundMax; // set by user
let roundDisplay = $('<div></div>').text(`ROUND ${currentRound}`);
let userScore = $('<div></div>').text(userInfo.score);
let rivalScore = $('<div></div>').text(rivalInfo.score);
let tracker = $('<div></div>')
  .append(userScore)
  .append(roundDisplay)
  .append(rivalScore);

