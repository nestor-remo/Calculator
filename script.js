let output_string = '';
let box = document.getElementById('display');

function read(e) {
 if (e === 'C') {
  clear();
 } else if (e === '=' && output_string === '') {
  box.value = 'Input a number silly UwU';
 } else if (e === '=') {
  calculate();
 } else {
  output_string += e;
  box.value = output_string;
 }
}

function clear() {
 output_string = '';
 box.value = '';
}

function calculate() {
 let result = eval(output_string);
 box.value = result;
 output_string = result.toString();
}
