var randomNumber1 = Math.floor(Math.random() * 6 )+1; //for dice number 1-6
var randomImage = "dice"+randomNumber1+".png"; //image according to number
var randomImgSrc = "./images/"+randomImage; // source of the file
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" , randomImgSrc);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImgSrc2 = "./images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src" , randomImgSrc2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = " 🚩 player 1 Wins!"
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!"
}
else {
    document.querySelector("h1").innerHTML = "It's a Draw!!!"
}