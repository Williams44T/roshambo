let title = $('<h2></h2>');
let options = $('<div></div>');
let input = $('<input id="textInput">');
let submit = $('<button>Submit</button>');
let userInfo = {
  name: '',
  champion: '',
  avatar: '',
  results: [], // will host round#, weapon choice, result
}

// User Elements
let userTitle = $('<h2></h2>').text(userInfo.name);
let userImage = $('<img class="avatar">');
let user = $('<div></div>')
  .append(userTitle)
  .append(userImage);

let appendScrambledImages = function(element, object) {
  element.empty();
  let random = scramble(Object.keys(object));
  for (let i = 0; i < random.length; i++) {
    let image = $('<img>')
      .attr('src', object[random[i]].img)
      .addClass('avatar');
    element.append(applyRadio(random[i], 'options', image));
  }
}

let getUserChoice = function() {
  let choices = $('[name="options"]');
  for (let i = 0; i < choices.length; i++) {
    if (choices[i].checked) { 
      return choices[i].getAttribute('val');
      break; 
    }
  }

  let random = Math.floor(Math.random() * choices.length);
  return choices[random].getAttribute('val');
}

let loadStageOne = function() {
  $('#stage').empty()
    .append(title)
    .append(options)
    .append(input)
    .append(submit);
  appendScrambledImages(options, avatars);
  title.text('Choose Your Champion');
  input.attr('placeholder', 'name your champion');
  submit.click(loadUserInfo);
}

let loadUserInfo = function() {
  let selection = getUserChoice();
  userInfo.champion = selection;
  userInfo.avatar = avatars[selection].img;
  userInfo.name = $('#textInput').val() || 'anon';
  loadStageTwo();
}

let loadStageTwo = function() {
  $('#stage').before(user);
  userTitle.html(userInfo.champion + "<br/>Champion for<br/>" + userInfo.name);
  userImage.attr('src', userInfo.avatar);
  appendScrambledImages(options,avatars);
  title.text('Choose Your Rival');
  input.remove();
}

$(document).ready(function() {
  loadStageOne();
});
