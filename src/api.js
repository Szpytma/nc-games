import axios from "axios";
import { async } from "q";

const baseUrl = "https://nc-games-rkbx.onrender.com/api/";

export const fetchReviews = async () => {
  const { data } = await axios.get(`${baseUrl}reviews`);
  return data.reviews;
};

export const fetchReviewById = async (review_id) => {
  const { data } = await axios.get(`${baseUrl}reviews/${review_id}`);
  return data.review;
};

export const fetchCommentsByReviewId = async (review_id) => {
  const { data } = await axios.get(`${baseUrl}reviews/${review_id}/comments`);
  return data.comments;
};

export const patchReviewVotes = async (review_id) => {
  const { data } = await axios.patch(`${baseUrl}reviews/${review_id}`, {
    inc_votes: 1,
  });
  return data.review;
};
