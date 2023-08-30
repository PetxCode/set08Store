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

const payment: string = "http://localhost:3355/api/v1/make-payment";
export const payForProduct = async (data: any) => {
  try {
    return await axios.post(payment, { amount: data }).then((res) => {
      return res.data.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};
