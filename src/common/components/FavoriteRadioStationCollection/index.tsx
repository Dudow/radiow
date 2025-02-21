import { Dispatch, SetStateAction } from "react";
import { RadioStation } from "../../interfaces/RadioStation";
import RadioStationItem from "../RadioStationItem";
import { useFavoriteRadioStationCollection } from "./use";

interface FavoriteRadioStationCollectionProps {
  setSelectedstation: Dispatch<SetStateAction<RadioStation>>;
}

const FavoriteRadioStationCollection = ({
  setSelectedstation,
}: FavoriteRadioStationCollectionProps) => {
  const { filteredFavoriteStations } = useFavoriteRadioStationCollection();

  return filteredFavoriteStations.map((station, index) => (
    <RadioStationItem
      setSelectedstation={setSelectedstation}
      station={station}
      index={index}
    />
  ));
};

export default FavoriteRadioStationCollection;
