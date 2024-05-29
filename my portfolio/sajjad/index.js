document.addEventListener('DOMContentLoaded', () => {
    const gameSize = 10;
    const gameElement = document.getElementById('game');
    const statusElement = document.getElementById('status');
    const gamesPlayedElement = document.getElementById('gamesPlayed');
    const player1WinsElement = document.getElementById('player1Wins');
    const player2WinsElement = document.getElementById('player2Wins');

    let grid = Array.from({ length: gameSize }, () => Array(gameSize).fill(null));
    let currentPlayer = 1;
    let player1Monsters = 0;
    let player2Monsters = 0;
    let gamesPlayed = 0;
    let player1Wins = 0;
    let player2Wins = 0;

    function initializeGrid() {
        gameElement.innerHTML = '';
        for (let row = 0; row < gameSize; row++) {
            for (let col = 0; col < gameSize; col++) {
                const cell = document.createElement('div');
                cell.className = 'cell';
                cell.dataset.row = row;
                cell.dataset.col = col;
                cell.addEventListener('click', onCellClick);
                gameElement.appendChild(cell);
            }
        }
    }

    function onCellClick(event) {
        const cell = event.target;
        const row = parseInt(cell.dataset.row);
        const col = parseInt(cell.dataset.col);

        if (currentPlayer === 1 && row === 0) {
            placeMonster(cell, row, col, 'player1');
        } else if (currentPlayer === 2 && row === gameSize - 1) {
            placeMonster(cell, row, col, 'player2');
        }
    }

    function placeMonster(cell, row, col, player) {
        if (grid[row][col] === null) {
            const monster = getMonster();
            grid[row][col] = { player, monster };
            cell.className = `cell ${player} ${monster}`;
            if (player === 'player1') {
                player1Monsters++;
            } else {
                player2Monsters++;
            }
            switchTurn();
        }
    }

    function getMonster() {
        const monsters = ['vampire', 'werewolf', 'ghost'];
        return monsters[Math.floor(Math.random() * monsters.length)];
    }

    function switchTurn() {
        currentPlayer = currentPlayer === 1 ? 2 : 1;
        updateStatus();
        checkWinCondition();
    }

    function updateStatus() {
        statusElement.textContent = `Player ${currentPlayer}'s turn`;
    }

    function checkWinCondition() {
        if (player1Monsters >= 10) {
            declareWinner(2);
        } else if (player2Monsters >= 10) {
            declareWinner(1);
        }
    }

    function declareWinner(winner) {
        statusElement.textContent = `Player ${winner} wins!`;
        gamesPlayed++;
        gamesPlayedElement.textContent = gamesPlayed;
        if (winner === 1) {
            player1Wins++;
            player1WinsElement.textContent = player1Wins;
        } else {
            player2Wins++;
            player2WinsElement.textContent = player2Wins;
        }
        resetGame();
    }

    function resetGame() {
        grid = Array.from({ length: gameSize }, () => Array(gameSize).fill(null));
        player1Monsters = 0;
        player2Monsters = 0;
        currentPlayer = 1;
        initializeGrid();
        updateStatus();
    }

    initializeGrid();
    updateStatus();
});
