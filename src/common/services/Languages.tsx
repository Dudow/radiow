import { Language } from "../interfaces/Language";
import { radioBrowserApi } from "./radioBrowserApi";

const getLanguages = async () => {
  const response = await radioBrowserApi.get<Language[]>("languages");
  return response.data;
};

export default getLanguages;
