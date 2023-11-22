import React from 'react';

// Assets
import LandingIcons from '@components/assets/LandingIcons';
import Image from 'next/image';
import { useRouter } from 'next/router';

type LatestReleaseProps = {};

const LatestRelease: React.FC<LatestReleaseProps> = () => {
  const { push } = useRouter();

  const releaseData = [
    {
      title: 'Javascript',
      version: '0.0.15',
      url: '/Javascript',
    },
    {
      title: 'React JS',
      version: '0.0.13',
      url: '/React',
    },
    {
      title: 'React Native',
      version: '0.0.14',
      url: '/React-Native',
    },
  ];
  return (
    <div className="lg:flex hidden p-9 flex-col w-full">
      <div className="text-custom-6 text-sm font-semibold mb-4">
        Latest Release
      </div>

      {releaseData.map(({ title, url, version }) => (
        <ReleaseStrip
          key={title}
          title={title}
          version={version}
          onClick={() => push(url)}
        />
      ))}
    </div>
  );
};
export default React.memo(LatestRelease);

interface IReleaseStrip {
  version: string;
  title: string;
  onClick: () => void;
}

const ReleaseStrip: React.FC<IReleaseStrip> = ({ title, version, onClick }) => (
  <div className="mb-3 last:mb-0 cursor-pointer  w-full" onClick={onClick}>
    <Strip isUpdated version={version} title={title} />
    <Strip />
  </div>
);

interface IStripProps {
  title?: string;
  version?: string;
  isUpdated?: boolean;
}

const Strip: React.FC<IStripProps> = ({ isUpdated, version, title }) => (
  <div className="flex items-center justify-between mt-1.5 w-full ">
    {isUpdated ? (
      <div className="flex items-center gap-2.5">
        <Image
          src={`/docs/images/${title}.png`}
          alt={title ?? 'latest-release-img'}
          width={20}
          height={20}
          className="object-contain"
        />
        <div className="text-slate-300 text-sm font-normal">{title}</div>
      </div>
    ) : (
      <div className="text-[#64748B] text-xs font-normal">July 26, 2023</div>
    )}
    {version ? (
      <div className="bg-rgb-9 rounded-2xl py-1 px-2 text-xs text-[#4984FD] font-medium">
        v {version}
      </div>
    ) : (
      <div className="cursor-pointer">{LandingIcons['chevron-up']}</div>
    )}
  </div>
);
