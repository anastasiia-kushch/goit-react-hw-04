import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/v1';

export const fetchGallery = async (searchQuery, page = 1) => {
  const response = await axios.get('/search', {
    headers: {
      Authorization: 'WW6X1WrQmuJ-vE6R1rS70UQJ-uUsrM_fhzZ5r0cwV74',
    },
    params: {
      query: searchQuery,
      per_page: 12,
      page,
    },
  });

  return response.data.hits;
};
