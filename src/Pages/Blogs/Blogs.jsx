import { Link } from "react-router-dom";
import awardIMG from "../../assets/Photo/quotes-1.png"

const Blogs = () => {
    return (
        <div>
            <div className="my-mt_24px bg-bg_selected text-center text-white md:text-lg p-p_12px">
                Blogs
            </div>
            <div className="px-4 pb-12 mt-4 mb-4 bg-white">

                <h2 className="text-text_lg font-normal py-pt_16px border-b mb-mb_24px">Blogs of Barrister Monwar Hossain</h2>
                <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2   gap-4">
                    {/* blog card start */}
                    <Link to="/blog-details/01" className="px-pt_16px pt-pl_16px shadow-xl border ">
                        <h4 className="text-base  mb-mt_16px font-bold">ব্যারিস্টার মনোয়ার হোসেন চট্টগ্রামের উন্নয়ন ও আন্দোলনের ইতিহাসের বরপুত্র</h4>
                        <div className="">
                            <img className="w-full h-[220px] pb-pl_16px" src={awardIMG} alt="" />
                        </div>
                        <p className="mt-mt_24px mb-mt_16px text-justify">চট্টগ্রাম জেলা পরিষদের চেয়ারম্যান ও চট্টগ্রাম উত্তর জেলা আওয়ামী লীগের সহ সভাপতি এটিএম পেয়ারুল ইসলাম বলেছেন, চট্টগ্রাম বীর প্রসবিণী চট্টগ্রাম। চট্টগ্রাম ইতিহাস সৃষ্টির সূতিকাগার। বূর সন্তান মাস্টার দা সূর্য সেন,প্রীতিলতা</p>
                    </Link>
                    {/* blog card end */}
                </div>
                <div className="mt-mt_16px px-pr_16px flex justify-between items-center">

                    {/* blog pagination */}
                    <p className="text-[212529BF]">Showing 1 to 12 of 58 results</p>
                    <nav aria-label="Page navigation example">
                        <ul className="flex items-center -space-x-px h-10 text-base">
                            <li>
                                <a href="#" className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <span className="sr-only">Previous</span>
                                    <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                            </li>
                            <li>
                                <a href="#" aria-current="page" className="z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <span className="sr-only">Next</span>
                                    <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </nav>

                </div>
            </div>
        </div>

    );
};

export default Blogs;