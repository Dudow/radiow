import { radioBrowserApi } from "./radioBrowserApi";

const getCountries = async () => {
  const response = await radioBrowserApi.get("countries");
  return response.data;
};

export default getCountries;
