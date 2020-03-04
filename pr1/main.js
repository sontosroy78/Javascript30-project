// const inputs = document.querySelectorAll('.controls input');

// function handleUpdate (){
//     const suffix = this.dataset.sizing || '';
//     document.documentElement.style.setProperty('--${this.name}', this.value + suffix);
// }
// inputs.forEace(input => input.addEventListener('change', handleUpdate));
// inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));


var elem = document.querySelector('input[id="spacing"]');
var elem2 = document.querySelector('input[id="blur"]');
var elem3 = document.querySelector('input[id="radius"]');
var elem4 = document.querySelector('input[id="color"]');

var rangeValue = function(){
  var newValue = elem.value;
  var newValue2 = elem2.value;
  var newValue3 = elem3.value;
  var newValue4 = elem4.value;
  
  var target = document.querySelector('#img');
  target.style.height = newValue+'px';
  target.style.borderRadius = newValue3+"%";
  target.style.filter = "blur("+newValue2+"px)";
  target.style.background = newValue4;
  document.querySelector('.Height').innerHTML = newValue;
  document.querySelector('.Blur').innerHTML = newValue2;
  document.querySelector('.Border-Radius').innerHTML = newValue3;
  document.querySelector('.Color').innerHTML = newValue4;
}

// function test(newValue){
//   console.log (newValue);
// }

elem.addEventListener("input", rangeValue);
elem2.addEventListener("input", rangeValue);
elem3.addEventListener("input", rangeValue);
elem4.addEventListener("input", rangeValue);