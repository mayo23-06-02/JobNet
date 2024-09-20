import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { AiOutlineFormatPainter } from "react-icons/ai";
import { PiBroom, PiCar, PiFlowerTulip } from "react-icons/pi";
import { PiPipeLight } from "react-icons/pi";
import { PiLightbulbFilament } from "react-icons/pi";
import { TbTrowel } from "react-icons/tb";
import { PiSolarRoofDuotone } from "react-icons/pi";
import { LiaDrumSteelpanSolid } from "react-icons/lia";
import { PiEngine } from "react-icons/pi";

import Tag from '../../Reusable/Tag/Tag';

const CustomPrevArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        display: "block",
        background: "#f3f4f6",
        borderRadius: "50%",
        position: "absolute",
        left: "10px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1,
        padding: "2px"
      }}
    >
      Prev
    </button>
  );
};

const CustomNextArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        display: "block",
        background: "#f3f4f6",
        borderRadius: "50%",
        position: "absolute",
        right: "10px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1,
        padding: "2px"
      }}
    >
      Next
    </button>
  );
};

export default function Categories() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1280 },
      items: 9
    },
    desktop: {
      breakpoint: { max: 1280, min: 800 },
      items: 7
    },
    tablet: {
      breakpoint: { max: 800, min: 480 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 3
    }
  };

  return (
    <div className='lg:max-w-[1280px] lg:py-2 overflow-auto w-[88vw]'>
      <Carousel
        responsive={responsive}
        customLeftArrow={<CustomPrevArrow />}
        customRightArrow={<CustomNextArrow />}
        removeArrowOnDeviceType={["tablet", "mobile", "desktop", "superLargeDesktop"]}
        swipeable={true}
      >
        <Tag icon={<TbTrowel />} name={'Builder'} />
        <Tag icon={<PiBroom />} name={'Cleaner'} />
        <Tag icon={<PiCar />} name={'Driver'} />
        <Tag icon={<PiEngine />} name={'Mechanic'} />
        <Tag icon={<TbTrowel />} name={'Builder'} />
        <Tag icon={<PiBroom />} name={'Cleaner'} />
        <Tag icon={<PiCar />} name={'Driver'} />
        <Tag icon={<PiEngine />} name={'Mechanic'} />
        <Tag icon={<TbTrowel />} name={'Builder'} />
        <Tag icon={<PiBroom />} name={'Cleaner'} />
        <Tag icon={<PiCar />} name={'Driver'} />
        <Tag icon={<PiEngine />} name={'Mechanic'} />
      </Carousel>
    </div>
  );
}
