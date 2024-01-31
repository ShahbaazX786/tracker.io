'use client';

import useDarkMode from '@/hooks/useDarkMode';
import { AiFillBulb } from 'react-icons/ai';

const DarkModeSwitch: React.FC = () => {
  const [toggle] = useDarkMode();
  return (
    <div>
      <AiFillBulb className=' cursor-pointer' onClick={toggle} />
    </div>
  );
};

export default DarkModeSwitch;
