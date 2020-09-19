let appendScrambledImages = function(element, object, cls) {
  element.empty();
  let random = scramble(Object.keys(object));
  for (let i = 0; i < random.length; i++) {
    let image = $('<img>')
      .attr('src', object[random[i]].img)
      .addClass(cls);
    element.append(applyRadio(random[i], 'options', image));
  }
}

let loadStageOne = function() {
  $('#stage').empty()
    .append(stageTitle)
    .append(stageOptions)
    .append(stageInput)
    .append(stageSubmit);
  appendScrambledImages(stageOptions, avatars, 'avatars');
  stageTitle.text('Choose Your Champion');
  stageInput.attr('placeholder', 'name your champion');
  stageSubmit.click(loadUserInfo);
}

let loadUserInfo = function() {
  let selection = getRadioSelection('options', true);
  userInfo.champion = selection;
  userInfo.avatar = avatars[selection].img;
  userInfo.name = $('#textInput').val() || 'anon';
  loadStageTwo();
}

let loadStageTwo = function() {
  $('#stage').before(user);
  userTitle.html(userInfo.champion + "<br/>Champion for<br/>" + userInfo.name);
  userImage.attr('src', userInfo.avatar);
  appendScrambledImages(stageOptions, avatars, 'avatars');
  stageTitle.text('Choose Your Rival');
  stageInput.remove();
  stageSubmit.remove();
  $('#stage').append(stageSubmit.click(loadRivalInfo));
}

let loadRivalInfo = function() {
  let selection = getRadioSelection('options', true);
  rivalInfo.rival = selection;
  rivalInfo.avatar = avatars[selection].img;
  loadStageThree();
}

let loadStageThree = function() {
  $('#stage').after(rival);
  rivalTitle.html(rivalInfo.rival);
  rivalImage.attr('src', rivalInfo.avatar);
  stageTitle.text('Choose Your BattleGround');
  appendScrambledImages(stageOptions, battlefields, 'battlefields');
  stageSubmit.remove();
  $('#stage').append(stageInput)
    .append(stageSubmit);
}

$(document).ready(function() {
  loadStageOne();
});
