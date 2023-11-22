// Assets
import LandingIcons from '@components/assets/LandingIcons';
import Image from 'next/image';
import { useRouter } from 'next/router';

type TGetStartedCardProps = {
  title: 'string';
  url: string;
};

export const GetStartedCards: React.FC<TGetStartedCardProps> = ({
  title,
  url,
}) => {
  const { push } = useRouter();
  return (
    <div
      className="py-2 px-3 bg-custom-2 rounded-md border-rgb-3 flex items-center justify-between cursor-pointer hover:bg-[#202328]/80 ease-in-out duration-300"
      onClick={() => push(url)}
    >
      <div className="flex items-center gap-2">
        <Image
          src={`/docs/images/${title}.png`}
          alt={title}
          width={22}
          height={22}
          className="object-contain"
        />
        <div className="text-sm font-medium text-custom-3">{title}</div>
      </div>

      <div>{LandingIcons['chevronRight-small']}</div>
    </div>
  );
};

export const CLIToolCard = () => {
  const { push } = useRouter();
  return (
    <button
      type="button"
      className="bg-rgb-4 border border-rgb-5 rounded-md flex lg:flex-row flex-col lg:items-center gap-2.5 py-2 px-2.5"
      onClick={() => push('/cli-tool')}
    >
      <div className="flex items-center gap-2.5">
        <span>{LandingIcons.terminal}</span>
        <span className="text-rgb-6 text-xs font-normal">CLI Tool:</span>
      </div>
      <div className="text-rgb-6 text-xs font-normal text-start">
        Clone our example application & customize it to fit your specific use
        case quickly.
      </div>
    </button>
  );
};

interface LinksIconProps {
  title: string;
  linkUrl: string;
}

export const LinksIcon: React.FC<LinksIconProps> = ({ title, linkUrl }) => {
  const { push } = useRouter();
  return (
    <div className="p-2 bg-custom-2 rounded-md border border-rgb-3 hover:bg-[#202328]/80 ease-out duration-300">
      <Image
        src={`/docs/images/${title}.png`}
        alt={title}
        width={18}
        height={18}
        className="object-contain cursor-pointer"
        key={title}
        onClick={e => {
          e.stopPropagation();
          push(linkUrl);
        }}
      />
    </div>
  );
};
