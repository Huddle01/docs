import type React from 'react';

import StackIcons from '@components/assets/StackIcons';

import Link from 'next/link';
import { cn } from '../../helpers/utils';

interface Props {
  title: string;
  url: string;
  icon: string;
}

const RNCard: React.FC<Props> = ({ title, url, icon }) => {
  return (
    <Link href={url}>
      <div
        className={cn(
          ' bg-slate-800 rounded-xl cursor-pointer flex gap-3 items-center',
          icon ? 'p-3' : 'p-4',
        )}
      >
        {icon && <span>{StackIcons[icon as keyof typeof StackIcons]}</span>}
        <span>{title}</span>
      </div>
    </Link>
  );
};

export default RNCard;
