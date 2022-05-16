var randomPicture1= Math.floor(Math.random() * 3) + 1; //First we make a variable in order to get the random set of the images
var randomPicture2= Math.floor(Math.random() * 3) + 1; //Same as here for the set of images 

var randomImage1 = `images/rsp${randomPicture1}.jpg`; //Another variable for calling the images for the first 2 lines
var randomImage2 = `images/rsp${randomPicture2}.jpg`; //Same as here for the 2nd image

var image1 = document.querySelectorAll('img')[0]; //We will now make a image variable for the 1st image that will output
var image2 = document.querySelectorAll('img')[1]; //And this is for the 2nd image to output

image1.setAttribute('src', randomImage1); //This will randomize the 1st image we have
image2.setAttribute('src', randomImage2); //This is for the 2nd image

var rock = 'images/rsp1.jpg'; //This will be the 1st image 
var scissors = 'images/rsp2.jpg'; //This will be the 2nd image
var paper = 'images/rsp3.jpg'; //This will be the 3rd image


//ROCK
if (randomImage1 === rock && randomImage2 === scissors) { //I indicated the images for easier work for choosing the winner in rock and scissors
    document.querySelector('h1').textContent = "🪨ROCK WINS!"; //This will change the header to ROCK WINS! 
    document.querySelector('.p1').textContent = "⭕PLAYER 1 WINS!"; //In this the p1 text will be changed to player 1 wins!
    document.querySelector('.p2').textContent = "❌PLAYER 2 LOSE!"; //In this the p2 text will be changed to player 2 lose!
    document.querySelector('.p2').style.textDecoration='line-through'; //This will make the p2 or the lossing side to have a strikethrough text in order to know easily who lose
}
else if (randomImage1 === scissors && randomImage2 === rock) { //This is same as the rock and scissors in choosing the winner
    document.querySelector('h1').textContent = "🪨ROCK WINS!"; //Same as here for changing the header to rock wins!
    document.querySelector('.p1').textContent = "❌PLAYER 1 LOSE!"; //As player 1 loses, the p1 text will be changed to player 1 lose!
    document.querySelector('.p1').style.textDecoration='line-through'; //And p1 text will have a strikethrough in order to indicate player 1 loses
    document.querySelector('.p2').textContent = "⭕PLAYER 2 WINS!"; //And here the p2 text will be changed as player 2 wins!
}
//SCISSORS
else if (randomImage1 === scissors && randomImage2 === paper) { //Same as rock and scissors, this will indicate who will be the winner between scissors and paper
    document.querySelector('h1').textContent = "✂️SCISSORS WINS!"; //This will change the header to scissors wins! 
    document.querySelector('.p1').textContent = "⭕PLAYER 1 WINS!"; //In this the p1 text will be changed to player 1 wins!
    document.querySelector('.p2').textContent = "❌PLAYER 2 LOSE!"; //In this the p2 text will be changed to player 2 lose!
    document.querySelector('.p2').style.textDecoration='line-through'; //This also will add a strikethrough to the p2 text
}
else if (randomImage1 === paper && randomImage2 === scissors) { //This is same as the rock and scissors in choosing the winner
    document.querySelector('h1').textContent = "✂️SCISSORS WINS!"; //Same as here This will change the header to scissors wins! 
    document.querySelector('.p1').textContent = "❌PLAYER 1 LOSE!"; //As player 1 loses, the p1 text will be changed to player 1 lose!
    document.querySelector('.p1').style.textDecoration='line-through'; //And p1 text will have a strikethrough in order to indicate player 1 loses
    document.querySelector('.p2').textContent = "⭕PLAYER 2 WINS!"; //And here the p2 text will be changed as player 2 wins!
}
//PAPER
else if (randomImage1 === paper  && randomImage2 === rock) { //Same as rock and scissors, this will indicate who will be the winner between paper and rock
    document.querySelector('h1').textContent = "📝PAPER WINS!"; //This will change the header to paper wins!
    document.querySelector('.p1').textContent = "⭕PLAYER 1 WINS!"; //In this the p1 text will be changed to player 1 wins!
    document.querySelector('.p2').textContent = "❌PLAYER 2 LOSE!"; //In this the p2 text will be changed to player 2 lose!
    document.querySelector('.p2').style.textDecoration='line-through'; //This also will add a strikethrough to the p2 text
}
else if (randomImage1 === rock  && randomImage2 === paper) { //This is same as the rock and scissors in choosing the winner
    document.querySelector('h1').textContent = "📝PAPER WINS!"; //Same as here This will change the header to paper wins! 
    document.querySelector('.p1').textContent = "❌PLAYER 1 LOSE!"; //As player 1 loses, the p1 text will be changed to player 1 lose!
    document.querySelector('.p1').style.textDecoration='line-through'; //And p1 text will have a strikethrough in order to indicate player 1 loses
    document.querySelector('.p2').textContent = "⭕PLAYER 2 WINS!"; //And here the p2 text will be changed as player 2 wins!
}


else { //Any output that the random image generated, this is where it will end up
    document.querySelector('h1').textContent = "TRY AGAIN!"; //This will output as a tie in any rock, paper nor scissors 
}

function refresh(){ //This will be the function of the button when clicked
    window.location.reload("Refresh") //This is where the reload button on the site be triggered
  }