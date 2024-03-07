import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/';

const ACCESS_KEY = 'WW6X1WrQmuJ-vE6R1rS70UQJ-uUsrM_fhzZ5r0cwV74'

export const fetchGallery = async (searchQuery, page = 1) => {
  const response = await axios.get(
    `/search/photos?client_id=${ACCESS_KEY}`, {
      params: {
      query: searchQuery,
      per_page: 15,
      page
      }
    }
  );

  return response.data;
};
