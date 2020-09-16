let stageTitle = $('<h2></h2>');
let avatarSelection = $('<div></div>');
let input = $('<input>');
let submit = $('<button>Submit</button>');

let loadStageOne = function() {
  $('#stage').empty()
    .append(stageTitle)
    .append(avatarSelection)
    .append(input)
    .append(submit);
  
  let random = scramble(Object.keys(avatars));
  for (let i = 0; i < random.length; i++) {
    avatarSelection.append(
      $('<img>').attr('src', avatars[random[i]].img)
    );
  }

  stageTitle.text('Choose Your Champion');
  input.attr('placeholder', 'name your champion');
};

$(document).ready(function() {
  loadStageOne();
});
