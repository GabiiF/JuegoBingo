import React from 'react';

const WordList = ({ words }) => {
    return (
      <ul>
        {words.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
    );
  };
export default WordList;