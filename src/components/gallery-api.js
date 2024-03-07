import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/';

const ACCESS_KEY = 'WW6X1WrQmuJ-vE6R1rS70UQJ-uUsrM_fhzZ5r0cwV74'

export const fetchGallery = async (query) => {
  const response = await axios.get(
    `photos?client_id=${ACCESS_KEY}&query=${query}`
  );

  return response.data;
};
