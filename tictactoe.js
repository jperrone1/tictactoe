
$(function() {
// $(document).ready()

  var current_turn = "X";

  var winners = [[a1, a2, a3], [b1, b2, b3], [c1, c2, c3], [a1, b1, c1], [a2, b2, c2], [a3, b3, c3], [a1, b2, c3], [a3, b2, c1]];

  $('#ttt_board').delegate ('td', 'click', function (e) {
    var square = $(e.target);
    var current_value = square.html();

    if(current_value === '') {
      square.html(current_turn);

    // for(var i = 0; i < 9; i++) { 
    //   if($("#" + winners[i][0]).html() === $("#" + winners[i][1]).html() && $("#" + winners[i][1]).html() === $("#" + winners[i][3]).html() && $("#" + winners[i][1]).html() === current_turn) {
    //     alert("You Won!");
    //     return; 
    //   }
    // }      

      if($("#a1").html() === $("#a2").html() && $("#a2").html() === $("#a3").html() && $("#a3").html() === current_turn) {
        alert("You Won!");
        return;
      }

      current_turn = ((current_turn === "X") ? "O" : "X");
    }




  });

  /* 
  To determine if there's a winner, check the current board state against 
  all the possible winning configurations, stored in an array. 

  if($("#a1").html() === $("#a2").html() && $("#a2").html() === $("#a3").html()) {
    alert("You Won!");
    return;
  }

  then it's a winner. 

    for(var i = 0; i < 9; i++) { 
      if($("#" + winners[i][0]).html() === $("#" + winners[i][1]).html() && $("#" + winners[i][1]).html() === $("#" + winners[i][3]).html() && $("#" + winners[i][1]).html() === current_turn) {
        alert("You Won!");
        return; 
      }
    }

  */



  // var function checkForWinner() {
  //   var winners = [[a1, a2, a3], [b1, b2, b3], [c1, c2, c3], [a1, b1, c1], [a2, b2, c2], [a3, b3, c3], [a1, b2, c3], [a3, b2, c1]];
  //   for(var i = 0; i < 9; i++) {
  //     if(winners[i][0] === winners[i][1] && winners[i][1] === winners[i][2]) {
  //       alert("You Won!")
  //     else return; 
  //     }
  //   }
  // }

  // var function checkForWinner() {
  //   for(var i = 0; i < 9; i++) {
  //     if 

  //   }
  // }



  /* 
  The reset should clear the values of all of the td cells, setting them to "". 
  Since they are all children of the table, #ttt_board, perhaps I could send 
  a command to the table. 
  */ 

  $('#reset').click(function() {
    // alert("first alert");
    $(".cell").html("");
    current_turn = "X";
  });

});

// ("td").html("")