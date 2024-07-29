/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect, useState } from "react";
import { OrderContext } from "../../ContextAPIs/OrderProvider";
import useSmallScreen from "../../Hooks/useSmallScreen";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import About from "../../Pages/About/About";
import Achievements from "../../Pages/Achievements/Achievements";
import Awards from "../../Pages/Awards/Awards";
import Videos from "../../Pages/Videos/Videos";
import CharitableWork from "../../Pages/CharitableWork/CharitableWork";
import Quotes from "../../Pages/Quotes/Quotes";
import { BasicContext } from "../../ContextAPIs/BasicProvider";

const SubNavbar = () => {
  const { bangla, setBangla } = useContext(BasicContext);
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
    <div>
      {isSmallScreen && (
        <div className=" h-fit mt-mt_medium ">
          <div className="flex flex-col md:flex-row items-center gap-gap_primary  w-fit mx-auto">
            <div className="rounded ">
              <img
                className="mb-6  lg:h-[500px]  lg:w-[400px] md:h-[300px] md:w-[250px] "
                src="https://barristermonwar.com/frontend/assets/images/545.jpg"
                alt="Barrister Monwar Hossain"
              />
            </div>
            <div className="flex flex-col justify-between padding_left padding_right space-y-2 cursor-text">
              <p>
                <span className="font-semibold">Father: </span>
                Dr. Mohammad Nurul Huda
              </p>
              <p>
                <span className="font-semibold">Mother: </span>Akter Jahan
              </p>
              <p>
                <span className="font-semibold">Spouse: </span>Lutfun Nahar
                Leena
              </p>
              <p>
                <span className="font-semibold">Siblings: </span>7 Brothers, 2
                Sisters
              </p>
              <p>
                <span className="font-semibold">Children: </span>1 Daughter and
                1 Son
              </p>
              <p>
                <span className="font-semibold">Email: </span>
                barrister.monwar@gmail.com
              </p>
              <p>
                <span className="font-semibold">Place of Birth: </span>Muradpur,
                Chattagram
              </p>
            </div>
          </div>

          <Link
            target="_blank"
            rel="noopener noreferrer"
            to={"https://ebook.barristermonwar.com/"}
            className=""
          >
            <div className=" my-3 space-y-2  w-fit mx-auto shadow-xl rounded-md hover:scale-[1.02] transition-all relative">
              <div className="text-center border-y-2 border-gray-300">
                <p>A BOOK OF HONOUR</p>
                <p className="font-semibold">"INDOMITABLE MONWAR HOSSAIN"</p>
              </div>

              <div className="my-2">
                <div className="flex items-center justify-around  ">
                  <div className="flex flex-col items-center">
                    <img
                      className="w-full h-[240px] md:h-[300px]"
                      src="https://barristermonwar.com/frontend/assets/images/book_edition_2.png"
                      alt="Book By Barrister Monwar Hossain"
                    />
                    <p className="text-xs mt-1 font-semibold ">
                      Second Edition
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      className="w-full h-[240px] md:h-[300px]"
                      src="https://barristermonwar.com/frontend/assets/images/book1.jpg"
                      alt=""
                    />
                    <p className="text-xs mt-1 font-semibold ">First Edition</p>
                  </div>
                </div>
              </div>
              <div className="">
                {/* <p className="text-sm">A Book of honour for the prominent lawyer, well Known social activist in Bangladesh and..</p> */}
                <button className="p-p_8px text-xs w-full bg-_button  text-white my_primary active:scale-95 transition-all">
                  Read Books
                </button>
              </div>
            </div>
          </Link>
        </div>
      )}

      <div>
        <Tabs>
          <TabList className="my-mt_24px bg-white  flex justify-evenly ">
            <Tab
              onClick={() => handleClick("/")}
              className={`hover:shadow-md  px-pt_8px lg:px-0 py-p_12px w-full text-center text-xs  md:text-base  ${
                selected === "/"
                  ? "bg-bg_selected  text-white hover:text-white font-medium hover:bg-bg_selected "
                  : "text-[#585c66] font-medium hover:text-[#ffffff]  hover:bg-bg_selected transition-all  "
              }`}
            >
              <Link to={"/"}>About</Link>
            </Tab>
            <Tab
              onClick={() => handleClick("/achievements")}
              to={"/achievements"}
              className={`hover:shadow-md  px-pt_8px lg:px-0 py-p_12px w-full text-center text-xs  md:text-base ${
                selected === "/achievements"
                  ? "bg-bg_selected  text-white hover:text-white font-medium hover:bg-bg_selected "
                  : "text-[#585c66] font-medium hover:text-[#ffffff]  hover:bg-bg_selected transition-all  "
              }`}
            >
              <Link>Achievements</Link>
            </Tab>
            <Tab
              onClick={() => handleClick("/awards")}
              className={`hover:shadow-md  px-pt_8px lg:px-0 py-p_12px w-full text-center text-xs  md:text-base ${
                selected === "/awards"
                  ? "bg-bg_selected  text-white hover:text-white font-medium hover:bg-bg_selected "
                  : "text-[#585c66] font-medium hover:text-[#ffffff]  hover:bg-bg_selected transition-all  "
              }`}
            >
              <Link className="flex gap-1 items-center justify-center">
                Awards <span className="hidden lg:block">Gallery</span>
              </Link>
            </Tab>
            <Tab
              onClick={() => handleClick("/work")}
              className={`hover:shadow-md  px-pt_8px lg:px-0 py-p_12px w-full text-center text-xs  md:text-base ${
                selected === "/work"
                  ? "bg-bg_selected  text-white hover:text-white font-medium hover:bg-bg_selected "
                  : "text-[#585c66] font-medium hover:text-[#ffffff]  hover:bg-bg_selected transition-all  "
              }`}
            >
              <Link className="flex gap-1 items-center justify-center">
                <span className="hidden lg:block">Charitable</span> Work
              </Link>
            </Tab>
            <Tab
              onClick={() => handleClick("/quotes")}
              className={`hover:shadow-md  px-pt_8px lg:px-0 py-p_12px w-full text-center text-xs  md:text-base ${
                selected === "/quotes"
                  ? "bg-bg_selected  text-white hover:text-white font-medium hover:bg-bg_selected "
                  : "text-[#585c66] font-medium hover:text-[#ffffff]  hover:bg-bg_selected transition-all  "
              }`}
            >
              <Link>Quotes</Link>
            </Tab>
          </TabList>

          <TabPanel>
            <About />
          </TabPanel>
          <TabPanel>
            <Achievements />
          </TabPanel>
          <TabPanel>
            <Awards />
          </TabPanel>
          <TabPanel>
            <CharitableWork />
          </TabPanel>
          <TabPanel>
            <Quotes />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default SubNavbar;
