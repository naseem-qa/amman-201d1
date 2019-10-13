function randomInRange(min, max) {

  var range = max - min;

  var rand = (Math.random() * range) + min;

  return Math.ceil(rand);
}



var header1 = document.createElement('h1');

header1.textContent = 'Hotels';

var contentArea = document.getElementById('content-area');

contentArea.appendChild(header1);


/*
How to make this?
<p>Ataba Hotel</p>
<ul>
  <li>Beds: 2</li>
</ul>
*/

var paragraph = document.createElement('p');

paragraph.textContent = 'Ataba Hotel';

var contentArea = document.getElementById('content-area');

contentArea.appendChild(paragraph);

var ul = document.createElement('ul');

contentArea.appendChild(ul);

var li = document.createElement('li');

li.textContent = 'Beds: 2';

ul.appendChild(li);






