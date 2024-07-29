import awardIMG from "../../assets/Photo/quotes-1.png"


const Videos = () => {

    // const video = []
    return (
        <div>
            <div className="my-mt_24px bg-bg_selected text-center text-white md:text-lg p-p_12px">
                Videos
            </div>
            <div className="px-4 pb-12 mt-4 mb-4 bg-white">
                <h2 className="text-xl font-normal py-4 border-b mb-6">Videos of Barrister Monwar Hossainn</h2>

                <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="py-p_24px px-pt_8px border shadow-2xl">
                        <a href="https://www.youtube.com/watch?v=GarOs75CpYA" target="_blank">
                            <div className="">
                                <img className="w-full h-[220px]" src={awardIMG} alt="" />
                            </div>
                            <h4 className="text-text_lg font-medium mt-mt_16px mb-mt_8px ">বংগবন্ধুর বাকশাল ( বাংলাদেশ কৃষক শ্রমিক আওয়ামী লীগ ) গঠন এবং একদলীয় শাসন চালুর প্রেক্ষাপট সবার জানা উচিত</h4>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Videos;