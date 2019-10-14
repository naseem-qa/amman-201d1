'use strict';

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

function CookieShop(location, min, max, avgSale) {
  this.location = location;
  this.min = min;
  this.max = max;
  this.avgSale = avgSale;
  this.hourlySales = [];
  this.dailySales = 0;
  this.generateHourlySales();
}

CookieShop.prototype.getRandomCustomerCount = function () {

  var range = this.max - this.min;

  var randomCount = Math.random() * range + this.min;

  return Math.ceil(randomCount);
}

CookieShop.prototype.generateHourlySales = function () {

  for (var i = 0; i < hours.length; i++) {

    var cookiesSoldThisHour = Math.ceil(this.getRandomCustomerCount() * this.avgSale);

    this.hourlySales.push(cookiesSoldThisHour);

    this.dailySales += cookiesSoldThisHour;
  }
}

CookieShop.prototype.render = function (table) {

  var tr = document.createElement('tr');
  table.appendChild(tr);
  
  var td = document.createElement('td');
  tr.appendChild(td);
  td.textContent = this.location;

  for (var i = 0; i < hours.length; i++) {

    td = document.createElement('td');

    tr.appendChild(td);

    td.textContent = this.hourlySales[i];
  }

  td = document.createElement('td');
  tr.appendChild(td);
  td.textContent = this.dailySales;
}

// stand-alone function for header row
function renderHeaderRow(table) {

  var tr = document.createElement('tr');
  
  table.appendChild(tr);

  var th = document.createElement('th');

  tr.appendChild(th); // no text content for first one

  for(var i = 0; i < hours.length; i++) {

    th = document.createElement('th');
    tr.appendChild(th);
    th.textContent = hours[i];
  }

  th = document.createElement('th');
  tr.appendChild(th);
  th.textContent = 'Daily Location Total';

}

// stand-alone function for footer row
function renderFooterRow(table) {

  var tr = document.createElement('tr');
  
  table.appendChild(tr);

  var td = document.createElement('td');
  
  tr.appendChild(td);
  
  td.textContent = 'Totals';

  var megaTotal = 0;

  for (var hourIndex = 0; hourIndex < hours.length; hourIndex++) {
    
    td = document.createElement('td');
    
    tr.appendChild(td);

    var sum = 0;

    for (var shopIndex = 0; shopIndex < shops.length; shopIndex++) {

      var shop = shops[shopIndex];
      
      sum += shop.hourlySales[hourIndex];
    }
    
    td.textContent = sum;

    megaTotal += sum;
  }

  td = document.createElement('td');
  
  tr.appendChild(td);
  
  td.textContent = megaTotal;
}

var seattle = new CookieShop('Seattle',23, 65, 6.5);
var dubai = new CookieShop('Dubai',11, 38, 3.7);

var shops = [seattle, dubai]; // add more shops when ready


var container = document.getElementById('content-area');

var table = document.createElement('table');

container.appendChild(table);

renderHeaderRow(table);

for (var i = 0; i < shops.length; i++) {
  
  var shop = shops[i];

  shop.render(table);
}

renderFooterRow(table);





