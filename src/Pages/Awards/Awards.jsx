
import awardIMG from "../../assets/Photo/award17.png"
import Card from "../../Component/Card/Card";


const Awards = () => {

    return (
        <div className="px-pl_16px pb-pb_16px mt-mt_24px bg-white">
            <h2 className="text-text_lg font-normal py-pt_16px border-b mb-mb_24px">AWARD RECEIVED</h2>
            <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3   gap-4 py-3">
                <Card img={awardIMG} title={"Who’s Who Bangladesh Award."}></Card>
            </div>
        </div>
    );
};

export default Awards;