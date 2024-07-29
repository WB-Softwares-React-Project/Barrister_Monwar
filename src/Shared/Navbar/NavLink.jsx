import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useSmallScreen from "../../Hooks/useSmallScreen";
import { OrderContext } from "../../ContextAPIs/OrderProvider";

const NavLink = () => {
  const [selected, setSelected] = useState("");
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
        document.addEventListener("mousedown", handleClickOutside);
      } else {
        document.removeEventListener("mousedown", handleClickOutside);
      }
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [open, isSmallScreen]);

  useEffect(() => {
    if (isSmallScreen) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isSmallScreen, setOpen]);

  const handleClick = (path) => {
    setSelected(path);
    if (isSmallScreen) {
      setOpen(false);
    }
  };
  return (
    <div
      className={`list-none bg-white h-full ${
        isSmallScreen ? "flex flex-col" : "grid grid-cols-8"
      }  `}
    >
      <Link
        onClick={() => handleClick("/")}
        className={`hover:bg-bg_selected  px-p_12px py-pb_secondary w-full text-center col-span-2 ${
          selected === "/"
            ? "bg-bg_selected  text-white hover:text-white font-medium hover:bg-bg_selected "
            : "text-[#585c66] font-medium  hover:text-[#ffffff]  hover:bg-bg_selected transition-all  "
        }`}
        to={"/"}
      >
        Barrister Monwar Hossain
      </Link>
      <Link
        onClick={() => handleClick("/profile-bangla")}
        to={"/profile-bangla"}
        className={`hover:bg-bg_selected  px-p_12px py-pb_secondary w-full text-center  ${
          selected === "/profile-bangla"
            ? "bg-bg_selected  text-white hover:text-white font-medium hover:bg-bg_selected "
            : "text-[#585c66] font-medium  hover:text-[#ffffff]  hover:bg-bg_selected transition-all  "
        }`}
      >
        Profile(Bangla)
      </Link>
      <Link
        onClick={() => handleClick("/profile-english")}
        className={`hover:bg-bg_selected  px-p_12px py-pb_secondary w-full text-center  ${
          selected === "/profile-english"
            ? "bg-bg_selected  text-white hover:text-white font-medium hover:bg-bg_selected "
            : "text-[#585c66] font-medium  hover:text-[#ffffff]  hover:bg-bg_selected transition-all  "
        }`}
        to={"/profile-english"}
      >
        Profile(English)
      </Link>

      <Link
        target="_blank"
        rel="noopener noreferrer"
        to={"https://ebook.barristermonwar.com/"}
        className={`hover:bg-bg_selected  px-p_12px py-pb_secondary w-full text-center  ${
          selected === "/quotes"
            ? "bg-bg_selected  text-white hover:text-white font-medium hover:bg-bg_selected "
            : "text-[#585c66] font-medium  hover:text-[#ffffff]  hover:bg-bg_selected transition-all  "
        }`}
      >
        Book
      </Link>
      <Link
        onClick={() => handleClick("/gallery")}
        className={`hover:bg-bg_selected  px-p_12px py-pb_secondary w-full text-center  ${
          selected === "/gallery"
            ? "bg-bg_selected  text-white hover:text-white font-medium hover:bg-bg_selected "
            : "text-[#585c66] font-medium  hover:text-[#ffffff]  hover:bg-bg_selected transition-all  "
        }`}
        to={"/gallery"}
      >
        Gallery
      </Link>
      <Link
        onClick={() => handleClick("/videos")}
        className={`hover:bg-bg_selected  px-p_12px py-pb_secondary w-full text-center  ${
          selected === "/videos"
            ? "bg-bg_selected  text-white hover:text-white font-medium hover:bg-bg_selected "
            : "text-[#585c66] font-medium  hover:text-[#ffffff]  hover:bg-bg_selected transition-all  "
        }`}
        to={"/videos"}
      >
        Videos
      </Link>
      <Link
        onClick={() => handleClick("/blogs")}
        className={`hover:bg-bg_selected  px-p_12px py-pb_secondary w-full text-center  ${
          selected === "/blogs"
            ? "bg-bg_selected  text-white hover:text-white font-medium "
            : "text-[#585c66] font-medium hover:text-[#ffffff]  hover:bg-bg_selected transition-all "
        }`}
        to={"/blogs"}
      >
        Blogs
      </Link>
    </div>
  );
};

export default NavLink;
