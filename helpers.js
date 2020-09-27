let scramble = function(arr) {
  let scrambled = [];
  let copy = arr.slice();

  while (copy.length > 0) {
    let idx = Math.floor(Math.random() * copy.length);
    scrambled.push(copy[idx]);
    copy.splice(idx, 1);
  }

  return scrambled;
}

let applyRadio = function(val, name, wrapee) {

  return $('<div></div>')
    .append(
      $('<input>')
      .attr('id', val)
      .attr('type', 'radio')
      .attr('name', name)
      .attr('val', val)
    )
    .append(
      $('<label></label')
      .attr('for', val)
      .append(wrapee)
    );
}

let getRadioSelection = function(name, random) {
  let choices = $(`[name=${name}]`);
  
  for (let i = 0; i < choices.length; i++) {
    if (choices[i].checked) { 
      return choices[i].getAttribute('val');
      break; 
    }
  }
  
  if (random === true) { return getRandom(choices).getAttribute('val'); }

  return null;
}

let getRandom = function(array) {
  let random = Math.floor(Math.random() * array.length);
  return array[random];
}