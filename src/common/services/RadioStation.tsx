import { RadioStation } from "../interfaces/RadioStation";
import { radioBrowserApi } from "./radioBrowserApi";

const getRadioStation = async (id: string) => {
  const response = await radioBrowserApi.get<RadioStation[]>(
    "stations/byuuid",
    {
      params: {
        uuids: id,
      },
    }
  );

  return response.data[0];
};

export default getRadioStation;
