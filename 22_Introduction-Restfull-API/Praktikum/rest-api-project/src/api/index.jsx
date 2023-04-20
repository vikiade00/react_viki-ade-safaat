import { baseAPI } from "../config/ApiService";

// API PRODUCT
export const api = {
  // Menampilkan Data
  getProduct: () => {
    return baseAPI(`/product`);
  },

  // Menambahkan Data
  createProduct: (body) => {
    return baseAPI.post(`/product`, body);
  },

  // Update Data
  updateProduct: (id, body) => {
    return baseAPI.put(`/product/${id}`, body);
  },

  // Hapus Data
  deleteProduct: (id) => {
    return baseAPI.delete(`/product/${id}`);
  },
};
