import React from 'react';
import {Typography } from '@mui/material';

const WordList = ({ words }) => {
  const columnCount = 3; // Número de columnas deseado
  const wordsPerColumn = Math.ceil(words.length / columnCount); // Cantidad de palabras por columna

  return (
    <div style={{ display: 'flex'}}>
      {[...Array(columnCount)].map((_, columnIndex) => (
        <Typography key={columnIndex} variant="h6" gutterBottom style={{ fontSize: '30px',marginRight: '5%' }}>
        <ul style={{ flex: 1 }}>
          {words
            .slice(columnIndex * wordsPerColumn, (columnIndex + 1) * wordsPerColumn)
            .map((word, index) => (
              <li key={index}>{word}</li>
            ))}
        </ul>
        </Typography>
      ))}
    </div>
  );
};

export default WordList;