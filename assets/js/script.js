//to turn screen on with button click
const btn = document.querySelector('.ipadbtn');

function turnOnScreen () {
  if (document.querySelector('.screen').style.display = 'none') {
    document.querySelector('.screen').style.display = 'block'
  }
};

btn.onclick = turnOnScreen;