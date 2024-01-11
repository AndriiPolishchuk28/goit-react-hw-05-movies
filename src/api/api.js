import axios from 'axios';

const AUTH_TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDliZTVjNjAxNDI4YTU0MjQzOTk3MDkzMzhmNjM0YiIsInN1YiI6IjY1OTkyMDg1N2Q1NTA0MDBmMTgxNmIzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jXzzT6z1lvrxxvZ43z_edMdVsZdaEliii-de-g5eINI';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export const fetchTranding = async () => {
  const response = await axios.get('trending/all/day');
  return response.data;
};

export const fetchMovieById = async id => {
  const response = await axios.get(`movie/${id}`);
  return response.data;
};

export const fetchCastInfo = async id => {
  const response = await axios.get(`movie/${id}/credits`);
  return response.data;
};

export const fetchReviews = async id => {
  const response = await axios.get(`movie/${id}/reviews`);
  return response.data;
};

export const fetchByQuery = async query => {
  const response = await axios.get(`search/movie?query=${query}`);
  return response.data;
};
