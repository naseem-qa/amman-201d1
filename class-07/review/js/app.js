// You can define hours array like this...
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

// or this...


// /* 
//   Covert 24 hour clock hour to 12 hour clock 
//   Just handles the whole hour, make it fancier to handle minutes too if you like
// */
// function twentyFourToTwelve(hour24) {

//   if (hour24 == 24) {
//     return '12am';
//   } else if (hour24 == 12) {
//     return '12pm';
//   } else if (hour24 < 12) {
//     return hour24 + 'am';
//   } else {
//     return (hour24 - 12) + 'pm';
//   }
// }

// var hours = [];

// for (i = 6; i <= 19; i++) {
//   hours.push(twentyFourToTwelve(i));
// }



// create shop objects
var seattle = {
  min: 23,
  max: 65,
  avgSale: 6.3,
  hourlySales: [],
  dailySales: 0,

  getRandomCustomerCount: function () {

    var range = this.max = this.min;

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

  render: function () {
    var container = document.getElementById('content-area');
    var h2 = document.createElement('h2');
    h2.textContent = 'Seattle', //NOTE: this only part that is location specific. Shall we add a location property to object???
      container.appendChild(h2);
    var list = document.createElement('ul');
    var totalCookies = 0;
    container.appendChild(list);
    for (var i = 0; i < this.hourlySales.length; i++) {
      var listItem = document.createElement('li');
      listItem.textContent = hours[i] + ': ' + this.hourlySales[i] + ' cookies';
      list.appendChild(listItem);
    }

    var listItem = document.createElement('li');
    listItem.textContent = 'Total: ' + this.dailySales + ' cookies';
    list.appendChild(listItem);
  }
}

seattle.generateHourlySales();
seattle.render();

// var shops = [seattle]; // add more shops when ready

// for (var i = 0; i < shops.length; i++) {
//   var shop = shops[i];
//   shop.generateDailySales();
//   shop.render();
// }





