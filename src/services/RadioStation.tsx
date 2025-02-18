import { radioBrowserApi } from "./radioBrowserApi";

const getRadioStation = async () => {
  const response = await radioBrowserApi.get("stations/search");
  return response.data;
};

export default getRadioStation;
