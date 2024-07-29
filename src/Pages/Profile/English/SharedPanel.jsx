
const SharedPanel = ({ title, text = [] }) => {
    return (
        <div className=" px-pr_16px pt-pr_16px pb-12 bg-white">
            <h1 className="text-[1rem] pb-2 border-b border-gray-200">{title}</h1>
            {


            }

            <div className="mt-6 space-y-2">
                {
                    text?.map((data, idx) => <p key={idx} className="">{data}</p>)
                }

            </div>

        </div>
    );
};

export default SharedPanel;