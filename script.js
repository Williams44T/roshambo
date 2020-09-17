let title = $('<h2></h2>');
let options = $('<div></div>');
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

let setStage = function() {
  $('#stage').empty()
    .append(title)
    .append(options)
    .append(input)
    .append(submit);
}

let loadStageOne = function() {
  setStage();
  appendScrambledImages(options, avatars);
  title.text('Choose Your Champion');
  input.attr('placeholder', 'name your champion');
};

let loadStageTwo = function() {
  setStage();
  appendScrambledImages(options,avatars);
  title.text('Choose Your Rival');
}

$(document).ready(function() {
  loadStageOne();
  loadStageTwo();
});
