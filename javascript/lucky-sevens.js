/* Read the initial amount the user has to wager
    Initialize to zero a counter respresenting the number of rolls

    The max amount equals the initial amount 
    The count at the maximum equals zero

    while (there is any money left) {
        increment the rolls counter
        roll the dice

        if (the dice add to seven)
            add $4 to the gambler's amount

        else 
            subtract $1 from the total amount
        if (the amount is greater than ever before) {
            remember this max amount
            remember current value of the rolls counter
        }
    }
    
    Display starting bet $##.##
    Display the total dice rolls ###
    Display the max amount won $##.##
    Display roll count at highest amount won ### */

// function hideResults() {
//     document.getElementById("results").style.display = "none";
// }

// function rollDice() {
// var startingBet = document.getElementById("betInput").ariaValueMax;
// var bet = startingBet;
// var dice1 = Math.floor(Math.random() * 6) + 1;
// var dice2 = Math.floor(Math.random() * 6) + 1;
// var diceRoll = dice1 + dice2;
// var betsArray = [];

// while (bet > 0) {
//     if(diceRoll != 7) {
//         bet -= 1
//     } else {
//         bet += 4
//     }
//     betsArray.push(bet)
// }

// var rollCounter = betsArray.length;
// var highestAmount = Math.max.apply(Math, betsArray);
// var highestPosition = betsArray.indexOf(highestAmount);
// var rollsFromHighest = rollCounter - highestPosition;

// function showResults() {
//     document.getElementById("results").style.display = "inline";
//     document.getElementById("rollDiceBtn");
//     document.getElementById("resultsBet");
//     document.getElementById("resultsRollCount");
//     document.getElementById("resultsHighestWin");
//     document.getElementById("resultsRollsFromHigh").innerHTML = rollsFromHigh;
// }

var fin1 = false;
var fin2 = false;
var dice1 = 1;
var dice2 = 1;
var playAgain = true;
var isRunning = false;

var betCount = 0;
var playerMoney = 0;

var maxWin = 0;
var maxWinIdx = 0;

function playGame() {
	if(document.getElementById('btn').innerHTML == 'PlayAgain'){
		document.getElementById('resultID').innerHTML = '';
		document.getElementById('btn').innerHTML = 'Start to Play: ';
		document.getElementById('money').value = '';
	}else{
		if(document.getElementById('money').value == ''){
			alert('Please enter your bet');
			return;
		}
		if(!isRunning){
			isRunning = true;
			if(betCount == 0){
				playerMoney = document.getElementById('money').value;
				if(playerMoney == null){
					playerMoney = 0;
				}
				document.getElementById('resultID').innerHTML = '';
			}
			if(playerMoney == 0){
				showResult();
				return;
			}
			dice1 = Math.floor(Math.random() * 6) + 1;
			dice2 = Math.floor(Math.random() * 6) + 1;

			fin1 = true;
			fin2 = true;
			calculateResult();
		}
	}
}

function calculateResult(){
	if(fin1 && fin2){
		betCount++;
		fin1 = false;
		fin2 = false;
		var sum = dice1 + dice2;
		var winningScore = '';
		var losingScore = '';
		if(sum == 7){
			playerMoney += 4;
			maxWin += 4;
			maxWinIdx = betCount;
			winningScore = '$4';
		}else{
			playerMoney -= 1;
			losingScore = '$1';
		}
		document.getElementById('btn').innerHTML = 'Another bet: ';

		if(playAgain){
			isRunning = false;
			playGame();
		}else{
			isRunning = false;
		}
	}
}

function showResult(){
	// var result = document.getElementById('resultID');
	// var count = document.getElementById('count');
	// var maxWinAmt = document.getElementById('maxWinAmt');
	// var maxWinCount = document.getElementById('maxWinCount');
	// result.innerHTML = 'Starting Bet: $' + document.getElementById('money').value;
	// count.innerHTML = 'Total rolls before going broke: ' + betCount;
	// maxWinAmt.innerHTML = 'Highest amount won: $' + maxWin;
	// maxWinCount.innerHTML = 'Roll count on Highest amount won: ' + maxWinIdx;

	var table="<table class='table table-striped'>"+
		"<thead><tr align='center'>"+
		"<th colspan='2'> <h3 id='title'>Results</h3> </th>"+
		"</tr></thead>"+
		"<tbody><tr>"+
		"<td align='left' style='width:70%;'>Starting Bet: </td><td>"+document.getElementById("money").value+"</td>"+
		"</tr>"+
		"<tr>"+
		"<td align='left'>Total rolls before going broke: </td><td>"+betCount+"</td>"+
		"</tr>"+
		"<tr>"+
		"<td align='left'>Highest amount won: </td><td>"+maxWin+"</td>"+
		"</tr>"+
		"<tr>"+
		"<td align='left'>Roll count on Highest amount won: </td><td>"+maxWinIdx+"</td>"+
		"</tr></body>"+
		"</table>";
	document.getElementById("resultID").innerHTML=table;


	document.getElementById('btn').innerHTML = 'PlayAgain';
	betCount = 0;
	maxWin = 0;
	maxWinIdx = 0;
	isRunning = false;
}