import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Gallery from '../components/Gallery';

const Birds = () => {
  const [birdImages, setBirdImages] = useState([]);

  useEffect(() => {
    const fetchBirdImages = async () => {
      const response = await axios.get(
        'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=ea083d35f879c79b952fb878d408152a&tags=birds&per_page=50&format=json&nojsoncallback=1'
      );
      const images = response.data.photos.photo.map((photo) => ({
        id: photo.id,
        url: `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`,
        title: photo.title,
      }));
      setBirdImages(images);
    };
    fetchBirdImages();
  }, []);

  return (
    <div className="birds">
      <h2>Bird Photos</h2>
      <Gallery images={birdImages} />
    </div>
  );
};

export default Birds;
