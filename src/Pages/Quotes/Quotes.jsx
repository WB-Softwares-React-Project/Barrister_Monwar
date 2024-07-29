import quoteIMG from "../../assets/Photo/quotes-1.png"

import img from "../../assets/Photo/quotes-1.png"
import CardQuorte from "../../Component/CardQuorte/CardQuorte";
const Quotes = () => {
    const ctitle = "ব্যারিস্টার মনোয়ার চট্টগ্রামের রাজনৈতিক, সামাজিক ও সাংস্কৃতিক আন্দোলনের সাথেও যুক্ত ছিলেন । তাঁর বক্তব্যের মধ্যে সারগর্ভ বিষয় থাকতো । আমি আশা: করবো আগামী দিনে আরো বৃহত্তর পরিবেশে তিনি নেতৃত্বের ভূমিকায় অবতীর্ণ হবেন ।"
    return (
        <div className="px-4 pb-12 mt-4 mb-4 bg-white">
            <h2 className="text-xl font-normal py-4 border-b mb-6 uppercase">Quotes</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
            <div className="p-4 shadow-2xl">
                    <div className="flex justify-center">
                        <img className="w-[157px] rounded-full" src={img} alt="" />
                    </div>
                    <h4 className="text-xl my-6 text-[#212529] text-center">ব্যারিস্টার মনোয়ার চট্টগ্রামের রাজনৈতিক, সামাজিক ও সাংস্কৃতিক আন্দোলনের সাথেও যুক্ত ছিলেন । তাঁর বক্তব্যের মধ্যে সারগর্ভ বিষয় থাকতো । আমি আশা: করবো আগামী দিনে আরো বৃহত্তর পরিবেশে তিনি নেতৃত্বের ভূমিকায় অবতীর্ণ হবেন ।</h4>
                    <p className="text-sm -mt-4 text-center text-[#6C757D]"> - ড. অনুপম সেন</p>
            </div>
            {/* Card  */}
            <CardQuorte img={img} title={ctitle} name={"ড. অনুপম সেন"}/>
            </div>
        </div>
    );
};

export default Quotes;