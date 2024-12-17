import React, { useState } from "react";
import "./styles.css";

function Square({ value, onClick }) {
    return (
        <button className="square" onClick={onClick}>
            {value}
        </button>
    );
}

const TicTacToe = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);

    const handleClick = (index) => {
        if (squares[index] || calculateWinner(squares)) {
            return;
        }
        const newSquares = squares.slice();
        newSquares[index] = isXNext ? "X" : "O";
        setSquares(newSquares);
        setIsXNext(!isXNext);
    };

    const winner = calculateWinner(squares);
    const isBoardFull = squares.every((square) => square !== null);
    const status = winner
        ? `Winner: ${winner}`
        : isBoardFull
        ? "It's a Draw!"
        : `Next Player: ${isXNext ? "X" : "O"}`;
    const resetGame = () => {
        setSquares(Array(9).fill(null));
        setIsXNext(true);
    };

    return (
        <div className="tic-tac-toe">
            <div className="header">
                <h1>Tic Tac Toe</h1>
            </div>
            <div className="status">{status}</div>
            <div className="board">
                {squares.map((value, index) => (
                    <Square
                        key={index}
                        value={value}
                        onClick={() => handleClick(index)}
                    />
                ))}
            </div>
            <button className="reset-button" onClick={resetGame}>
                Reset Game
            </button>
        </div>
    );
};

// Function to calculate the winner
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export default TicTacToe;
