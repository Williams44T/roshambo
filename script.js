let title = $('<h2></h2>');
let options = $('<div></div>');
let input = $('<input>');
let submit = $('<button>Submit</button>');
let userInfo = {
  name: '',
  champion: '',
  avatar: '',
  results: [], // will host round#, weapon choice, result
}

// User Elements
let userTitle = $('<h2></h2>');
let userImage = $('<img>');
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
};

let loadStageTwo = function() {
  $('#stage').before(user);
  userTitle.html('userAvatar<br/>Champion for<br/>userName');
  appendScrambledImages(options,avatars);
  title.text('Choose Your Rival');
  input.remove();
}

$(document).ready(function() {
  loadStageOne();
  loadStageTwo();
});
