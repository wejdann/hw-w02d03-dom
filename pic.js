/* const eventType = 'click';
const myButton = document.querySelector('#randomize');
const myCallback = function(event) {
    console.log('The button was clicked!', event);
  }
  myButton.addEventListener('click', myCallback);
///start 
 //vra newPic = document.createElement('img');
 function selectImage() {
    var x = math.floor((Math.random()*6)+1);
    document.getElementById(".image").innerHTML=<img src="img/random${x}.jpeg" >;
}; */


function display_random_image() 
{
     var theImages = [{
        src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
        width: "240",
        height: "160"
    }, {
        src: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
        width: "320",
        height: "195"
    }, {
        src: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
        width: "500",
        height: "343"
    }];
    
    var preBuffer = [];
    for (var i = 0, j = theImages.length; i < j; i++) {
        preBuffer[i] = new Image();
        preBuffer[i].src = theImages[i].src;
        preBuffer[i].width = theImages[i].width;
        preBuffer[i].height = theImages[i].height;
    }
   
  function getRandomInt(min,max) 
    {
    
imn = Math.floor(Math.random() * (max - min + 1)) + min;
    return preBuffer[imn];
    }  

  
var newImage = getRandomInt(0, preBuffer.length - 1);
 
var images = document.getElementsByTagName('img');
var l = images.length;
for (var p = 0; p < l; p++) {
    images[0].parentNode.removeChild(images[0]);
}
document.body.appendChild(newImage);
}
