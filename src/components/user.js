import { getData } from "../api";
import { markupByUserId } from "../markup";
import { userTableEl } from "../refs";
import { addMarkup } from "../helpers";

const searchParams = new URLSearchParams(location.search);
const userId = searchParams.get("userid");

async function init() {
  try {
    const data = await getData(`users/${userId}`);
    const markup = markupByUserId(data);
    addMarkup(userTableEl, markup);
  } catch (error) {
    console.error(error);
  }
}
init();
