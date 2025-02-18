import { RadioStation } from "../interfaces/RadioStation";
import { radioBrowserApi } from "./radioBrowserApi";

const getRadioStations = async () => {
  const response = await radioBrowserApi.get<RadioStation[]>("stations", {
    params: {
      limit: 10,
      order: "votes",
      reverse: "true",
      hidebroken: "true",
    },
  });
  return response.data;
};

export default getRadioStations;
