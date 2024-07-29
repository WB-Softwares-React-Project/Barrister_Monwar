
// eslint-disable-next-line react/prop-types
const CardQuorte = ({img,title, name}) => {
    return (
        <div className="p-4 shadow-2xl">
                    <div className="flex justify-center">
                        <img className="w-[157px] rounded-full" src={img} alt="" />
                    </div>
                    <h4 className="text-xl my-6 text-[#212529] text-center">{title}</h4>
                    <p className="text-sm -mt-4 text-center text-[#6C757D]"> - {name}</p>
        </div>

    );
};

export default CardQuorte;