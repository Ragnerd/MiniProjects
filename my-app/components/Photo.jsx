"use client";

import { motion } from "motion/react";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div>
        <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten">
          <Image
            src="/my-photo.png"
            fill
            priority
            quality={100}
            alt=""
            className="object-contain"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;
