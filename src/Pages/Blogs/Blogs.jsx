import { Link } from "react-router-dom";
import awardIMG from "../../assets/Photo/quotes-1.png"

const Blogs = () => {
    return (
        <div>
            <div className="my-mt_24px bg-bg_selected text-center text-white md:text-lg p-p_12px">
                Blogs
            </div>
            <div className="px-4 pb-12 mt-4 mb-4 bg-white">

            <h2 className="text-text_lg font-normal py-pt_16px border-b mb-mb_24px">Charitable Work</h2>
                <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2   gap-4">
                    <Link to="/blog-details/01" className="px-pt_16px pt-pl_16px shadow-xl border ">
                        <h4 className="text-base  mb-mt_16px font-bold">ব্যারিস্টার মনোয়ার হোসেন চট্টগ্রামের উন্নয়ন ও আন্দোলনের ইতিহাসের বরপুত্র</h4>
                        <div className="">
                            <img className="w-full h-[220px] pb-pl_16px" src={awardIMG} alt="" />
                        </div>
                        <p className="mt-mt_24px mb-mt_16px text-justify">চট্টগ্রাম জেলা পরিষদের চেয়ারম্যান ও চট্টগ্রাম উত্তর জেলা আওয়ামী লীগের সহ সভাপতি এটিএম পেয়ারুল ইসলাম বলেছেন, চট্টগ্রাম বীর প্রসবিণী চট্টগ্রাম। চট্টগ্রাম ইতিহাস সৃষ্টির সূতিকাগার। বূর সন্তান মাস্টার দা সূর্য সেন,প্রীতিলতা</p>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default Blogs;