import { Searcher } from "../Searcher";
import logo from "../../assets/spotify-icon.svg";

export const Header: React.FC = () => {
  return (
    <div className="p-2 pb-0 flex justify-between h-14">
      <div className="flex justify-center items-center pl-3">
        <img src={logo} alt="" className="w-8 h-8 grayscale" />
      </div>
      <Searcher />
      <div></div>
    </div>
  );
};
