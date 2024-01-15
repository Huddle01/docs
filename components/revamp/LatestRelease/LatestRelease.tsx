import React, { useEffect, useState } from "react";
import axios from "axios";

// Assets
import LandingIcons from "@components/assets/LandingIcons";
import Image from "next/image";
import { useRouter } from "next/router";

type LatestReleaseProps = {};

type PackageVersion = {
  version: string;
  date: string;
};

const LatestRelease: React.FC<LatestReleaseProps> = () => {
  const { push } = useRouter();

  const [reactPackageVersion, setReactPackageVersion] =
    useState<PackageVersion>({ date: "", version: "" });
  const [jsPackageVersion, setJsPackageVersion] = useState<PackageVersion>({
    date: "",
    version: "",
  });
  const [serverSdkPackageVersion, setServerSdkPackageVersion] =
    useState<PackageVersion>({ date: "", version: "" });

  useEffect(() => {
    getPackageVersion("@huddle01/web-core").then((data) => {
      setJsPackageVersion(data);
    });
    getPackageVersion("@huddle01/react").then((data) => {
      setReactPackageVersion(data);
    });
    getPackageVersion("@huddle01/server-sdk").then((data) => {
      setServerSdkPackageVersion(data);
    });
  }, []);

  const getPackageVersion: (
    packageName: string
  ) => Promise<PackageVersion> = async (packageName: string) => {
    const { data } = await axios.get(
      `/docs/api/npmRegistry?packageName=${packageName}`
    );
    return data;
  };

  const formatDate = (date?: string) => {
    return date
      ? new Date(Date.parse(date)).toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "";
  };

  const releaseData = [
    {
      title: "Javascript",
      version: jsPackageVersion.version,
      date: formatDate(jsPackageVersion.date),
      url: "/Javascript",
    },
    {
      title: "React JS",
      version: reactPackageVersion.version,
      date: formatDate(reactPackageVersion.date),
      url: "/React",
    },
    {
      title: "React Native",
      version: reactPackageVersion.version,
      date: formatDate(reactPackageVersion.date),
      url: "/React-Native",
    },

    {
      title: "Server Sdk",
      version: serverSdkPackageVersion.version,
      date: formatDate(serverSdkPackageVersion.date),
      url: "/Server-SDK",
    },
  ];

  return (
    <div className="lg:flex hidden p-9 flex-col w-full">
      <div className="text-custom-6 text-sm font-semibold mb-4">
        Latest Release
      </div>

      {releaseData.map(({ title, url, version, date }) => (
        <ReleaseStrip
          key={title}
          title={title}
          date={date}
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
  date: string;
  onClick: () => void;
}

const ReleaseStrip: React.FC<IReleaseStrip> = ({
  title,
  version,
  onClick,
  date,
}) => (
  <div className="mb-3 last:mb-0 cursor-pointer  w-full" onClick={onClick}>
    <Strip isUpdated version={version} title={title} />
    <Strip date={date} />
  </div>
);

interface IStripProps {
  title?: string;
  version?: string;
  date?: string;
  isUpdated?: boolean;
}

const Strip: React.FC<IStripProps> = ({ isUpdated, version, title, date }) => (
  <div className="flex items-center justify-between mt-1.5 w-full ">
    {isUpdated ? (
      <div className="flex items-center gap-2.5">
        <Image
          src={`/docs/images/${title}.png`}
          alt={title ?? "latest-release-img"}
          width={20}
          height={20}
          className="object-contain"
        />
        <div className="text-slate-300 text-sm font-normal">{title}</div>
      </div>
    ) : (
      <div className="text-[#64748B] text-xs font-normal">{date}</div>
    )}
    {version ? (
      <div className="bg-rgb-9 rounded-2xl py-1 px-2 text-xs text-[#4984FD] font-medium">
        v {version}
      </div>
    ) : (
      <div className="cursor-pointer">{LandingIcons["chevron-up"]}</div>
    )}
  </div>
);
