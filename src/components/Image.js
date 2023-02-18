import React from 'react';

const Image = ({ imageUrl, title }) => {
  return (
    <div className="image">
      <img src={imageUrl} alt={title} />
    </div>
  );
};

export default Image;
