/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import useSmallScreen from "../../Hooks/useSmallScreen";
import { useContext, useEffect, useState } from "react";
import { OrderContext } from "../../ContextAPIs/OrderProvider";


const About = () => {

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



    return (
        <div className="px-pl_16px pb-pb_16px pt-pt_16px mt-mt_24px bg-white">
            {/* {
                isSmallScreen && <div className=" h-fit ">
                    <div className="bg-_white rounded  w-full ">
                        <img className="mb-mt_24px  h-[500px]  w-[400px] " src="https://barristermonwar.com/frontend/assets/images/545.jpg" alt="Barrister Monwar Hossain" />
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
                        <div className=" my-mb_12px space-y-3 py-p_12px shadow-xl rounded-md hover:scale-[1.02] transition-all relative">
                            <div className="text-center border-y-2 border-gray-300">
                                <p>A BOOK OF HONOUR</p>
                                <p className="font-semibold">"INDOMITABLE MONWAR HOSSAIN"</p>
                            </div>

                            <div className="my-2">
                                <div className="flex items-center justify-between  gap-2">
                                    <div className="flex flex-col items-center">
                                        <img className="w-full  h-[240px]" src="https://barristermonwar.com/frontend/assets/images/book_edition_2.png" alt="Book By Barrister Monwar Hossain" />
                                        <p className="text-text_12px mt-mt_4px font-semibold ">Second Edition</p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <img className="w-full  h-[240px]" src="https://barristermonwar.com/frontend/assets/images/book1.jpg" alt="" />
                                        <p className="text-text_12px mt-mt_4px font-semibold ">First Edition</p>
                                    </div>
                                </div>

                            </div>
                            <div className="p-2">
                                <p className="text-text_12px">A Book of honour for the prominent lawyer, well Known social activist in Bangladesh and..</p>
                                <button className="p-p_4px text-text_12px bg-blue-500 rounded-md text-white my-mt_4px active:scale-95 transition-all">Read More</button>
                            </div>
                        </div>

                    </Link>


                </div>
            } */}
            <div className="">
                <h2 className="text-text_lg font-normal pb-pt_16px border-b mb-mb_24px">BARRISTER MONWAR HOSSAIN IS</h2>
                <div className="md:flex pb-pb_16px border-b space-y-3">
                    <div className="">
                        <ul className="px-p_12px  font-bold uppercase space-y-3">
                            <li className="px-p_12px">1. A PROMINENT HUMAN RIGHTS AND SPECIALISED IMMIGRATION LAWYER IN THE UK.</li>
                            <li className="px-p_12px">2. A DEVOTED SOCIAL LEADER FOR WELFARE OF THE EXPATRIATES BANGLADESH COMMUNITY.</li>
                            <li className="px-p_12px">3. AN INTERNATIONAL HUMAN RIGHTS ORGANISER.</li>
                        </ul>
                    </div>
                    <div className="">
                        <ul className="px-p_12px  font-bold uppercase  space-y-3">
                            <li className="px-p_12px">4. A WELL KNOWN SOCIAL ACTIVIST IN BANGLADESH AND ABROAD.</li>
                            <li className="px-p_12px">5. A SCULPTURIST OF THE MOVEMENT FOR THE CHATTOGRAM DEVELOPMENT.</li>
                            <li className="px-p_12px">6. A FORMER POPULER CENTRAL STUDENT LEADER IN BANGLADESH.</li>
                        </ul>
                    </div>
                </div>
                <h2 className="text-text_lg font-medium py-pt_16px border-b mb-mb_24px">BARRISTER MOHAMMED MONWAR HOSSAIN</h2>
                <div className="px-p_12px">
                    <p className="text-base text-text_p mb-mt_16px text-justify">Once a spirited teenage boy from Chattogram Govt. Nasirabad School, now Barrister Monwar Hossain climbed the ladder of success and took strides to become recognised internationally as a trailblazer in the Chittagonian community.</p>
                    <p className="text-base text-text_p mb-mt_16px text-justify">Monwar Hossain who was also known to many as Monwar Ahmed shares a colourful personality and possesses multi dimensional talents. He has a deep connection to the protection of human rights, firm conviction in democracy, tremendous enthusiasm for development of Chattogram and welfare of the expatriate Bangladesh community. Barrister Monwar Hossain's journey started in Chattogram, a city of spectacular natural beauty with evergreen landscapes.</p>
                    <p className="text-base text-text_p mb-mt_16px text-justify">His father Dr Nurul Huda was a renowned physician and a fearless freedom fighter, and his mother Syeda Akhtar Jahan was a housewife. His two elder brothers were also freedom fighters. Barrister Monwar honed his leadership skills throughout his schooling life at Chattogram Nasirabad Boys High School, a school that offered various activities to develop leadership qualities in students such as delivering speeches on specific issues in the assembly every week. He was elected AGS of the Student Union when he was in 8th grade and GS at the ninth grade. He was also awarded for giving a speech at the Rabindra-Nazrul-Golden jubilee celebration program. Barrister Monwar passed the School Secondary Examination in 1976 and was admitted to Chattogram Government Commerce College. He viewed that the foundations in his schooling life had laid the foundation of his ability as an orator in the latter years of his life where he won prizes at the national level in the college and university debate competitions. In addition, Barrister Monwar has a keen interest in the promotion of Bangladeshi art, literature, and culture. During student life, he was also involved in publishing many magazines and periodicals, contributed to various cultural activities.</p>
                    <p className="text-base text-text_p mb-mt_16px text-justify">Barrister Monwar actively took part in mass movements, meetings, and processions during the 70s period. As an all-round activist and prominent leader of the Bangladesh Students Union, Barrister Monwar also orchestrated the movement in Chattogram against the regimes of General Zia and Ershad. He participated in the first demonstration while he was a 10th grade school student in Chattogram in 1975 against the killing of Bangabandhu and his family members. Barrister Monwar is a pioneer of the thought that education promotes peace which allows for progress. He embarked on a relentless battle to bring the student community under the banner of the Bangladesh Students Union not only in Chattogram city, but he also devoted himself to establishing a non- discriminatory society at the grass-root level. His proactive demeanor and speeches touched the hearts and minds of many. He was a popular student leader in the University of Chattogram and also he was well known to students nationally because of leadership role against the autocratic government of General Ershad.</p>
                    <p className="text-base text-text_p mb-mt_16px text-justify"> After completing his masters degree from the University of Chattogram in 1985, he became more involved with the challenging responsibilities in the students and mass politics.</p>
                    <p className="text-base text-text_p mb-mt_16px text-justify"> In 1987 Barrister Monwar successfully initiated and took a significant role during the Chaktai Canal Re-excavation Movement to eradicate water-logging problems of Chattogram city. He then in 1988 initiated and successfully formed the "Greater Chttaogram Development Mass Action Committee" (still this is in existence as the Brihattar Chattogram Unnoyan Sangram Committee) and led many movements including a long 48 hours general strike in 1989 all over the greater Chattaogram to implement 15 points demands for transforming Chattogram into a modern and smart city. The then-governments eventually acknowledged and promised to implement all the demands It should be mentioned here that, he was detained twice arbitrarily and kept in the Central Jail of Chattogram for long periods only because of his active role for the democracy and Chattogram development. At the same time he became advisors to many industrical and profesonal tree onions Chattogram.</p>
                    <p className="text-base text-text_p mb-mt_16px text-justify">No doubt, we the Chittagonians will remain indebted to him for his contribution and dedication.</p>
                    <p className="text-base text-text_p mb-mt_16px text-justify">Barrister Monwar moved to the United Kingdom in 1994 to pursue higher education and qualified as a barrister at the prestigious Lincoln's Inn in London in 1998. He has became an exceptionally skilled and a well-known barrister in England. He has provided legal assistance to thousands of Bangladeshi immigrants in the United Kingdom to settle there permanently.</p>
                    <p className="text-base text-text_p mb-mt_16px text-justify">His success rates in immigration and human rights related court cases in England are highly satisfactory.</p>
                    <p className="text-base text-text_p mb-mt_16px text-justify">He has become a celebrity lawyer as he first pioneered the live legal shows in on the Bangla TV in London in 2002 titled "Your Rights" and he is still running a show titled "Law with Barrister Monwar Hossain" on the ION TV.</p>
                    <p className="text-base text-text_p mb-mt_16px text-justify">In addition to his legal work he takes part in the talk shows on social-politcal and legal issues in Bangladesh and UK.</p>
                    <p className="text-base text-text_p mb-mt_16px text-justify">Barrister Monwar continued to be involved in political and social discourse and activism towards the welfare of the Chittagonian and Bangladeshi expatriate community in the UK. His strides in this political arena brought on international attention and his reputation as a leader of the community and supporter of working-class causes was inevitably recognised. Inspired by the principles of equal rights and non-discrimination, Barrister Monwar devotes himself to the welfare of the less fortunate in society. He is still outspoken for the citizens rights of Chattogram and this is why since 2015 he has been oraginsing many activities under the banner of Chattogram Nagorik Forum as its Chairman. He has played an important role to implement the Mega-project to permanently eradicate the water logging problem in the City of Chattogram.</p>
                    <p className="text-base text-text_p mb-mt_16px text-justify">It is time for Chattogram to continue on a path for change and improvement of the city. Barrister Monwar's conscious and courageous personality will certainly bring progress through creative solutions in considering every house hold of Chattogram and his leadership would allow the progress of Chattogram to be seen as a full-fledged commercial capital by solving various problems including water-logging.</p>
                    <p className="text-base text-text_p mb-mt_16px text-justify">No doubt, he is an example for the young generation.</p>
                    <div className="mb-4">
                        <p className="text-text_md text-text_p">Written by :</p>
                        <h3 className="text-text_md text-text_p font-bold">Shahriar Khaled</h3>
                        <p className="text-text_md text-text_p">Prominent singer and social activist in Bangladesh</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;