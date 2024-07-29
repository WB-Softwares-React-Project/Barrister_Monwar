import GalleryCard from "./GalleryCard";
import awardIMG from "../../assets/Photo/award17.png";

const Gallery = () => {
  return (
    <div>
      <div className="my-mt_24px bg-bg_selected text-center text-white md:text-lg p-p_12px">
        Gallery
      </div>
      <div className="px-pl_16px pb-pb_16px  mt-mt_24px bg-white">
        <h2 className="text-text_lg font-normal py-pt_16px border-b mb-mb_24px">
          AWARD RECEIVED
        </h2>
        <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3   gap-4 ">
          <GalleryCard
            img={awardIMG}
            title={
              "ব্যারিস্টার মনোয়ার হোসেন চট্টগ্রামের উন্নয়ন ও আন্দোলনের ইতিহাসের বরপুত্র"
            }
          ></GalleryCard>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
