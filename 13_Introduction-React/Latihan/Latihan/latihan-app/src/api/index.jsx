import { baseAPI } from "../config/ApiService";

export const api = {
  // API Users
  getUsers: () => {
    return baseAPI.get(`/users`);
  },

  getUsersById: (id) => {
    return baseAPI.get(`/users/${id}`);
  },

  // API Biodatas
  getBiodata: () => {
    return baseAPI.get(`biodatas`);
  },
  getBiodataById: (id) => {
    return baseAPI.get(`biodatas/${id}`);
  },
  createBiodata: (body) => {
    return baseAPI.post(`/biodatas`, body);
  },
  updateBiodata: (id, body) => {
    return baseAPI.put(`/biodatas/${id}`, body);
  },
  deleteBiodata: (id) => {
    return baseAPI.delete(`/biodatas/${id}`);
  },
};
