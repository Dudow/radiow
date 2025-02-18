import { Country } from "../interfaces/Country";
import { radioBrowserApi } from "./radioBrowserApi";

const getCountries = async () => {
  const response = await radioBrowserApi.get<Country>("countries");
  return response.data;
};

export default getCountries;
