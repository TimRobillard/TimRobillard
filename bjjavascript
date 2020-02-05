//var newP = $("<p>");
//newP.text("Hello World");
//$(".test").append(newP);
//var newS = $("<p>");
//newS.text("Hello World");
//$(".test").append(newS);

var deckArray = [
  {
    "image": "assets/AC.png",
    "value": 11
  },
  {
    "image": "assets/2C.png",
    "value": 2
  },
  {
    "image": "assets/3C.png",
    "value": 3
  },
  {
    "image": "assets/4C.png",
    "value": 4
  },
  {
    "image": "assets/5C.png",
    "value": 5
  },
  {
    "image": "assets/6C.png",
    "value": 6
  },
  {
    "image": "assets/7C.png",
    "value": 7
  },
  {
    "image": "assets/8C.png",
    "value": 8
  },
  {
    "image": "assets/9C.png",
    "value": 9
  },
  {
    "image": "assets/10C.png",
    "value": 10
  },
  {
    "image": "assets/JC.png",
    "value": 10
  },
  {
    "image": "assets/QC.png",
    "value": 10
  },
  {
    "image": "assets/KC.png",
    "value": 10
  },
  {
    "image": "assets/AD.png",
    "value": 11
  },
  {
    "image": "assets/2D.png",
    "value": 2
  },
  {
    "image": "assets/3D.png",
    "value": 3
  },
  {
    "image": "assets/4D.png",
    "value": 4
  },
  {
    "image": "assets/5D.png",
    "value": 5
  },
  {
    "image": "assets/6D.png",
    "value": 6
  },
  {
    "image": "assets/7D.png",
    "value": 7
  },
  {
    "image": "assets/8D.png",
    "value": 8
  },
  {
    "image": "assets/9D.png",
    "value": 9
  },
  {
    "image": "assets/10D.png",
    "value": 10
  },
  {
    "image": "assets/JD.png",
    "value": 10
  },
  {
    "image": "assets/QD.png",
    "value": 10
  },
  {
    "image": "assets/KD.png",
    "value": 10
  },
  {
    "image": "assets/AH.png",
    "value": 11
  },
  {
    "image": "assets/2H.png",
    "value": 2
  },
  {
    "image": "assets/3H.png",
    "value": 3
  },
  {
    "image": "assets/4H.png",
    "value": 4
  },
  {
    "image": "assets/5H.png",
    "value": 5
  },
  {
    "image": "assets/6H.png",
    "value": 6
  },
  {
    "image": "assets/7H.png",
    "value": 7
  },
  {
    "image": "assets/8H.png",
    "value": 8
  },
  {
    "image": "assets/9H.png",
    "value": 9
  },
  {
    "image": "assets/10H.png",
    "value": 10
  },
  {
    "image": "assets/JH.png",
    "value": 10
  },
  {
    "image": "assets/QH.png",
    "value": 10
  },
  {
    "image": "assets/KH.png",
    "value": 10
  },
  {
    "image": "assets/AS.png",
    "value": 11
  },
  {
    "image": "assets/2S.png",
    "value": 2
  },
  {
    "image": "assets/3S.png",
    "value": 3
  },
  {
    "image": "assets/4S.png",
    "value": 4
  },
  {
    "image": "assets/5S.png",
    "value": 5
  },
  {
    "image": "assets/6S.png",
    "value": 6
  },
  {
    "image": "assets/7S.png",
    "value": 7
  },
  {
    "image": "assets/8S.png",
    "value": 8
  },
  {
    "image": "assets/9S.png",
    "value": 9
  },
  {
    "image": "assets/10S.png",
    "value": 10
  },
  {
    "image": "assets/JS.png",
    "value": 10
  },
  {
    "image": "assets/QS.png",
    "value": 10
  },
  {
    "image": "assets/KS.png",
    "value": 10
  }

];

function NewGame() {
  dealer1 = Deal();
  dealer2 = Deal();
  player1 = Deal();
  player2 = Deal();
  DisplayCard(dealer1.image, ".dealer");
  Facedown();
  DisplayCard(player1.image, ".player");
  DisplayCard(player2.image, ".player");
  dealerScore = dealer1.value + dealer2.value;
  playerScore = player1.value + player2.value;

  if (dealerScore === 21)
    DealerBlackJack();
  if (playerScore === 21)
    BlackJack();
}

function Deal() {
  var len = deck.length;
  var ind = Math.floor(Math.random() * len);
  var card = deck[ind];
  deck.splice(ind, 1);
  return card;
}

function DisplayCard(card, div) {
  var cardToDisplay = $("<img class='card'>");
  cardToDisplay.attr("src", card);
  $(div).append(cardToDisplay);
}

function DisplayScore() {
  $(".dealerScore").text("Score: " + dealerScore);
  $(".playerScore").text("Score: " + playerScore);

}

function Facedown() {
  var cardToDisplay = $("<img class='facedownCard'>");
  cardToDisplay.attr("src", "Assets/FD.png");
  $(".dealer").append(cardToDisplay);
}

function FlipDealerCard() {
  $(".facedownCard").css("display", "none");
  DisplayCard(dealer2.image, ".dealer");
  $(".dealerScore").css("color", "#ffffff");
}

function Hit() {
  if (!gameOver) {
    var card = Deal();
    DisplayCard(card.image, ".player");
    playerScore += card.value;
    DisplayScore();
    if (playerScore > 21)
      Bust();
  }
}

function Hold() {
  if (!gameOver) {
    FlipDealerCard();
    for (var i = 0; i < 10; i++) {
      if (dealerScore > 16)
        break;
      else {
        var card = Deal();
        var test = 0;
        DisplayCard(card.image, ".dealer");
        dealerScore += card.value;
        DisplayScore();
      }
    }
    DisplayWinner();
    gameOver = true;
  }
}

function BlackJack() {
  setTimeout(function () {
    Message("YOU GOT BLACKJACK! HOORAY!!")
  }, 500);
  gameOver = true;
}

function DealerBlackJack() {
  setTimeout(FlipDealerCard(), 500);
  setTimeout(function () {
    Message("Dealer got BLACKJACK!!")
  }, 100);
  gameOver = true;
}

function Bust() {
  FlipDealerCard();
  setTimeout(function () {
    Message("BUST!");
  }, 100);
  gameOver = true;
}

function Message(str) {
  $(".messageText").text(str);
  $(".messageText").css("color", "green");
  var button = $("<div>")
  button.html("<button onclick='window.location.reload()'>PLAY AGAIN?</button>");
  $(".message").append(button);
}

function DisplayWinner() {
  if (dealerScore > 21)
    setTimeout(function () {
      Message("DEALER BUSTS, YOU WIN!")
    }, 500);
  else if (playerScore > dealerScore)
    setTimeout(function () {
      Message("YOU WIN!")
    }, 500);
  else if (dealerScore < 22 && dealerScore > playerScore)
    setTimeout(function () {
      Message("YOU LOSE!")
    }, 500);
  else
    setTimeout(function () {
      Message("SPLIT!")
    }, 500);
}


// #############################################################

var deck = deckArray
var dealerScore = 0;
var playerScore = 0;
var dealer1 = {};
var dealer2 = {};
var player1 = {};
var player2 = {};
var gameOver = false;

NewGame();
DisplayScore();
