import LandingIcons from '@components/assets/LandingIcons';
import { cn } from 'helpers/utils';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

export const GetStartedBtn: React.FC = () => {
  const { push } = useRouter();
  return (
    <Wrapper onClick={() => push('/api-keys')}>
      <div className="flex items-center gap-4">
        <Image
          src="/docs/api/getStarted.png"
          alt="api-key"
          width={35}
          height={35}
          className="object-contain"
        />
        <span className="text-custom-6 text-xl font-medium">
          Get your API Key
        </span>
      </div>
      <div>{LandingIcons['chevron-right']}</div>
    </Wrapper>
  );
};

export const PlatformApiGetAPIKey: React.FC = () => {
  return (
    <div
      className={cn(
        'border border-custom-1 mt-4 mb-8 rounded-md items-center justify-between py-4 px-6 cursor-pointer',
      )}
      role="presentation"
    >
      <div className="flex items-center gap-4">
        <Image
          src="/docs/api/getStarted.png"
          alt="api-key"
          width={35}
          height={35}
          className="object-contain"
        />
        <span className="text-custom-6 text-xl font-medium">
          Ask for your Product API Key
        </span>
      </div>
      <div className="m-4">
        <span>
          <span className="text-slate-50/2 font-sm font-normal">
            Reach out to our support team to get your API key.
          </span>
        </span>
      </div>
    </div>
  );
};

export const Endpoint: React.FC = ({ endPoint }: { endPoint: string }) => (
  <Wrapper
    onClick={() =>
      window.open(endPoint ?? 'https://api.huddle01.com/api/v2/sdk')
    }
    className="flex-col items-start p-8"
  >
    <div className="flex items-center gap-4">
      <Image
        src="/docs/api/endpoint.png"
        alt="api-key"
        width={35}
        height={35}
        className="object-contain"
      />
      <div className="text-custom-6 text-lg font-medium">Endpoint</div>
    </div>

    <div className="mt-6 bg-[#202328] border border-slate-600 rounded-lg p-3 w-full text-slate-50/2 font-sm font-normal">
      {endPoint ?? 'https://api.huddle01.com/api/v2/sdk'}
    </div>
  </Wrapper>
);

interface Props {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

export const Wrapper: React.FC<Props> = ({ children, onClick, className }) => (
  <div
    className={cn(
      'border border-custom-1 mt-4 mb-8 rounded-md flex items-center justify-between py-4 px-6 cursor-pointer',
      className,
    )}
    role="presentation"
    onClick={onClick}
  >
    {children}
  </div>
);
