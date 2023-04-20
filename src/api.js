import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-games-rkbx.onrender.com/api/",
});

export const fetchReviews = async (category, sortOrder, sortBy) => {
  const { data } = await api.get(`reviews`, {
    params: {
      category,
      order: sortOrder,
      sort_by: sortBy,
    },
  });
  return data.reviews;
};

export const fetchReviewById = async (review_id) => {
  const { data } = await api.get(`reviews/${review_id}`);
  return data.review;
};

export const fetchCommentsByReviewId = async (review_id) => {
  const { data } = await api.get(`reviews/${review_id}/comments`);
  return data.comments;
};

export const patchReviewVotesAdd = async (review_id) => {
  const { data } = await api.patch(`reviews/${review_id}`, {
    inc_votes: 1,
  });
  return data.review;
};
export const patchReviewVotesDeduct = async (review_id) => {
  const { data } = await api.patch(`reviews/${review_id}`, {
    inc_votes: -1,
  });
  return data.review;
};

export const postComment = async (review_id, username, body) => {
  const { data } = await api.post(`reviews/${review_id}/comments`, {
    username,
    body,
  });
  return data.comment;
};

export const removeCommentByID = async (comment_id) => {
  await api.delete(`comments/${comment_id}`);
};

export const fetchUsers = async () => {
  const { data } = await api.get(`users`);
  return data.users;
};
export const fetchCategories = async () => {
  const { data } = await api.get(`categories`);
  return data.categories;
};
