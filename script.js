let loadStageOne = function() {
  $('#stage').empty();
  for (let avatar in avatars) {
    $('#stage').append($('<img>').attr('src', avatars[avatar].img));
  }
};

$(document).ready(function() {
  loadStageOne();
});
