import axios from "axios";

const baseURL = "https://de1.api.radio-browser.info/json/";

export const radioBrowserApi = axios.create({
  baseURL: baseURL,
});
