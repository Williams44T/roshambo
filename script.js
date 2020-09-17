let stageTitle = $('<h2></h2>');
let avatarSelection = $('<div></div>');
let input = $('<input>');
let submit = $('<button>Submit</button>');

let appendScrambledImages = function(element, object) {
  let random = scramble(Object.keys(object));
  for (let i = 0; i < random.length; i++) {
    element.append(
      $('<img>').attr('src', object[random[i]].img)
    );
  }
}

let loadStageOne = function() {
  $('#stage').empty()
    .append(stageTitle)
    .append(avatarSelection)
    .append(input)
    .append(submit);
  
  appendScrambledImages(avatarSelection, avatars);
  stageTitle.text('Choose Your Champion');
  input.attr('placeholder', 'name your champion');
};

$(document).ready(function() {
  loadStageOne();
});
