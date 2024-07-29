import charitableImg from "../../assets/Photo/charitable_work1.jpg";

const CharitableWork = () => {
    return (
        <div className="px-pl_16px pb-p_48px mt-mt_16px mb-mt_16px bg-white">
            <h2 className="text-xl font-normal py-pt_16px border-b mb-mt_16px uppercase">Charitable Work</h2>

            <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2   gap-4">
                <div className="p-pl_16px shadow-2xl">
                    <div className="">
                        <img className="w-full" src={charitableImg} alt="" />
                    </div>
                    <h4 className="text-base font-medium mt-6 mb-4 text-center">Work in Chattogram</h4>
                    <p className="text-sm mt-4 text-center">Carried out huge charitable activities in Chattogram through the Greater Chattogram Association UK and Chattogram Nagorik Forum as the chairman of the both</p>
                </div>
            </div>
        </div>
    );
};

export default CharitableWork;