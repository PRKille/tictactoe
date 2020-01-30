//Game constructor
function Game() {
  this.player = [],
  this.board = []
}

//Player constructor
function Player(mark) {
  this.mark = mark,
  this.spaces = []
}

//Game add board/player prototype
Game.prototype.addObj = function(player) {
  this.player.push(player);
}

//Turn function
function pass(indexNumber) {
  if (indexNumber === 0) {
    return 1;
  }else{
    return 0;
  }
}

//Win check
Player.prototype.winCheck = function() {
  var taken = this.spaces;
  if(taken.includes("a")) {
    if (taken.includes("b") && taken.includes("c")) {
      $(".alfabet").off("click")
      alert(this.mark+" Wins!!!");
      return;
    } else if (taken.includes("d") && taken.includes("g")) {
      $(".alfabet").off("click")
      alert(this.mark+" Wins!!!");
      return;
    }
  } 
  if (taken.includes("i")) {
    if (taken.includes("c") && taken.includes("f")) {
      $(".alfabet").off("click")
      alert(this.mark+" Wins!!!");
      return;
    } else if (taken.includes("g") && taken.includes("h")) {
      $(".alfabet").off("click")
      alert(this.mark+" Wins!!!");
      return;
    }
  }
  if (taken.includes("e")) {
    if (taken.includes("a") && taken.includes("i")) {
      $(".alfabet").off("click")
      alert(this.mark+" Wins!!!");
      return;
    } else if (taken.includes("g") && taken.includes("c")) {
      $(".alfabet").off("click")
      alert(this.mark+" Wins!!!");
      return;
    }else if (taken.includes("b") && taken.includes("h")) {
      $(".alfabet").off("click")
      alert(this.mark+" Wins!!!");
      return;
    }else if (taken.includes("d") && taken.includes("f")) {
      $(".alfabet").off("click")
      alert(this.mark+" Wins!!!");
      return;
    }
  } else {
    return false;
  }
}

//Tie check
Game.prototype.tieCheck = function() {
  if (this.board.length === 9) {
    alert("You Tied!");
  }
}
//UI
$(document).ready(function() {
  var game = new Game;
  var playerX = new Player("X");
  var playerO = new Player("O");
  game.addObj(playerO);
  game.addObj(playerX);
  var playerIndex = 1;
  // var currentPlayer = game.player[playerIndex];
  
//Click funtion
  $(".alfabet").on("click", function() {
    var square = $(this).attr("id");
    var currentPlayer = game.player[playerIndex]; 
    currentPlayer.spaces.push(square);
    game.board.push(square);
    $(this).addClass("clicked"+currentPlayer.mark);
    // $(this).append(currentPlayer.mark);
    $(this).off("click");
    var check = currentPlayer.winCheck();
    if (check === false){
      game.tieCheck();
    }
    playerIndex = pass(playerIndex);
    console.log(playerIndex);  
  });
});
