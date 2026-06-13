import axios from "axios";
import { mockProperties } from "./mockData";

export const baseURL = "https://bayut.p.rapidapi.com";

export const fetchAPI = async (url) => {
  const apiKey = process.env.RAPIDAPI_KEY;

  if (!apiKey) {
    const purpose = url.includes("for-rent") ? "for-rent" : "for-sale";
    return { hits: mockProperties.filter((p) => p.purpose === purpose) };
  }

  try {
    const { data } = await axios.get(url, {
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      },
    });
    return data;
  } catch {
    const purpose = url.includes("for-rent") ? "for-rent" : "for-sale";
    return { hits: mockProperties.filter((p) => p.purpose === purpose) };
  }
};
