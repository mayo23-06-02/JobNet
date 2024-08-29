import React from 'react'
import { AiOutlineFormatPainter } from "react-icons/ai";
import { PiFlowerTulip } from "react-icons/pi";
import { PiPipeLight } from "react-icons/pi";
import { PiLightbulbFilament } from "react-icons/pi";
import { TbTrowel } from "react-icons/tb";
import { PiSolarRoofDuotone } from "react-icons/pi";
import { LiaDrumSteelpanSolid } from "react-icons/lia";
import { PiEngine } from "react-icons/pi";

import Tag from '../../Reusable/Tag/Tag'


export default function Categories() {
  return (
    <div className='flex space-x-4 max-w-[1280px] w-full overflow-auto'>
        <Tag icon={<AiOutlineFormatPainter />} name={'Painting'}  />
        <Tag icon={<PiFlowerTulip />} name={'Garden'}  />
        <Tag icon={<PiPipeLight />} name={'Plumbing'}  />
        <Tag icon={<PiLightbulbFilament />} name={'Electric'}  />
        <Tag icon={<TbTrowel />} name={'Building'}  />
        <Tag icon={<PiSolarRoofDuotone  />} name={'Roofing'}  />
        <Tag icon={<LiaDrumSteelpanSolid  />} name={'Welding'}  />
        <Tag icon={<PiEngine  />} name={'Mechanic'}  />
        <Tag icon={<AiOutlineFormatPainter />} name={'Painting'}  />
        <Tag icon={<PiFlowerTulip />} name={'Garden'}  />
        <Tag icon={<PiPipeLight />} name={'Plumbing'}  />
        <Tag icon={<PiLightbulbFilament />} name={'Electric'}  />
        <Tag icon={<TbTrowel />} name={'Building'}  />
        <Tag icon={<PiSolarRoofDuotone  />} name={'Roofing'}  />
        <Tag icon={<LiaDrumSteelpanSolid  />} name={'Welding'}  />
        <Tag icon={<PiEngine  />} name={'Mechanic'}  />
    
    </div>
  )
}
