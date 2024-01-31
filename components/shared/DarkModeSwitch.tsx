"use client";

import useDarkMode from "@/hooks/useDarkMode";
import { Button } from "@radix-ui/themes";
import { AiFillBulb } from "react-icons/ai";


const DarkModeSwitch: React.FC = () => {
  const [toggle] = useDarkMode()
  return (
    <div>
      <AiFillBulb className=' cursor-pointer' onClick={toggle}/>
    </div>
  );
};

export default DarkModeSwitch;
