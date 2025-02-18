import { radioBrowserApi } from "./radioBrowserApi";

const getTags = async () => {
  const response = await radioBrowserApi.get("tags");
  return response.data;
};

export default getTags;
