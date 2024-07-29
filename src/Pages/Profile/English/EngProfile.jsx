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
import SharedPanel from "./SharedPanel";


const EngProfile = () => {
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


    const handleClick = (path) => {
        setSelected(path);
        if (isSmallScreen) {
            setOpen(false)
        }
    };

    const Summary = [
        "➢ He is Head of the Chambers of MM Hossain in London and serving more than two decades as Human Rights, Civil and U.K.Immigration Lawyer.He has offices in Dhaka, Chattogram and Sylhet, and legal associates in the USA, Canada and Australia.",
        "➢ He is well known in the Bangladesh community in the U.K. and Europe. He helped approximately 50,000 Bangladeshi migrants including their family members in the U.K. to settle- they send regularly huge remittances to Bangladesh.",
        "➢ He has helped many migrants in England with any fees.",
        "➢ He has built a very high reputation in the legal field, especially in the U.K. immigration and human rights law. He is global known to the Bangladesh expatriates.",
        "➢ He first pioneered the live legal tv show in London on the Bangla TV which was broadcasted all the Europe, USA and Middle East. He has continued to do the show over the last 20 years which benefited thousands of migrants by receiving free advice and guidance. Currently he is doing the show titled “Law with Barrister Monwar Hossain” on the ION tv.0",
        "➢ His legal practice has been proved to be the life changing for thousands of migrants in the U.K. and Europe."
    ];
    const Proffesion = [
        "➢ Barrister Monwar Hossain is a Practicing Barrister in England and member of the Lincoln’s Inn. He has the higher court rights of audiences in England. His practice has the five star ranking on the Google Reviews. His legal practice has gained a very high reputation through honesty and sincerity for successes in the legal profession in the U.K. Also well known in Bangladesh and different countries.",
        "➢ He is Head of the Chambers of MM Hossain in London and serving more than two decades as Human Rights, Civil and U.K.Immigration Lawyer.He has offices in Dhaka, Chattogram and Sylhet, and legal associates in the USA, Canada and Australia.",
        "➢ He is well known in the Bangladesh community in the U.K. and Europe. He helped approximately 50,000 Bangladeshi migrants including their family members in the U.K. to settle- they send regularly huge remittances to Bangladesh.",
        "➢ He has helped many migrants in England with any fees.",
        "➢ He has built a very high reputation in the legal field, especially in the U.K. immigration and human rights law. He is global known to the Bangladesh expatriates.",
        "➢ He first pioneered the live legal tv show in London on the Bangla TV which was broadcasted all the Europe, USA and Middle East. He has continued to do the show over the last 20 years which benefited thousands of migrants by receiving free advice and guidance. Currently he is doing the show titled “Law with Barrister Monwar Hossain” on the ION tv.",
        "➢ His legal practice has been proved to be the life changing for thousands of migrants in the U.K. and Europe.",
    ];
    const Awards = [
        "➢ Barrister Monwar Hossain received the first ever “Who’s Who Bangladesh” award in 2016 as NRB Professional along with other eleven top personalities including Sir Fazle Hassan Abed, Professor Anisuzzaman, Shaikh Siraj, Akram Khan and others in various fields.",
        "➢ In 2016 he received the British-Bangladeshi Business Award for successes in the Legal Profession in presence of the then U.K. Prime Minister David Cameron",
        "➢ In 2017 he received the FOBANA award held in Miami from the Federation of Bangladeshi Associations in North America",
        "➢ in 2014 he received the Business award as “Best Achiever in East London’s Legal Profession”.",
        "➢ In 2023 he received the “NRB Professional of the Year” award in the Business Excellence Awards ceremony organised by the organised by the Orthokontho news media.",
        "➢ In 2022 he received the Lifetime Achievements Award from the GCA in London for his relentless efforts to unite Chittagonians in the U.K. and successfully founding the Greater Chattogram Association UK as one of the largest community organisations in the Europe, and also for his professional successes."
    ]
    const Social = [
        "➢ He is currently Secretary General of Human Rights International, based in the UK. Involved since 1994, Founding President: Bob Perry MP of Liverpool.",
        "➢ Attended the UN Human Rights Commission’s general meetings, conventions and NGO Forums.",
        "➢ Chairman, Chattagram Nagorik Forum (CCF): founded in 2015 and played an important role for resolving the water logging problem in Chattogram city",
        "➢ Founding President and Trustee Chairman: Greater Chattogram Association UK",
        "➢ Chairman, International Chattogram Co-Ordination Committee. A committee by all Chattogram associations worldwide to celebrate World Chattogram Utsob.",
        "➢ Convenor: British-Bangladeshi Forum.",
        "➢ Founding General Secretary of Brihattor Chattogram Unnoyan Sangram Committee. This created a popular successful Chattogram unnyan andolon during Gen Ershad regime and contributed a lot for the development of the greater Chattogram.",
        "➢ Founder of Greater Chattogram Youth Forum.",
        "➢ President: ABM Mohiuddin Chowdhury Foundation U.K.",
        "➢ Former central student leader in Bangladesh and initiated the movement in Chattogram against autocratic government",
        "➢ Detained twice for long periods for fighting for democracy in Bangladesh during the regime of General Ershad.",
        "➢ One of the forefront leaders of 15 Parties Alliance in 1990 in Chattogram.",
        "➢ Former President: Bangladesh Students Union, University of Chattogram - Former Vice President and Acting President of Central Committee of Bangladesh Students Union.",
        "➢ Founding Convenor and Founding General Secretary of Nasirabad Government High School Ex-Students Association.",
        " Former and so far the last directly elected General Secretary: Nasirabad Government High School Chatra Sangshad 1974-76."
    ]
    const Activities = [
        "➢ Advisor: monthly the Diplomat news magazine, Dhaka.",
        "➢ Freelance Journalist and contributor.",
        "➢ Social Media blogger",
        "➢ Visited more than 40 countries of the world to attend seminars, meetings, social events and as tourist.",
        "➢ Motivational Speaker for citizen rights awareness, moral values and career advancement. His speeches have been highly acceptable and influential for the audiences.",
        "➢ Donated a considerable amount of funds and also facilitated funds for many charitable projects, schools, orphanages, mosques and other religious activities in Bangladesh and other countries.",
        "➢ Sponsor for the UNICEF children education and orphanages."
    ]
    return (
        <div>
            <div >
                <Tabs  >
                    <TabList className="my-mt_24px bg-white  grid grid-cols-5 overflow-auto items-center">
                        <Tab onClick={() => handleClick('/profile-english')} className={`hover:shadow-md  px-pt_8px lg:px-0 py-p_12px w-full text-center text-xs  md:text-base  ${selected === '/profile-english' ? 'bg-bg_selected  text-white hover:text-white font-medium hover:bg-bg_selected ' : 'text-[#585c66] font-medium hover:text-[#ffffff]  hover:bg-bg_selected transition-all  '}`}>
                            <Link >

                                Summary
                            </Link>
                        </Tab>
                        <Tab onClick={() => handleClick('/achievements')} to={'/achievements'} className={`hover:shadow-md  px-pt_8px lg:px-0 py-p_12px w-full text-center text-xs  md:text-base ${selected === '/achievements' ? 'bg-bg_selected  text-white hover:text-white font-medium hover:bg-bg_selected ' : 'text-[#585c66] font-medium hover:text-[#ffffff]  hover:bg-bg_selected transition-all  '}`} >
                            <Link >
                                Profession
                            </Link>
                        </Tab>
                        <Tab onClick={() => handleClick('/awards')} className={`hover:shadow-md  px-pt_8px lg:px-0 py-p_12px w-full text-center text-xs  md:text-base ${selected === '/awards' ? 'bg-bg_selected  text-white hover:text-white font-medium hover:bg-bg_selected ' : 'text-[#585c66] font-medium hover:text-[#ffffff]  hover:bg-bg_selected transition-all  '}`}>
                            <Link className="">
                                Awards
                            </Link>
                        </Tab>
                        <Tab onClick={() => handleClick('/work')} className={`hover:shadow-md  px-pt_8px lg:px-0 py-p_12px w-full text-center text-xs  md:text-base ${selected === '/work' ? 'bg-bg_selected  text-white hover:text-white font-medium hover:bg-bg_selected ' : 'text-[#585c66] font-medium hover:text-[#ffffff]  hover:bg-bg_selected transition-all  '}`}>
                            <Link className="text-nowrap">
                                Social work
                            </Link>
                        </Tab>
                        <Tab onClick={() => handleClick('/quotes')} className={`hover:shadow-md  px-pt_8px lg:px-0 py-p_12px w-full text-center text-xs  md:text-base ${selected === '/quotes' ? 'bg-bg_selected  text-white hover:text-white font-medium hover:bg-bg_selected ' : 'text-[#585c66] font-medium hover:text-[#ffffff]  hover:bg-bg_selected transition-all  '}`}>
                            <Link>
                                Activities
                            </Link>
                        </Tab>
                    </TabList>

                    <TabPanel>
                        <SharedPanel title={"Barrister Monwar Hossain"} text={Summary} />
                    </TabPanel>
                    <TabPanel>
                        <SharedPanel title={"Profession"} text={Proffesion} />
                    </TabPanel>
                    <TabPanel>
                        <SharedPanel title={"Awards received"} text={Awards} />
                    </TabPanel>
                    <TabPanel>
                        <SharedPanel title={"Social and Human Rights Activities"} text={Social} />
                    </TabPanel>
                    <TabPanel>
                        <SharedPanel title={"Others Activities"} text={Activities} />
                    </TabPanel>
                </Tabs>


            </div>
        </div>
    );
};

export default EngProfile;