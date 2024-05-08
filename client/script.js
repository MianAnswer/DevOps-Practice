window.onload = function (ev) {
  let backgroundColors = [
    ['red', 'white'],
    ['blue', 'white'],
    ['white', 'black'],
    ['green', 'white'],
    ['pink', 'black']
  ];
  let colors = [...backgroundColors];
  window.setInterval(function () {
    let randomIndex = Math.floor(Math.random() * 10 % colors.length);
    console.log(randomIndex)
    let backgroundColor = colors[randomIndex];
    console.log(backgroundColor)
    document.body.style = `background-color: ${backgroundColor[0]}; color: ${backgroundColor[1]};`;
    colors.splice(randomIndex, 1);
    if (colors.length == 0) {
      colors = [...backgroundColors];
    }
  }, 5000);
};