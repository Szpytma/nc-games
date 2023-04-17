import axios from "axios";

const baseUrl = "https://nc-games-rkbx.onrender.com/api/";

export const fetchReviews = async () => {
  const { data } = await axios.get(`${baseUrl}reviews`);
  return data.reviews;
};

export const fetchReviewById = async (id) => {
  const { data } = await axios.get(`${baseUrl}reviews/${id}`);
  return data.review;
};
