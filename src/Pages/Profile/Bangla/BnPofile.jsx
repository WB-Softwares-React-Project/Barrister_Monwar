import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { OrderContext } from "../../../ContextAPIs/OrderProvider";
import useSmallScreen from "../../../Hooks/useSmallScreen";
import About from "../../About/About";
import Achievements from "../../Achievements/Achievements";
import Awards from "../../Awards/Awards";
import CharitableWork from "../../CharitableWork/CharitableWork";
import Quotes from "../../Quotes/Quotes";
import AboutBangla from "../ProfilePages/AboutBangal/AboutBangla";
import PoliticalLife from "../ProfilePages/Life_of_ Political/PoliticalLife";
import Honor from "../ProfilePages/Honor/Honor";
import SocialWork from "../ProfilePages/SocialWork/SocialWork";
import HumanitarianWork from "../ProfilePages/HumanitarianWork/HumanitarianWork";
import PoliticalWork from "../ProfilePages/PoliticalWork/PoliticalWork";

const BnPofile = () => {
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
      <div className="">
        <Tabs>
          <TabList className="my-mt_24px bg-white flex flex-row overflow-auto items-center min-w-full">
            <Tab
              onClick={() => handleClick("/profile-bangla")}
              className={`hover:shadow-md text-nowrap   min-w-fit px-pt_8px lg:px-0 py-p_12px w-full text-center text-xs  md:text-base  ${
                selected === "/profile-bangla"
                  ? "bg-bg_selected  text-white hover:text-white font-medium hover:bg-bg_selected "
                  : "text-[#585c66] font-medium hover:text-[#ffffff]  hover:bg-bg_selected transition-all "
              }`}
            >
              সংক্ষিপ্ত পরিচয়
            </Tab>
            <Tab
              onClick={() => handleClick("/achievements")}
              to={"/achievements"}
              className={`hover:shadow-md  text-nowrap  min-w-fit  px-pt_8px lg:px-0 py-p_12px w-full text-center text-xs  md:text-base ${
                selected === "/achievements"
                  ? "bg-bg_selected  text-white hover:text-white font-medium hover:bg-bg_selected "
                  : "text-[#585c66] font-medium hover:text-[#ffffff]  hover:bg-bg_selected transition-all  "
              }`}
            >
              রাজনৈতিক জীবন
            </Tab>
            <Tab
              onClick={() => handleClick("/honor")}
              className={`hover:shadow-md text-nowrap  min-w-fit  px-pt_8px lg:px-0 py-p_12px w-full text-center text-xs  md:text-base ${
                selected === "/honor"
                  ? "bg-bg_selected  text-white hover:text-white font-medium hover:bg-bg_selected "
                  : "text-[#585c66] font-medium hover:text-[#ffffff]  hover:bg-bg_selected transition-all "
              }`}
            >
              সম্মাননা
            </Tab>
            <Tab
              onClick={() => handleClick("/social-work")}
              className={`hover:shadow-md text-nowrap  min-w-fit  px-pt_8px lg:px-0 py-p_12px w-full text-center text-xs  md:text-base ${
                selected === "/social-work"
                  ? "bg-bg_selected  text-white hover:text-white font-medium hover:bg-bg_selected "
                  : "text-[#585c66] font-medium hover:text-[#ffffff]  hover:bg-bg_selected transition-all "
              }`}
            >
              সামাজিক কর্মকান্ড
            </Tab>
            <Tab
              onClick={() => handleClick("/humanitarian-work ")}
              className={`hover:shadow-md text-nowrap  min-w-fit  px-pt_8px lg:px-0 py-p_12px w-full text-center text-xs  md:text-base ${
                selected === "/humanitarian-work "
                  ? "bg-bg_selected  text-white hover:text-white font-medium hover:bg-bg_selected "
                  : "text-[#585c66] font-medium hover:text-[#ffffff]  hover:bg-bg_selected transition-all "
              }`}
            >
              মানবিক কর্মকান্ড
            </Tab>
            <Tab
              onClick={() => handleClick("/political-work ")}
              className={`hover:shadow-md text-nowrap  min-w-fit  px-pt_8px lg:px-0 py-p_12px w-full text-center text-xs  md:text-base ${
                selected === "/political-work "
                  ? "bg-bg_selected  text-white hover:text-white font-medium hover:bg-bg_selected "
                  : "text-[#585c66] font-medium hover:text-[#ffffff]  hover:bg-bg_selected transition-all "
              }`}
            >
              আওয়ামীলীগের কর্মকান্ড
            </Tab>
          </TabList>

          <TabPanel>
            <AboutBangla />
          </TabPanel>
          <TabPanel>
            <PoliticalLife />
          </TabPanel>
          <TabPanel>
            <Honor />
          </TabPanel>
          <TabPanel>
            <SocialWork />
          </TabPanel>
          <TabPanel>
            <HumanitarianWork />
          </TabPanel>
          <TabPanel>
            <PoliticalWork />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default BnPofile;
