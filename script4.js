function calculate()
 {
  let volume;
  let radius = document.getElementById('radius').value;
  console.log(radius);
   radius = Math.abs(radius);
  volume = (4/3) * Math.PI * Math.pow(radius, 3);
   volume = volume.toFixed(4);
   document.getElementById('volume').value = volume;
  return false;
  } 
  calculate();
  window.onload = document.getElementById('MyForm').onsubmit = calculate;
  