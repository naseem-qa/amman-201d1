// problem domain: the Seattle Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.

// Each kitten's profile should have:
// - name
// - random age assigned
// - a list of what they like
// - an image
// good with kids
// good with dogs
// good with other cats
// breed

function Pet() {}

Pet.prototype.describe = function() {
  return `${this.name} is adorable and is ${this.age} months old`; // alternate style of string creation
}

function Kitten(name, likes, goodWithKids, goodWithDogs, goodWithOtherCats, breed) {
  this.name = name;
  this.likes = likes;
  this.goodWithKids = goodWithKids;
  this.goodWithDogs = goodWithDogs;
  this.goodWithOtherCats = goodWithOtherCats;
  this.breed = breed;
  this.age = 0;
  this.generateAge(1,12);
}

Kitten.prototype = new Pet();




Kitten.prototype.generateAge = function(min, max) {
  this.age = Math.ceil(Math.random() * (max - min) + min);
}

Kitten.prototype.render = function() {
  
  var container = document.getElementById('kittenProfiles');
  
  var article = document.createElement('article');
  container.appendChild(article);
  
  var nameHeader = document.createElement('h2');
  article.appendChild(nameHeader);
  nameHeader.textContent = this.name;
  
  var description = document.createElement('p');
  article.appendChild(description);
  description.textContent = this.describe();

  // likes
  var likesList = document.createElement('ul');
  article.appendChild(likesList);

  for(var i = 0; i < this.likes.length; i++) {
    var like = this.likes[i];
    var listItem = document.createElement('li');
    likesList.appendChild(listItem);
    listItem.textContent = like;
  }

  // preferences
  var preferencesTable = document.createElement('table');
  article.appendChild(preferencesTable);

  var headerRow = document.createElement('tr');
  preferencesTable.appendChild(headerRow);

  var preferences = ['Kids','Dogs','Other cats'];

  for(var i = 0; i < preferences.length; i++) {
    var th = document.createElement('th');
    headerRow.appendChild(th);
    th.textContent = preferences[i];
  }

  var dataRow = document.createElement('tr');
  preferencesTable.appendChild(dataRow);
  
  var tdKids = document.createElement('td');
  dataRow.appendChild(tdKids);
  tdKids.textContent = this.goodWithKids;

  var tdDogs = document.createElement('td');
  dataRow.appendChild(tdDogs);
  tdDogs.textContent = this.goodWithDogs;

  var tdCats = document.createElement('td');
  dataRow.appendChild(tdCats);
  tdCats.textContent = this.goodWithOtherCats;

  // image
  var img = document.createElement('img');
  article.appendChild(img);
  img.setAttribute('src', 'images/' + this.name.toLowerCase() + '.jpeg');

}

var frankie = new Kitten('Frankie', ['napping','chasing birds'], true, false, false, 'himalayan');

frankie.render();

var jumper = new Kitten('Jumper', ['lounging','hissing'], true, true, false, 'siamese');

jumper.render();

var serena = new Kitten('Serena', ['purring','rubbing legs'], true, true, true, 'tabby');

serena.render();