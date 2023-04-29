import React from 'react';
import P from 'prop-types';

import './styles.css';

export const PostCard = ({ cover, title, body }) => (
  <div className="post">
    <img src={cover} alt={title} />
    <div className="post-content">
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  </div>
);

PostCard.propTypes = {
  cover: P.string.isRequired,
  title: P.string.isRequired,
  body: P.string.isRequired,
};

//p/ arrow functions não é necessário return apenas envolver em parênteses p/ retornos com mais de uma linha
