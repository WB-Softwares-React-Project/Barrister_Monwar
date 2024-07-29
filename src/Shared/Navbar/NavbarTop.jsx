import { MdMenu } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { OrderContext } from "../../ContextAPIs/OrderProvider";
import { Link, useNavigate } from "react-router-dom";
import useSmallScreen from "../../Hooks/useSmallScreen";
import MenuBar from "./MenuBar";
import NavLink from "./NavLink";

const NavbarTop = () => {
  const [selected, setSelected] = useState('');
  const { open, setOpen, sidebarRef } = useContext(OrderContext);
  const [isSmallScreen] = useSmallScreen();


  useEffect(() => {
    setSelected(location.pathname);
  }, [location.pathname]);



  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (isSmallScreen) {
      if (open) {
        document.addEventListener('mousedown', handleClickOutside);
      } else {
        document.removeEventListener('mousedown', handleClickOutside);
      }
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [open, isSmallScreen]);

  useEffect(() => {
    if (isSmallScreen) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }, [isSmallScreen, setOpen])

  return (
    // <div>
    //   Top Navbar
    // </div>
    <div className="bg-white  w-full h-full shadow-md border-b-1 ">

      <ul className="flex items-center gap-gap_primary justify-between px-pt_secondary py-2 lg:py-0">
        <div className="flex items-center gap-gap_primary text-text_sm font-semibold  lg:hidden ">
          <MdMenu
            onClick={() => setOpen(!open)}
            className="text-text_xxl cursor-pointer text-black"
          />
        </div>
        {
          isSmallScreen && <p className="w-fit mx-auto  font-bold">BARRISTER MONWAR HOSSAIN</p>
        }
        <div className="hidden lg:block"></div>
      </ul>

      {
        !isSmallScreen && <NavLink />
      }

    </div >
  );
};

export default NavbarTop;
