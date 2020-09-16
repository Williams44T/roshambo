let avatarSelection = $('<div></div');
let input = $('<input>');

let loadStageOne = function() {
  $('#stage').empty().append(avatarSelection);

  for (let avatar in avatars) {
      avatarSelection.append($('<img>').attr('src', avatars[avatar].img));
  }

  input.attr('placeholder', 'name your champion');
  $('#stage').append(input);
};

$(document).ready(function() {
  loadStageOne();
});
