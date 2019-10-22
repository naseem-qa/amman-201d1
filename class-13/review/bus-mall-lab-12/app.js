function SurveyForBusMall(name, filePath) {
    this.name = name;
    this.filePath = filePath;
    this.clickCtr = 0;
    this.shownCtr = 0;
    SurveyForBusMall.all.push(this);
}
SurveyForBusMall.roundCtr = 0;
SurveyForBusMall.roundLimit = 25;


SurveyForBusMall.all = [];
SurveyForBusMall.container = document.getElementById('SurveyForBusMall-container');

SurveyForBusMall.leftImage = document.getElementById('left-busMall-image');
SurveyForBusMall.centerImage = document.getElementById('center-busMall-image');
SurveyForBusMall.rightImage = document.getElementById('right-busMall-image');

SurveyForBusMall.leftName = document.getElementById('left-busMall-name');
SurveyForBusMall.centerName = document.getElementById('center-busMall-name');
SurveyForBusMall.rightName = document.getElementById('right-busMall-name');

SurveyForBusMall.leftObject = null;
SurveyForBusMall.centerObject = null;
SurveyForBusMall.rightObject = null;


new SurveyForBusMall('bathroom', 'img/bathroom.jpg');
new SurveyForBusMall('boots', 'img/boots.jpg');
new SurveyForBusMall('breakfast', 'img/breakfast.jpg');
new SurveyForBusMall('bubblegum', 'img/bubblegum.jpg');
new SurveyForBusMall('chair', 'img/chair.jpg');
new SurveyForBusMall('cthulhu', 'img/cthulhu.jpg');
new SurveyForBusMall('dog-duck', 'img/dog-duck.jpg');
new SurveyForBusMall('dragon', 'img/dragon.jpg');
new SurveyForBusMall('pen', 'img/pen.jpg');
new SurveyForBusMall('pet-sweep', 'img/pet-sweep.jpg');
new SurveyForBusMall('scissors', 'img/scissors.jpg');
new SurveyForBusMall('shark', 'img/shark.jpg');
new SurveyForBusMall('sweep', 'img/sweep.png');
new SurveyForBusMall('tauntaun', 'img/tauntaun.jpg');
new SurveyForBusMall('unicorn', 'img/unicorn.jpg');
new SurveyForBusMall('usb', 'img/usb.gif');
new SurveyForBusMall('water-can', 'img/water-can.jpg');
new SurveyForBusMall('wine-glass', 'img/wine-glass.jpg');
new SurveyForBusMall('bag', 'img/bag.jpg');
new SurveyForBusMall('banana', 'img/banana.jpg');



function renderNewPhoto() {

    // ensure that previous  not shown on next round
    var forbidden = [SurveyForBusMall.leftObject, SurveyForBusMall.centerObject, SurveyForBusMall.rightobject];

    do {

        SurveyForBusMall.leftObject = getRandomphoto();

    } while (forbidden.includes(SurveyForBusMall.leftObject))

    //  don't double up
    forbidden.push(SurveyForBusMall.leftObject);
    do {
        SurveyForBusMall.centerObject = getRandomphoto();

    } while (forbidden.includes(SurveyForBusMall.centerObject))
    forbidden.push(SurveyForBusMall.centerObject);

    do {
        SurveyForBusMall.rightObject = getRandomphoto();

    } while (forbidden.includes(SurveyForBusMall.rightObject));

    SurveyForBusMall.leftObject.shownCtr++;
    SurveyForBusMall.centerObject.shownCtr++;
    SurveyForBusMall.rightObject.shownCtr++;

    var leftPhotoImageElement = SurveyForBusMall.leftImage;
    var centerPhotoImageElement = SurveyForBusMall.centerImage;
    var rightPhotoImageElement = SurveyForBusMall.rightImage;


    leftPhotoImageElement.setAttribute('src', SurveyForBusMall.leftObject.filePath);
    leftPhotoImageElement.setAttribute('alt', SurveyForBusMall.leftObject.name);



    centerPhotoImageElement.setAttribute('src', SurveyForBusMall.centerObject.filePath);
    centerPhotoImageElement.setAttribute('alt', SurveyForBusMall.centerObject.name);

    rightPhotoImageElement.setAttribute('src', SurveyForBusMall.rightObject.filePath);
    rightPhotoImageElement.setAttribute('alt', SurveyForBusMall.rightObject.name);

    SurveyForBusMall.leftName.textContent = SurveyForBusMall.leftObject.name;
    SurveyForBusMall.centerName.textContent = SurveyForBusMall.centerObject.name;
    SurveyForBusMall.rightName.textContent = SurveyForBusMall.rightObject.name;
}

