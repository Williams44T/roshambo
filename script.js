let stageTitle = $('<h2></h2>');
let avatarSelection = $('<div></div');
let input = $('<input>');
let submit = $('<button>Submit</button>');

let loadStageOne = function() {
  $('#stage').empty()
    .append(stageTitle)
    .append(avatarSelection)
    .append(input)
    .append(submit);

  for (let avatar in avatars) {
      avatarSelection.append($('<img>').attr('src', avatars[avatar].img));
  }

  stageTitle.text('Choose Your Champion');
  input.attr('placeholder', 'name your champion');
};

$(document).ready(function() {
  loadStageOne();
});
