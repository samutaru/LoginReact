import { useState } from 'react';
import './HomePage.css';

function HomePage() {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [status, setStatus] = useState('Turno de: X');
  const [isGameActive, setIsGameActive] = useState(true);

  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];

  const handleClick = (index) => {
    if (board[index] || !isGameActive) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    if (checkWinner(newBoard, currentPlayer)) {
      setStatus(`¡Ganador: ${currentPlayer}!`);
      setIsGameActive(false);
    } else if (!newBoard.includes('')) {
      setStatus('¡Empate!');
      setIsGameActive(false);
    } else {
      const nextPlayer = currentPlayer === 'X' ? 'O' : 'X';
      setCurrentPlayer(nextPlayer);
      setStatus(`Turno de: ${nextPlayer}`);
    }
  };

  const checkWinner = (board, player) => {
    return winningCombos.some(combo => {
      const [a, b, c] = combo;
      return board[a] === player && board[b] === player && board[c] === player;
    });
  };

  const resetGame = () => {
    setBoard(Array(9).fill(''));
    setCurrentPlayer('X');
    setStatus('Turno de: X');
    setIsGameActive(true);
  };

  return (
    <div className="home-container">
      <h1>Bienvenido - Tres en Raya</h1>
      <div className="board">
        {board.map((cell, index) => (
          <div
            key={index}
            className="cell"
            onClick={() => handleClick(index)}
          >
            {cell}
          </div>
        ))}
      </div>
      <div className="status">{status}</div>
      <button className="reset-button" onClick={resetGame}>Reiniciar</button>
    </div>
  );
}

export default HomePage;
