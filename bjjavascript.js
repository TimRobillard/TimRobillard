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

//######## Functions #########

function NewGame() {
  if (gameOver) {
    ClearTable();
    deck = [...deckArray];
    gameOver = false;
    Deal(player, ".playerInit", "up");
    Deal(dealer, ".dealerInit", "up");
    Deal(player, ".playerInit", "up");
    Deal(dealer, ".dealerInit", "down");

    if (BlackJack(dealer) && BlackJack(player)) {
      FlipDealerCard();
      gameOver = true;
      Message("SPLIT");
    } else if (BlackJack(dealer)) {
      FlipDealerCard();
      gameOver = true;
      Message("DEALER GOT BLACKJACK!");
    } else if (BlackJack(player)) {
      FlipDealerCard();
      gameOver = true;
      Message("YOU GOT BLACKJACK!");
    }
    DisplayScore();
  }
}


function Deal(who, where, face) {
  var len = deck.length;
  var ind = Math.floor(Math.random() * len);
  var card = deck[ind];
  deck.splice(ind, 1);
  if (card.value === 11)
    who.aces++;
  if (face === "down") {
    faceDownCard = card;
    var cardToDisplay = $("<img class = 'card'>");
    cardToDisplay.attr('src', 'assets/FD.png');
    $(where).append(cardToDisplay);
  } else {
    var cardToDisplay = $("<img class = 'card'>");
    cardToDisplay.attr('src', card.image);
    $(where).append(cardToDisplay);
  }
  who.score += card.value;
  if (who.score > 21 && who.aces > 0) {
    who.score -= 10;
    who.aces--;
  }

}

function HitMe() {
  if (!gameOver) {
    var card = Deal(player, ".player", "up");
    DisplayScore();
    if (player.score > 21) {
      Bust();
    }
  }
}

function Stand() {
  if (!gameOver) {
    FlipDealerCard();
    gameOver = true;
    while (dealer.score < 17) {
      Deal(dealer, ".dealer", "up");
      DisplayScore();
      window.setTimeout(function() {return 1+1}, 2000);
      
    }
    if (dealer.score > 21) {
      Message("DEALER BUSTS! YOU WIN");
    } else {
      DisplayWinner();
    }
  }
}

function BlackJack(who) {
  if (who.score === 21)
    return true;
  else
    return false;
}

function Bust() {
  Message("PLAYER BUSTED");
  FlipDealerCard();
  gameOver = true;
}

function FlipDealerCard() {
  $(".dealerInit .card:last-child").remove();
    var cardToDisplay = $("<img class = 'card'>");
    cardToDisplay.attr('src', faceDownCard.image);
    $(".dealerInit").append(cardToDisplay);
    $(".dealerScore").css("color", "#ffffff");
}

function DisplayScore() {
  $(".dealerScore").text("SCORE: " + dealer.score);
  $(".playerScore").text("SCORE: " + player.score);
}

function DisplayWinner() {
  if (player.score > dealer.score) {
    Message("YOU WIN");
  } else if (player.score === dealer.score) {
    Message("PUSH");
  } else {
    Message("YOU LOSE");
  }

}

function ClearTable() {
  $(".dealerInit .card").remove();
  $(".playerInit .card").remove();
  $(".dealer .card").remove();
  $(".player .card").remove();
  $(".messageText").text("");
  $(".message .newGameBtn").remove();
  $(".dealerScore").css("color", "rgba(0,0,0,0)");
  $(".message").removeClass("messageDisplay");
  $(".messageText").removeClass("messageTextDisplay");
  dealer.score = 0;
  player.score = 0;
  dealer.aces = 0;
  player.aces = 0;
}

function Message(str) {
  setTimeout(function() {$(".messageText").html("<br>" + str);
  var newGameBtn = $("<button class='newGameBtn' onclick='NewGame()'>NEW GAME</button>")
  $(".message").append(newGameBtn);
  $(".message").addClass("messageDisplay");
  $(".messageText").addClass("messageTextDisplay");}, 250);
}

//##############################################

var deck = [];
var gameOver = true;
var dealer = {
  "name": "dealer",
  "score": 0,
  "aces": 0
};
var player = {
  "name": "player",
  "score": 0,
  "aces": 0
};
var faceDownCard = {};
NewGame();
