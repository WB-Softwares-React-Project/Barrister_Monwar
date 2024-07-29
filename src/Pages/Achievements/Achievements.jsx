import achievmentImage from "../../assets/Photo/slider1.png"
const Achievements = () => {
    return (
        <div className="px-pl_16px pb-pb_16px mt-mt_24px bg-white">
            <h2 className="text-text_lg font-normal py-pt_16px border-b mb-mb_24px uppercase">Achievements</h2>
            <div className="">
                <img src={achievmentImage} alt="" className="w-full"/>
            </div>
        </div>
    );
};

export default Achievements;