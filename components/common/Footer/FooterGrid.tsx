import type React from 'react';

import { useRouter } from 'next/router';

// Data

// Types

import { NavigationData, type TNavData } from '../../FooterContent';

const FooterGrid: React.FC = () => {
  const router = useRouter();

  // Func
  const handleLink = (_data: [string, TNavData], link: string) => {
    return window.open(link);
  };
  return (
    <div className="grid md:grid-cols-2 gap-10 grid-cols-2 mb-16 md:mb-0 w-full">
      {Object.entries(NavigationData).map((navData) => (
        <div key={navData[0]}>
          <span className="text-slate-300 text-base font-semibold capitalize ">
            {navData[0]}
          </span>
          {navData[1].map(({ id, name, href }) => (
            <div
              key={id}
              role="presentation"
              onClick={async () =>
                name === 'Release Notes'
                  ? await router.push(href)
                  : handleLink(navData, href)
              }
              className="text-slate-400 text-xs font-medium mb-3 mt-4 cursor-pointer"
            >
              {name}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FooterGrid;
