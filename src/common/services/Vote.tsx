import { radioBrowserApi } from "./radioBrowserApi";

const upVote = async () => {
  const response = await radioBrowserApi.post("vote");
  return response.data;
};

export default upVote;
