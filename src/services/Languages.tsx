import { radioBrowserApi } from "./radioBrowserApi";

const getLanguages = async () => {
  const response = await radioBrowserApi.get("languages");
  return response.data;
};

export default getLanguages;
