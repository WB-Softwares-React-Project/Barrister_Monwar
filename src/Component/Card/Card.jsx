


// eslint-disable-next-line react/prop-types
const Card = ({ img, title }) => {
    return (
        <div className="px-2 pt-6 pb-6 shadow-xl border">
            <div className="">
                <img className="w-full" src={img} alt="" />
            </div>
            <h4 className="text-base mt-6 mb-4 text-center">{title}</h4>
        </div>
    );
};

export default Card;