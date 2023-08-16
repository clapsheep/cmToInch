let el = document.getElementById('cm');
let elResult = document.getElementById('inch');
let elCalculate = document.getElementById('calculate');
const ratio = 2.54

function calculateInch() {
  let final = el.value / ratio;
  elResult.innerText = `${el.value}cm는 ${final}inch 입니다.`;
}
elCalculate.addEventListener('click', calculateInch);