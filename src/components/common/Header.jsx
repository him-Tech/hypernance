import { Menuicon, Notficationicon, Searchicon } from "./icon";
import mainlogo from "../../assets/img/jordan-stlouis-img.png";
import { Link } from "react-router-dom";

const Header = ({ setActive }) => {
  return (
    <div className="w-full justify-between rounded-[16px] pr-10 lg:rounded-[0px_32px_32px_0px] flex items-center gap-2 px-4 2xl:px-10 py-3 lg:py-6">
      <h1 className="text-black text-[24px] font-semibold">Dashboard</h1>
      <div className="flex items-center gap-[22.5px]">
        <Link to={`#`}>
          <Searchicon />
        </Link>
        <Link to={`#`}>
          {" "}
          <Notficationicon />
        </Link>
        <div className="flex  gap-[10px]">
          <img
            className="rounded-full w-[30px] h-[30px]"
            src={mainlogo}
            alt="main"
          />
          <h2 className="text-[#171B26] text-[16px] font-normal">
            Jordan Stlouis
          </h2>
        </div>
        <button
          className="lg:hidden"
          type="submit"
          onClick={() => setActive(true)}
        >
          <Menuicon />
        </button>
      </div>
    </div>
  );
};

export default Header;
