import axios from 'axios';

const API_KEY = ea083d35f879c79b952fb878d408152a;
const BASE_URL = 'https://www.flickr.com/services/rest/';

const fetchImages = async (query, perPage = 50) => {
  try {
    const response = await axios.get(`${BASE_URL}?method=flickr.photos.search&api_key=${API_KEY}&text=${query}&per_page=${perPage}&format=json&nojsoncallback=1`);
    const images = response.data.photos.photo.map((photo) => ({
      id: photo.id,
      url: `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`,
      title: photo.title,
    }));
    return images;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export { fetchImages };
