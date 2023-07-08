import React, { useState } from 'react';
import Button from './Button';
import WordList from './WordList';
import palabras from '../Palabras';

const Game = () => {
  const [words, setWords] = useState(palabras);
  const [accumulatedWords, setAccumulatedWords] = useState([]);
  const [gameOver, setGameOver] = useState(false);


  const handleButtonClick = () => {
    if (words.length === 0) {
      // Si ya no quedan palabras en la lista, puedes reiniciar el juego o mostrar un mensaje de finalización.
      setGameOver(true);
        return;
    }

    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];

    setAccumulatedWords([...accumulatedWords, randomWord]);

    // Elimina la palabra seleccionada de la lista de palabras
    const updatedWords = [...words];
    updatedWords.splice(randomIndex, 1);
    setWords(updatedWords);
  };

  const restartGame = () => {
    setWords(palabras);
    setAccumulatedWords([]);
    setGameOver(false);
  };

  return (
    <div>
       <Button onClick={handleButtonClick} disabled={gameOver} />
      {gameOver ? (
        <p>Juego terminado. Ya no quedan más palabras.</p>
      ) : (
        <WordList words={accumulatedWords} />
      )}
      {gameOver && (
        <button onClick={restartGame}>Reiniciar juego</button>
      )}
    </div>
  );
};

export default Game;