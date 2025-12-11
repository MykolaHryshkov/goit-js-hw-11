import axios from "axios";

const API_KEY = "53675340-c8f1c39aaab6a47e6dfd34957";
const BASE_URL = "https://pixabay.com/api/";

export async function getImagesByQuery(query) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
      },
    });

    return response.data.hits;
  } catch (error) {
    console.error("Pixabay API Error:", error);
    throw new Error("Помилка при отриманні зображень. Спробуйте пізніше.");
  }
}