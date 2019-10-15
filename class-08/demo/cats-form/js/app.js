'use strict';

function Kitten(name, breed,coatColor, interests, isGoodWithKids, isGoodWithDogs, isGoodWithOtherCats){
    this.name = name;
    this.breed = breed;
    this.coatColor = coatColor;
    this.interests = interests;
    this.isGoodWithKids = isGoodWithKids;
    this.isGoodWithDogs = isGoodWithDogs;
    this.isGoodWithOtherCats = isGoodWithOtherCats;
}

var kittenForm = document.getElementById("addKittenForm");

kittenForm.addEventListener('submit',function(event) {
    event.preventDefault();
    var name = event.target.name.value;
    // console.log(event.target.name);
    // console.log(name);
    var breed = event.target.breed.value;
    // console.log(breed);
    var coatColor = event.target.coatColor.value;
    var interests = event.target.interests.value;
    interests = interests.split(',');
    // console.log(interests);
    var isGoodWithDogs = event.target.isGoodWithDogs.checked;
    var isGoodWithKids = event.target.isGoodWithKids.checked;
    var isGoodWithOtherCats = event.target.isGoodWithOtherCats.checked;

    var newKitten = new Kitten(name, breed, coatColor, interests, isGoodWithKids, isGoodWithDogs, isGoodWithOtherCats);
    console.log(newKitten);
    newKitten.getAge();
    newKitten.render();
}
);

Kitten.prototype.getAge= function (){
    return randomeAge(3,12) + ' months old';
};

function randomeAge (min, max){
    var random = Math.floor(Math.random() * (max-min+1)+min );
    console.log(random);
    return random;
}

Kitten.prototype.render = function() {
    var parentElement = document.getElementById("kittensProfile");

    var article = document.createElement('article');
    parentElement.appendChild(article);

    var h2 = document.createElement('h2');
    h2.textContent = this.name;
    article.appendChild(h2);

    var p = document.createElement('p');
    article.appendChild(p);
    p.textContent = this.name + ' is adorable, and is ' + this.getAge();

    var ul = document.createElement('ul');
    article.appendChild(ul);

    for (var i=0; i<this.interests.length ;i++ ){
        var li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = this.interests[i];
    }

    var table = document.createElement('table');
    article.appendChild(table);
    
    var row1 = document.createElement('tr');
    table.appendChild(row1);
    var row2 = document.createElement('tr');
    table.appendChild(row2);

    var th1 = document.createElement('th');
    row1.appendChild(th1);
    th1.textContent = 'Good with kids';

    var th2 = document.createElement('th');
    row1.appendChild(th2);
    th2.textContent = 'Good with Dogs';

    var th3 = document.createElement('th');
    row1.appendChild(th3);
    th3.textContent = 'Good with other cats';

    var td1 = document.createElement('td');
    row2.appendChild(td1);
    td1.textContent = this.isGoodWithKids;

    var td2 = document.createElement('td');
    row2.appendChild(td2);
    td2.textContent = this.isGoodWithDogs;

    var td3 = document.createElement('td');
    row2.appendChild(td3);
    td3.textContent = this.isGoodWithOtherCats;

    var img = document.createElement('img');
    img.setAttribute('src', 'images/' + this.name+'.jpeg');
    article.appendChild(img);

};



