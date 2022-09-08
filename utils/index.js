import axios from "axios";

export const baseURL = "https://bayut.p.rapidapi.com";

export const fetchAPI = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "2e5199a5a2msh0b047b53c7cd645p1905e0jsn1834efbfbfa8",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });
  console.log(data, "data");
  return data;
};
