import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/render-functions.js";
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from "./js/render-functions.js";

const form = document.querySelector(".form");
const input = form.querySelector("input[name='search-text']");

form.addEventListener("submit", handleSearch);

async function handleSearch(event) {
  event.preventDefault();

  const query = input.value.trim();

  if (!query) {
    iziToast.warning({
      title: "Warning",
      message: "Будь ласка, введіть ключове слово для пошуку!",
      position: "topRight",
    });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const hits = await getImagesByQuery(query);

    if (hits.length === 0) {
      iziToast.info({
        title: "Info",
        message:
          "На жаль, за вашим запитом нічого не знайдено. Спробуйте інший пошук!",
        position: "topRight",
      });
      return;
    }

    createGallery(hits);
  } catch (error) {
    iziToast.error({
      title: "Error",
      message: error.message,
      position: "topRight",
    });
  } finally {
    hideLoader();
  }
}