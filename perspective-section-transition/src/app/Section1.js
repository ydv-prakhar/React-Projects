import Image from "next/image";
import Pic1 from "../../public/pic1.jpg";
import temp from "../../public/images.png";
import { useTransform, motion } from "framer-motion";
import { useState } from "react";

const Section1 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  const [loaded,setLoaded] = useState(false);
  return (
    <motion.div
      style={{ scale, rotate }}
      className="sticky top-0 h-screen bg-[#C72626] text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh]"
    >
      <p>Scroll Perspective</p>
      <div className="flex gap-4">
        <p>Section</p>
        <div className="relative w-[12.5vw]">
          <Image
            src={Pic1}
            alt="img"
            // placeholder="blur"
            style={{ opacity: loaded ? "1" : "0" }}
            onLoadingComplete={() => {
              setLoaded(true);
            }}

            // blurDataURL="/images.png"
            // priority
          />

          <Image
            src={temp}
            className="absolute top-0"
            alt="img"
            // placeholder="blur"
            style={{ opacity: !loaded ? "1" : "0" }}
            onLoadingComplete={() => {
              setLoaded(true);
            }}
            // blurDataURL="/images.png"
            // priority
          />
        </div>
        <p>Transition</p>
      </div>
    </motion.div>
  );
};

export default Section1;
