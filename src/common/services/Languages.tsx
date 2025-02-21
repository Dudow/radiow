import { Language } from "../interfaces/Language";
import { radioBrowserApi } from "./radioBrowserApi";

const getLanguages = async () => {
  const response = await radioBrowserApi.get<Language[]>("languages", {
    params: {
      limit: 15,
      order: "stationcount",
      reverse: "true",
      hidebroken: "true",
    },
  });
  return response.data;
};

export default getLanguages;
