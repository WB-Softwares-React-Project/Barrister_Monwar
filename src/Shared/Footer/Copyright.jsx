import moment from "moment";


const Copyright = () => {
    const year = moment().format('YYYY');
    return (
        <div className="bg-_white border border-bg_lightSlate py-pl_secondary px-pt_8px lg:px-2 md:mx-mt_24px mx-mb_12px mb-12 md:mb-4">
            <div className="max-w-7xl mx-auto flex items-center flex-col lg:flex-row justify-between">
                <p className="text-center">
                    &copy; {year} All right reserved by Barrister Monwar Hossain.
                </p>
                <p className="">
                    Design & Developed by Dhrubo Joyti Das.
                </p>
            </div>
        </div>
    );
};

export default Copyright;