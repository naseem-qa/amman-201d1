// problem domain: the Seattle Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.

// Each kitten's profile should have:
// - name
// - breed
// - random age assigned
// - a list of what they like
// - an image
// good with kids
// good with dogs
// good with other cats


function Kitten(theKittenName, theKittenBreed, likes, image, goodWithKids, goodWithDogs, goodWithCats) {
  this.name = theKittenName;
  this.breed = theKittenBreed;
  this.likes = likes;
  this.image = image;
  this.goodWithCats = goodWithCats;
  this.goodWithDogs = goodWithDogs;
  this.goodWithKids = goodWithKids;
  this.age = 0;
  this.assignRandomAge();
}

Kitten.prototype.assignRandomAge = function() {
  var randomAge = Math.ceil(Math.random() * 12);
  this.age = randomAge;
}

Kitten.prototype.render = function() {

  var container = document.getElementById('kittenProfiles')
  var article = document.createElement('article');
  container.appendChild(article);

  var h2 = document.createElement('h2');
  article.appendChild(h2);
  h2.textContent = this.name;

  var p = document.createElement('p');
  article.appendChild(p);
  p.textContent = `${this.name} is adorable and is ${this.age} months old`;

  // do the list
  var likesList = document.createElement('ul');
  article.appendChild(likesList);

  for(var i = 0; i < this.likes.length; i++) {
    var like = this.likes[i];
    var listItem = document.createElement('li');
    likesList.appendChild(listItem);
    listItem.textContent = like;
  }
  

  // do the table
  var table = document.createElement('table');
  article.appendChild(table);

  // header row
  var headerRow = document.createElement('tr');
  table.appendChild(headerRow);

  var kidsHeader = document.createElement('th');
  headerRow.appendChild(kidsHeader);
  kidsHeader.textContent = 'Good with kids';

  var dogsHeader = document.createElement('th');
  headerRow.appendChild(dogsHeader);
  dogsHeader.textContent = 'Good with dogs';

  var catsHeader = document.createElement('th');
  headerRow.appendChild(catsHeader);
  catsHeader.textContent = 'Good with other cats';


  var dataRow = document.createElement('tr');
  table.appendChild(dataRow);

  var kidsData = document.createElement('td');
  dataRow.appendChild(kidsData);
  kidsData.textContent = this.goodWithKids;

  var dogsData = document.createElement('td');
  dataRow.appendChild(dogsData);
  dogsData.textContent = this.goodWithDogs;

  var catsData = document.createElement('td');
  dataRow.appendChild(catsData);
  catsData.textContent = this.goodWithCats;

  // do the image
  var img = document.createElement('img');
  article.appendChild(img);
  img.setAttribute('src', this.image);
}

var frankie = new Kitten('Frankie','himalayan',['fish','birds'], 'images/frankie.jpeg', true, false, false);

var serena = new Kitten('Serena','persian',['napping','staring'], 'images/serena.jpeg', true, false, true);

// store all kittens, notice last kitten was not first stored in a variable
var kittens = [serena, frankie, new Kitten('Jumper','siamese',['jumping','hopping'], 'images/jumper.jpeg', true, true, true)];

for(var i = 0; i < kittens.length; i++) {
  kittens[i].render();
}


/*

// Advanced topic - Inheritance

function Pet() {}

Pet.prototype.describe = function() {
  return `${this.name} is adorable and is ${this.age} months old`; // alternate style of string creation
}

Kitten.prototype = new Pet();
*/

