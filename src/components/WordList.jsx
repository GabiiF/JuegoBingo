import React from 'react';
import { Typography } from '@mui/material';

const WordList = ({ words }) => {
  const columnCount = 3; // Número de columnas deseado
  const gridTemplateColumns = `repeat(${columnCount}, 1fr)`;

  return (
    <div style={{ display: 'grid', gridTemplateColumns,marginTop: '1%' }}>
      {words.map((word, index) => (
        <Typography key={index} variant="h6" gutterBottom style={{ fontSize: '30px', marginRight: '5%',marginBottom: '1%'}}>
          <ul style={{ margin: '0px' }}>
            <li>{`${index + 1}. ${word}`}</li>
          </ul>
        </Typography>
      ))}
    </div>
  );
};

export default WordList;