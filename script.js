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
  loadStageTwo();
}

let loadStageTwo = function() {
  $('#stage').before(user);
  userTitle.text(userInfo.champion);
  userImage.attr('src', userInfo.avatar);
  appendScrambledImages(stageOptions, avatars, 'avatars');
  stageTitle.text('Choose Your Rival');
  stageSubmit.off().click(loadRivalInfo);
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
  stageSubmit.before(stageInput);
  stageSubmit.off().click(loadStageFour);
  stageInput.attr('placeholder', 'decide the number of rounds')
}

let loadStageFour = function() {
  let battlefield = getRadioSelection('options', true);
  $('#arena').css('background-image', 'url(' + battlefields[battlefield].img + ')');
  stageTitle.text('DoubleTap Your Weapon');
  appendScrambledImages(stageOptions, weapons, 'avatars');
  stageInput.remove();
  stageSubmit.remove();
  $('#stage').append(tracker);
}

let playRound = function() {
  let userWeapon = getRadioSelection('options');
  let rivalWeapon = getRandom(Object.keys(weapons));
  let winner;
  if (userWeapon === rivalWeapon) { winner = 'DRAW' };
  if (userWeapon === 'rock') {
    if (rivalWeapon === 'paper') { winner = rivalInfo.rival };
    if (rivalWeapon === 'scissors') { winner = userInfo.champion };
  }
  if (userWeapon === 'paper') {
    if (rivalWeapon === 'rock') { winner = userInfo.champion };
    if (rivalWeapon === 'scissors') { winner = rivalInfo.rival };
  }
  if (userWeapon === 'scissors') {
    if (rivalWeapon === 'rock') { winner = rivalInfo.rival };
    if (rivalWeapon === 'paper') { winner = userInfo.champion };
  }
  if (winner === 'DRAW') {
    alert('IT"S A DRAW');
  } else {
    alert(`AND THE WINNER IS....${winner}`);
  }
  //currently both scores are updated if the champion === rival
  //will need to disable the user avatar as an option for the rival
  if (winner === userInfo.champion) { userScore.text(++userInfo.score) };
  if (winner === rivalInfo.rival) { rivalScore.text(++rivalInfo.score) };
  roundDisplay.text(`ROUND ${++currentRound}`);
}

$(document).ready(function() {
  loadStageOne();
});
