import { useState } from 'react';
import './HomePage.css';

function HomePage() {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [current, setCurrent] = useState('X');
  const [winner, setWinner] = useState(null);

  const winningCombos = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6],
  ];

  const checkWinner = (newBoard) => {
    for (let combo of winningCombos) {
      const [a,b,c] = combo;
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        return newBoard[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = current;
    const w = checkWinner(newBoard);
    setBoard(newBoard);
    setWinner(w);
    if (!w) setCurrent(current === 'X' ? 'O' : 'X');
  };

  const reset = () => {
    setBoard(Array(9).fill(''));
    setWinner(null);
    setCurrent('X');
  };

  return (
    <div className="home-page">
      <h1>Tres en Raya</h1>
      <div className="board">
        {board.map((val, idx) => (
          <div key={idx} className="cell" onClick={() => handleClick(idx)}>{val}</div>
        ))}
      </div>
      <div className="status">
        {winner ? `Ganador: ${winner}` : `Turno de: ${current}`}
      </div>
      <button onClick={reset}>Reiniciar</button>
    </div>
  );
}

export default HomePage;
