function show(message) {

  if(typeof(message) == 'object') {
    message = JSON.stringify(message);
  }

  var p = document.createElement('p');

  p.textContent = message;

  var outputElement = document.getElementById('show-output');

  outputElement.appendChild(p);

  console.log(message);
}