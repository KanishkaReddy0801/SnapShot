import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Gallery from '../components/Gallery';

const Mountain = () => {
  const [mountainImages, setMountainImages] = useState([]);

  useEffect(() => {
    const fetchMountainImages = async () => {
      const response = await axios.get(
        'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=ea083d35f879c79b952fb878d408152a&tags=mountains&per_page=50&format=json&nojsoncallback=1'
      );
      const images = response.data.photos.photo.map((photo) => ({
        id: photo.id,
        url: `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`,
        title: photo.title,
      }));
      setMountainImages(images);
    };
    fetchMountainImages();
  }, []);

  return (
    <div className="mountain">
      <h2>Mountain Photos</h2>
      <Gallery images={mountainImages} />
    </div>
  );
};

export default Mountain;
