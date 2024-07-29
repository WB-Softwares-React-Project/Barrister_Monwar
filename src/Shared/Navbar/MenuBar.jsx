/* eslint-disable react/no-unescaped-entities */

import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import logo from '../../assets/Logo/Logo.png'
import useHasAccess from "../../Hooks/useHasAccess";
import { OrderContext } from "../../ContextAPIs/OrderProvider";
import useSmallScreen from "../../Hooks/useSmallScreen";

const MenuBar = () => {
  const [selected, setSelected] = useState('');
  const location = useLocation();
  const { setOpen } = useContext(OrderContext);
  const [isSmallScreen] = useSmallScreen();


  useEffect(() => {
    setSelected(location.pathname);
  }, [location.pathname]);




  return (
    <div className="shadow-md bg-_white h-screen overflow-y-auto p-pl_16px">
      <div className="bg-_white rounded  w-full ">
        <img className="mb-mb_medium  h-[500px]  w-[400px] " src="https://barristermonwar.com/frontend/assets/images/545.jpg" alt="Barrister Monwar Hossain" />
      </div>
      <div className="flex flex-col justify-between padding_left padding_right space-y-1 cursor-text">
        <p>
          <span className="font-semibold">Father: </span>
          Dr. Mohammad Nurul Huda
        </p>
        <p><span className="font-semibold">Mother: </span>Akter Jahan</p>
        <p><span className="font-semibold">Spouse: </span>Lutfun Nahar Leena</p>
        <p><span className="font-semibold">Siblings: </span>7 Brothers, 2 Sisters</p>
        <p><span className="font-semibold">Children: </span>1 Daughter and 1 Son</p>
        <p><span className="font-semibold">Email: </span>barrister.monwar@gmail.com</p>
        <p><span className="font-semibold">Place of Birth: </span>Muradpur, Chattagram</p>
      </div>

      <Link target="_blank" rel="noopener noreferrer" to={"https://ebook.barristermonwar.com/"} className="">
        <div className="my-my_medium space-y-2 shadow-xl rounded-md hover:scale-[1.02] transition-all relative">
          <div className="text-center border-y-2 border-gray-300">
            <p>A BOOK OF HONOUR</p>
            <p className="font-semibold">"INDOMITABLE MONWAR HOSSAIN"</p>
          </div>

          <div className="my-my_medium">
            <div className="flex items-center justify-between  gap-gap_8px">
              <div className="flex flex-col items-center">
                <img className="w-full  h-[240px]" src="https://barristermonwar.com/frontend/assets/images/book_edition_2.png" alt="Book By Barrister Monwar Hossain" />
                <p className="text-xs mt-mt_4px font-semibold ">Second Edition</p>
              </div>
              <div className="flex flex-col items-center">
                <img className="w-full  h-[240px]" src="https://barristermonwar.com/frontend/assets/images/book1.jpg" alt="" />
                <p className="text-xs mt-mt_4px font-semibold ">First Edition</p>
              </div>
            </div>

          </div>
          <div className="">
            {/* <p className="text-sm">A Book of honour for the prominent lawyer, well Known social activist in Bangladesh and..</p> */}
            <button className="p-p_8px text-xs w-full bg-_button  text-white my_primary active:scale-95 transition-all">Read Books</button>
          </div>
        </div>

      </Link>


    </div>
  );
};

export default MenuBar;

