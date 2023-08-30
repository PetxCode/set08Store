import axios from "axios";

// const url: string = "https://fakestoreapi.com/products";
const url: string = "http://localhost:3355/api/v1/view-products";
export const getProduct = async () => {
  try {
    return await axios.get(url).then((res) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};
