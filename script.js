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
    .append(title)
    .append(options)
    .append(input)
    .append(submit);
  appendScrambledImages(options, avatars, 'avatars');
  title.text('Choose Your Champion');
  input.attr('placeholder', 'name your champion');
  submit.click(loadUserInfo);
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
  appendScrambledImages(options,avatars, 'avatars');
  title.text('Choose Your Rival');
  input.remove();
  submit.remove();
  $('#stage').append(submit.click(loadRivalInfo));
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
  title.text('Choose Your BattleGround');
  appendScrambledImages(options, battlefields, 'battlefields');
  submit.remove();
  $('#stage').append(input)
    .append(submit);
}

$(document).ready(function() {
  loadStageOne();
});
