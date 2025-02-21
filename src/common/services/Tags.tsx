import { Tag } from "../interfaces/Tag";
import { radioBrowserApi } from "./radioBrowserApi";

const getTags = async () => {
  const response = await radioBrowserApi.get<Tag[]>("tags", {
    params: {
      limit: 10,
      order: "stationcount",
      reverse: "true",
      hidebroken: "true",
    },
  });
  return response.data;
};

export default getTags;
