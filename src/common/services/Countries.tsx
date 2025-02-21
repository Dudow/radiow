import { Country } from "../interfaces/Country";
import { radioBrowserApi } from "./radioBrowserApi";

const getCountries = async () => {
  const response = await radioBrowserApi.get<Country[]>("countries", {
    params: {
      limit: 15,
      order: "stationcount",
      reverse: "true",
      hidebroken: "true",
    },
  });
  return response.data;
};

export default getCountries;
