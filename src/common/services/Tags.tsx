import { Tag } from "../interfaces/Tag";
import { radioBrowserApi } from "./radioBrowserApi";

const getTags = async () => {
  const response = await radioBrowserApi.get<Tag[]>("tags");
  return response.data;
};

export default getTags;
