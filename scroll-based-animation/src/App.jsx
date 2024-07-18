import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "@studio-freight/lenis";

const App = () => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [-600, window.innerWidth - 200]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 1000]); // Keep y fixed

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div ref={container} className="h-[2000px] relative">
      <div className="h-[2000px] bg-red-50 w-full">
        <img src="/images/Towers.svg" className="w-full fixed top-0" alt="" />
        <motion.div style={{ x, y }} className="">
          <img src="/images/plane.png" alt="plane" className="" />
        </motion.div>
      </div>
    </div>
  );
};

export default App;
