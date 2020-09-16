let input = $('<input>');

let loadStageOne = function() {
  $('#stage').empty();
  // for (let avatar in avatars) {
  //   $('#stage').append($('<img>').attr('src', avatars[avatar].img));
  // }
  input.attr('placeholder', 'name your champion');
  $('#stage').append(input);
};

$(document).ready(function() {
  loadStageOne();
});
