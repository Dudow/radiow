import { RadioStation } from "../interfaces/RadioStation";
import { radioBrowserApi } from "./radioBrowserApi";

const getRadioStation = async () => {
  const response = await radioBrowserApi.get<RadioStation>("stations/search");
  return response.data;
};

export default getRadioStation;
