import api from "./api";
import { authFetch } from "../utils/fetch";

const Detail = {
  newOrder: (data, values) => {
    return api.post(`/orders/${data}/details`, {
      ...values,
      received: 0,
    });
  },
  addProducts: (data, value) => {
    return api.post(`/details/${data}/products/${value}`);
  },
  getOrders: () => {
    return api.get(`/details`);
  },
  getAllOrders: async (logout) =>{
    try {
      const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/details`;
      const result = await authFetch(url, null, logout);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  getOrder: (data) => {
    return api.get(`/details/${data}`);
  },
  getOneOrder: async (logout, data) => {
    try {
      const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/details/${data}`;
      const result = await authFetch(url, null, logout);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }


  }
};

export default Detail;
