
// VARIABLES

let player1Score = 0
let player2Score = 0


const players = []
const scores = []

function addPlayer(){
    window.event.preventDefault()
    let form = window.event.target
    let playerName = form.playerName.value
    players.push(form.playerName.value)
    document.getElementById("playerForm").reset()
    
    let playerList = ''

    for (let i = 0; i < players.length; i++) {
        const player = players[i]
        playerList += `<p>${player}</p>\n <section class="row">
        <div class="col-4">
            <span id="player-name"></span>
            <span id="player1-score">
                ${player1Score}
            </span>
            <div>
                <button onclick="player1Goal()" class="btn primary">Goal!</button>
            </div>`
    
            document.getElementById("player-list").innerHTML = playerList
    }


}


function addScore(){
    scores.push()
}

function drawplayer1Score(){
    document.getElementById("player1-score").innerText = player1Score
}

function drawplayer2Score(){
    document.getElementById("player2-score").innerText = player2Score
}


function player1Goal(){
    player1Score += 1

    drawplayer1Score()
}

function player2Goal(){
    player2Score += 1

    drawplayer2Score()
}
