import { Outlet } from "react-router-dom";
import MainSider from "../static/MainSider";
import { useSelector } from "react-redux/es/exports";

const Layout = () => {
  const toggle = useSelector((state: any) => state.toggleState);

  // ${toggle ? "calc(100vw-70px)" : "calc(100vw-160px)" }

  return (
    <div className="flex">
      <MainSider />
      <div className="w-[100vw] flex justify-end ">
        <div
          className={`
        w-[${
          toggle ? "calc(100vw-70px)" : "calc(100vw-160px)"
        }] pl-2 transition-all duration-300
        `}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
