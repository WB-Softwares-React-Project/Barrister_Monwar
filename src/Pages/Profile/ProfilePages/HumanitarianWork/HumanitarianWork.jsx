
const HumanitarianWork = () => {

    const humanitarianWorkList = ["বোয়ালখালীতে গাউসিয়া কমিটির মাধ্যমে এম্বুলেন্স প্রদান । এটি এই দুর্যোগের সময় বিশাল ভূমিকা পালন করে। এছাড়াও হাজারো মানুষকে খাদ্য সহায়তা প্রদান ।",
        "রোহিঙ্গা শরণার্থীদের ক্যাম্পে একাধিকবার সাহায্য বিতরণ এবং তাদের পক্ষে আন্তর্জাতিক সমর্থন আদায়ের জন্য কাজ করেছেন।",
        "'ব্যারিস্টার মনোয়ার হোসেন ফাউন্ডেশন' এর মাধ্যমে চিকিৎসা, শিক্ষা ইত্যাদি বিষয়ে অর্থ সাহায্য সহ বিভিন্ন রকম সহযোগিতা প্রদান। বিভিন্ন মসজিদ ও স্কুলে খাদ্য ও আর্থিক সাহায্য প্রদান।",
        "তার পিতা-মাতার নামে 'ডাক্তার নুরুল হুদা - আক্তার জাহান ছাত্র বৃত্তি ' প্রদানের মাধ্যমে গরিব মেধাবী শিক্ষার্থীদের সহায়তা প্রদান।"
    ]
    return (
        <div className="px-pl_16px pb-pb_16px mt-mt_24px bg-white">
            <h2 className="text-text_18px font-font_semibold py-pt_16px border-b mb-mb_24px">মানবিক ও কোভিড মহামারীর সময়ে ভূমিকা:</h2>
            <div className="">
                <ul className="pl-p_32px pb-pl_16px mb-mt_16px">
                    {
                        humanitarianWorkList.map((item, index) => <li key={index} className="list-disc text-text_18px leading-lineHeight_35px text-justify">{item}</li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default HumanitarianWork;