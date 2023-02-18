import React from 'react';
import Image from './Image';

function Gallery(props) {
  return (
    <div className='gallery'>
      {props.Images && props.Images.map((id, url, title) => (
        <Image key={id} imageUrl={url} title={title} />
      ))}
    </div>
  );
}

// const Gallery = ({ images }) => {
//   return (
//     <div className="gallery">
//       {images.map((image) => (
//         <Image key={image.id} imageUrl={image.url} title={image.title} />
//       ))}
//     </div>
//   );
// };

export default Gallery;
