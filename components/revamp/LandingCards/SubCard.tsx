import React from 'react';

import LandingIcons from '@components/assets/LandingIcons';
import Link from 'next/link';

type SubCardProps = {
  title: string;
  url: string;
};

const SubCard: React.FC<SubCardProps> = ({ title, url }) => {
  return (
    <Link href={url}>
      <div className="border rounded-lg border-custom-1 p-4 flex flex-col cursor-pointer hover:bg-[#101114]/50 transition duration-300 ease-in-out">
        <div>{LandingIcons[title]}</div>
        <div className=" text-slate-400 text-sm font-medium mt-2">{title}</div>
      </div>
    </Link>
  );
};
export default React.memo(SubCard);
