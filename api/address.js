import { authFetch } from "../utils/fetch";
import api from "./api";

const Order = {
  newAddress: (data) => {
    return api.post("/orders", data);
  },

  addresses: () => {
    return api.get("/order");
  },
  getAddresses: async (logout) => {
      try {
        const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/order`;
        const result = await authFetch(url, logout);
        if (result.statusCode === 500) throw "Error del servidor";
        return result;


      } catch (e) {
        console.log(error);
        return null;
      }


  },
  deleteAddress: (data) => {
    return api.delete(`/orders/${data}`, data);
  },
  updateAddress: (data, newData) => {
    return api.put(`/orders/${data}`, newData);
  },
};

export default Order;
