import { RadioStation } from "../interfaces/RadioStation";
import { radioBrowserApi } from "./radioBrowserApi";

export const getRadioStations = async (name?: string) => {
  const response = await radioBrowserApi.get<RadioStation[]>(
    "stations/search",
    {
      params: {
        limit: 10,
        order: "votes",
        reverse: "true",
        hidebroken: "true",
        offset: 0,
        name: name || "",
      },
    }
  );
  return response.data;
};
