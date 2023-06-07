const baseURL = `https://aime-api.vercel.app`;

export const loginAPI = `${baseURL}/auth/login/client`;

export const getHistAPI = (id) => {
  return `${baseURL}/destination/history/${id}`;
};

export const userPatchAPI = (id) => {
  return `${baseURL}/user/${id}`;
};
export const userGetAPI = (id) => {
  return `${baseURL}/user/${id}`;
};
export const userPostAPI = `${baseURL}/user`;

export const newsGetAPI = `${baseURL}/news`;

export const destinationGetAPI = `${baseURL}/destination`;
export const popularGetAPI = `${baseURL}/destination/popular`;

export const checkinPostAPI = `${baseURL}/destination/check`;

export const bannerGetAPI = `${baseURL}/banner`;
