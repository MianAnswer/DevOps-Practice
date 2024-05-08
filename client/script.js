window.onload = function (ev) {
  let colorSets = [
    ['red', 'white'],
    ['blue', 'white'],
    ['white', 'black'],
    ['green', 'white'],
    ['pink', 'black']
  ];

  let colorSetsTemp = [...colorSets];

  window.setInterval(function () {
    // get random index from the colors array (within bounds)
    let randomIndex = Math.floor(Math.random() * 10 % colorSetsTemp.length);
    // get random color from array
    let colorSet = colorSetsTemp[randomIndex];

    // change background and text color
    document.body.style = `background-color: ${colorSet[0]}; color: ${colorSet[1]};`;

    // remove color set from the array (to avoid picking the color more than once per interval)
    colorSetsTemp.splice(randomIndex, 1);

    // reset the array once interval is completed
    if (colorSetsTemp.length == 0) {
      colorSetsTemp = [...colorSets];
    }
  }, 5000);
};