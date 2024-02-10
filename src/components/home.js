import { getData } from "../api";
import { markupUsers } from "../markup";
import { tbodyEl } from "../refs";
import { addMarkup } from "../helpers";

async function init() {
  try {
    const data = await getData("users");
    const markup = markupUsers(data);
    addMarkup(tbodyEl, markup);
  } catch (error) {
    console.error(error);
  }
}
init();
