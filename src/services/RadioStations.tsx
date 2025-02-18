import { radioBrowserApi } from "./radioBrowserApi";

const getRadioStations = async () => {
  const response = await radioBrowserApi.get("stations");
  return response.data;
};

export default getRadioStations;
