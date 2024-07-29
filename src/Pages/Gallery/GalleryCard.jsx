import  "./GalleryStyle.css";
// eslint-disable-next-line react/prop-types
const GalleryCard = ({ img, title }) => {

    return (
        <div className="GCard cursor-pointer">
            <div className="GCardInner px-2 pt-6 pb-6 shadow-xl transition duration-700  hover:scale-105 z-10">
                <div className="">
                    <img className="w-full " src={img} alt="" />
                </div>
                <h4 className="text-base mt-mt_24px mb-mt_16px text-center">{title}</h4>
            </div>
        </div>
    );
};


export default GalleryCard;