// Cannot read property 'name' of undefined

function getRandomphoto() {
    var index = Math.floor(Math.random() * SurveyForBusMall.all.length);
    return SurveyForBusMall.all[index];
}


function addElement(tag, container, text) {
    var element = document.createElement(tag);
    container.appendChild(element);
    if (text) {
        element.textContent = text;
    }
    return element;
}

function renderSentences() {

    var container = document.getElementById('report-sentences');

    for (var i = 0; i < SurveyForBusMall.all.length; i++) {
        var currentProduct = SurveyForBusMall.all[i];
        var sentence = currentProduct.name + ' had ' + currentProduct.clickCtr + ' votes and was shown ' + currentProduct.shownCtr + ' times.';
        console.log('sentence : ', sentence);
        addElement('li', container, sentence);
    }
}





function clickHandler(event) {

    var clickedId = event.target.id;
    var clickedId = event.target.id;
    var productClicked;

    if (clickedId === 'left-busMall-image') {
        productClicked = SurveyForBusMall.leftObject;
    }
    else if (clickedId === 'center-busMall-image') {
        productClicked = SurveyForBusMall.centerObject;

    }
    else if (clickedId === 'right-busMall-image') {
        productClicked = SurveyForBusMall.rightObject;
    } else {
        console.log(clickedId);
    }

    if (productClicked) {
        productClicked.clickCtr++;
        SurveyForBusMall.roundCtr++;

        if (SurveyForBusMall.roundCtr === SurveyForBusMall.roundLimit) {

            alert('No more clicking for you!');

            SurveyForBusMall.container.removeEventListener('click', clickHandler);

            renderSentences();

            renderChart();

        } else {

            renderNewPhoto();
        }
    }
}
SurveyForBusMall.container.addEventListener('click', clickHandler);

renderNewPhoto();

function makeAproductChart() {

    var productNamesArray = [];
    var productLikesArray = [];

    for (var i = 0; i < SurveyForBusMall.length; i++) {
        var singlepictureName = SurveyForBusMall[i].name;
        productNamesArray.push(singlepictureName);
    }

    for (var i = 0; i < SurveyForBusMall.length; i++) {
        var singlePictureLikes = SurveyForBusMall.clicks;
        productLikesArray.push(singlePictureLikes);
    }
}

function renderChart() {

    // Modified from https://jsfiddle.net/nagix/bL8hpk6n/

    var productNames = [];
    var productClicks = [];
    var productShown = [];

    for(var i = 0; i < SurveyForBusMall.all.length; i++) {
        var currentProduct = SurveyForBusMall.all[i];
        productNames.push(currentProduct.name);
        productClicks.push(currentProduct.clickCtr);
        productShown.push(currentProduct.shownCtr);

    }

    var data = {
        labels: productNames,
        datasets: [{
          label: "Clicked",
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderWidth: 1,
          data: productClicks,
          xAxisID: "bar-x-axis1",
        }, {
          label: "Shown",
          backgroundColor: 'rgba(255, 206, 86, 0.2)',
          borderWidth: 1,
          data: productShown,
          xAxisID: "bar-x-axis2",
        }]
      };
      
      var options = {
        scales: {
          xAxes: [{
            stacked: true,
            id: "bar-x-axis1",
            barThickness: 20,
          }, {
            display: false,
            stacked: true,
            id: "bar-x-axis2",
            barThickness: 40,
            // these are needed because the bar controller defaults set only the first x axis properties
            type: 'category',
            categoryPercentage: 0.8,
            barPercentage: 0.9,
            gridLines: {
              offsetGridLines: true
            },
            offset: true
          }],
          yAxes: [{
            stacked: false,
            ticks: {
              beginAtZero: true
            },
          }]
      
        }
      };
      
      var ctx = document.getElementById("chart").getContext("2d");
      var myBarChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
      });



}


