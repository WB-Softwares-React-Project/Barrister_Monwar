
// eslint-disable-next-line react/prop-types
const VideoCard = ({img,title}) => {
    return (
        <div className="px-2 pt-6 pb-6 shadow-xl">
            <div className="">
                <img className="w-full" src={img} alt="" />
            </div>
             <h4 className="text-base mt-4 mb-2 text-center">{title}</h4>
        </div>
    );
};

export default VideoCard;