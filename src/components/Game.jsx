import React, { useState } from 'react';
import Button from './Button';
import WordList from './WordList';

const Game = () => {
  const initialWords = [
    'medias',
    'coche',
    'alfombra de juego',
    'pañal',
    'mameluco',
    'leche de fórmula',
    'cuna'
  ];

  const [words, setWords] = useState(initialWords);
  const [accumulatedWords, setAccumulatedWords] = useState([]);

  const handleButtonClick = () => {
    if (words.length === 0) {
      // Si ya no quedan palabras en la lista, puedes reiniciar el juego o mostrar un mensaje de finalización.
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

  return (
    <div>
      <Button onClick={handleButtonClick} />
      <WordList words={accumulatedWords} />
    </div>
  );
};

export default Game;