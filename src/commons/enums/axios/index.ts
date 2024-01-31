import axios from "axios";

const instance = axios.create({
  method: "get",
  responseType: "json",
  timeout: 2000,
});

export const Axios = async function (url: string) {
  instance
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};
