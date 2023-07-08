import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
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
        <Button variant="contained" onClick={handleButtonClick} disabled={gameOver}>
        Sacar palabras
      </Button>
      {gameOver ? (
        <Typography variant="h6" gutterBottom>
          Juego terminado. Ya no quedan más palabras.
        </Typography>
      ) : (
        <WordList words={accumulatedWords} />
      )}
      {gameOver && (
        <Button variant="outlined" onClick={restartGame}>
          Reiniciar juego
        </Button>
      )}
    </div>
  );
};

export default Game;