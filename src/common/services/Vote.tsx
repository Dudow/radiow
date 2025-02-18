import { radioBrowserApi } from "./radioBrowserApi";

const upVote = async (stationId: string) => {
  const response = await radioBrowserApi.post(`vote/${stationId}`);
  return response;
};

export default upVote;
