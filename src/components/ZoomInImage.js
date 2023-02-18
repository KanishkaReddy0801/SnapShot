import React, { useState } from 'react';

const ZoomInImage = ({ imageUrl, title }) => {
  const [showImage, setShowImage] = useState(false);

  const handleMouseEnter = () => {
    setShowImage(true);
  };

  const handleMouseLeave = () => {
    setShowImage(false);
  };

  return (
    <div className="zoom-in-image" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {showImage && (
        <div className="image-overlay">
          <img src={imageUrl} alt={title} />
        </div>
      )}
      <img src={imageUrl} alt={title} />
    </div>
  );
};

export default ZoomInImage;
