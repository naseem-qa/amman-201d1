'use strict'; // thanks Tazneem

// You can define hours array like this...
// var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

// or this...


/* 
  Covert 24 hour clock hour to 12 hour clock 
  Just handles the whole hour, make it fancier to handle minutes too if you like
*/
function twentyFourToTwelve(hour24) {

  if (hour24 == 24) {
    return '12am';
  } else if (hour24 == 12) {
    return '12pm';
  } else if (hour24 < 12) {
    return hour24 + 'am';
  } else {
    return (hour24 - 12) + 'pm';
  }
}

var hours = [];

for (var i = 6; i <= 19; i++) {
  hours.push(twentyFourToTwelve(i));
}



// create shop objects
var seattle = {
  location: 'Seattle',
  min: 23,
  max: 65,
  avgSale: 6.3,
  hourlySales: [],
  dailySales: 0,

  getRandomCustomerCount: function () {

    var range = this.max - this.min;

    var randomCount = Math.random() * range + this.min;

    return Math.ceil(randomCount);
  },

  generateHourlySales: function () {

    for (var i = 0; i < hours.length; i++) {

      var cookiesSoldThisHour = Math.ceil(this.getRandomCustomerCount() * this.avgSale);

      this.hourlySales.push(cookiesSoldThisHour);

      this.dailySales += cookiesSoldThisHour;
    }
  },

  render: function() {

    var container = document.getElementById('content-area');

    var h2 = document.createElement('h2');
    container.appendChild(h2);
    h2.textContent = this.location;

    var ul = document.createElement('ul');
    container.appendChild(ul);


    for(var i = 0; i < hours.length; i++) {

      var li = document.createElement('li');
      ul.appendChild(li);

      var salesInfo = hours[i] + ': ' + this.hourlySales[i] + ' cookies';

      li.textContent = salesInfo;

    }

    var li = document.createElement('li');
    li.textContent = 'Total: ' + this.dailySales + ' cookies';
    ul.appendChild(li);

  },
}

var dubai = {
  location: 'Dubai',
  min: 11,
  max: 38,
  avgSale: 3.7,
  hourlySales: [],
  dailySales: 0,

  getRandomCustomerCount: function () {

    var range = this.max - this.min;

    var randomCount = Math.random() * range + this.min;

    return Math.ceil(randomCount);
  },

  generateHourlySales: function () {

    for (var i = 0; i < hours.length; i++) {

      var cookiesSoldThisHour = Math.ceil(this.getRandomCustomerCount() * this.avgSale);

      this.hourlySales.push(cookiesSoldThisHour);

      this.dailySales += cookiesSoldThisHour;
    }
  },

  render: function() {

    var container = document.getElementById('content-area');

    var h2 = document.createElement('h2');
    container.appendChild(h2);
    h2.textContent = this.location;

    var ul = document.createElement('ul');
    container.appendChild(ul);


    for(var i = 0; i < hours.length; i++) {

      var li = document.createElement('li');
      ul.appendChild(li);

      var salesInfo = hours[i] + ': ' + this.hourlySales[i] + ' cookies';

      li.textContent = salesInfo;

    }

    var li = document.createElement('li');
    li.textContent = 'Total: ' + this.dailySales + ' cookies';
    ul.appendChild(li);

  },
}

var shops = [seattle, dubai]; // add more shops when ready

for (var i = 0; i < shops.length; i++) {
  var shop = shops[i];
  shop.generateHourlySales();
  shop.render();
}





