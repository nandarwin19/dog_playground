import { VscSparkle } from "react-icons/vsc";
import LightIcon from "./LightIcon";

const Header = ({ handleSparkleToggle }) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <p className="text-red-600 text-sm font-bold">G.</p>

        <div>
          <VscSparkle
            className="ml-2 h-5 w-5 inline-flex items-center text-sm font-medium
          text-red-600 cursor-pointer"
            aria-hidden="true"
            onClick={handleSparkleToggle}
          />
        </div>
      </div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 ">
        <LightIcon name="LuDog" color="#fa0202" fontSize="xl" />
      </div>
    </>
  );
};

export default Header;
