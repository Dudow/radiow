import { RadioStation } from "../interfaces/RadioStation";
import { radioBrowserApi } from "./radioBrowserApi";

const getRadioStations = async () => {
  const response = await radioBrowserApi.get<RadioStation[]>("stations");
  return response.data;
};

export default getRadioStations;
