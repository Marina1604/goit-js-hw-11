import axios from 'axios';

const per_page = 20;
let totalPages = 0;

async function getGallery(query, page) {
  
  const API_KEY = '35766331-5043157112cb5c067e5ea3c3c';
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: per_page,
    page: page,
  });

  const response = await axios.get(`https://pixabay.com/api/?${params}`);
  totalPages = response.data.totalHits / per_page;
  return response;
}

export { getGallery, totalPages };
