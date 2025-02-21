import { RadioStation } from "../interfaces/RadioStation";
import { radioBrowserApi } from "./radioBrowserApi";

export const getRadioStations = async (
  name?: string,
  country?: string,
  language?: string,
  page?: string
) => {
  const response = await radioBrowserApi.get<RadioStation[]>(
    "stations/search",
    {
      params: {
        limit: 10,
        order: "votes",
        reverse: "true",
        hidebroken: "true",
        offset: page || 0,
        name: name || "",
        country: country || "",
        language: language?.toLowerCase() || "",
      },
    }
  );
  return response.data;
};
