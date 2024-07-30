import { Outlet } from "react-router-dom";
import NavbarTop from "../Shared/Navbar/NavbarTop";
import MenuBar from "../Shared/Navbar/MenuBar";
import { useContext } from "react";
import { OrderContext } from "../ContextAPIs/OrderProvider";
import useSmallScreen from "../Hooks/useSmallScreen";
import Copyright from "../Shared/Footer/Copyright";
import NavLink from "../Shared/Navbar/NavLink";

const Layout = () => {
  const { open, sidebarRef } = useContext(OrderContext);
  const [isSmallScreen] = useSmallScreen();

  return (
    <div className="bg-primary overflow-hidden overscroll-none ">
      <div className="w-full h-screen justify-between mx-auto overflow-y-auto overscroll-none flex ">
        <div className=" flex items-start w-full">
          <div
            ref={sidebarRef}
            className={`lg:relative  fixed top-0 lg:top-0 ${open ? "left-0" : "-left-[100%]"
              } duration-300 ${isSmallScreen ? "w-[250px] h-screen" : "w-[450px] "} z-50 h-[calc(100vh)] overflow-y-auto overscroll-none`}
          >
            {
              isSmallScreen ? <NavLink /> : <MenuBar></MenuBar>
            }

          </div>
          <div className="w-full">
            <NavbarTop />
            <div className="overflow-y-auto overscroll-none h-[calc(100vh-52px)] ">
              <div className="min-h-[calc(100vh-140px)] md:px-p_24px px-p_12px overscroll-none ">
                <Outlet />
              </div>
              <div className="">
              <Copyright />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
