import React from "react";
import { useRouter } from "next/router";

type HooksTableProps = {};

const HooksTable: React.FC<HooksTableProps> = () => {
  const { push } = useRouter();
  return (
    <table className="w-full lg:mt-8 mt-4">
      <thead className="text-start">
        <tr className="">
          <th className="border border-[#1D1F22] p-2">Old Hooks</th>
          <th className="border border-[#1D1F22] p-2">New Hooks</th>
          {/* <th>Deprecated</th> */}
        </tr>
      </thead>
      <tbody className="p-8">
        {[
          {
            old: "useRoom",
            new: {
              one: "useRoom",
              urlOne: "../React/hooks/useRoom",
            },
          },
          {
            old: "useLobby",
            new: {
              one: "useLobby",
              urlOne: "../React/hooks/useLobby",
            },
          },
          {
            old: "usePeers",
            new: {
              one: "usePeersIds",
              urlOne: "../React/hooks/usePeerIds",
            },
          },
          {
            old: "useAudio",
            new: {
              one: "useLocalAudio",
              two: "useRemoteAudio",
              urlOne: "../React/hooks/useLocalAudio",
              UrlTwo: "../React/hooks/useRemoteAudio",
            },
          },
          {
            old: "useVideo",
            new: {
              one: "useLocalVideo",
              two: "useRemoteVideo",
              urlOne: "../React/hooks/useLocalVideo",
              UrlTwo: "../React/hooks/useRemoteVideo",
            },
          },
          {
            old: "useScreenShare",
            new: {
              one: "useLocalScreenShare",
              two: "useRemoteScreenShare",
              urlOne: "../React/hooks/useLocalScreenShare",
              UrlTwo: "../React/hooks/useRemoteScreenShare",
            },
          },
          {
            old: "---",
            new: {
              one: "useRoomControls",
              urlOne: "../React/hooks/useRoomControls",
            },
          },
          {
            old: "---",
            new: {
              one: "useDataMessage",
              urlOne: "../React/hooks/useDataMessage",
            },
          },
          {
            old: "---",
            new: {
              one: "useDevices",
              urlOne: "../React/hooks/useDevices",
            },
          },
          {
            old: "---",
            new: {
              one: "useActivePeers",
              urlOne: "../React/hooks/useActivePeers",
            },
          },
          {
            old: "---",
            new: {
              one: "useRoomMetadata",
              urlOne: "../React/hooks/useRoomMetadata",
            },
          },
          {
            old: "useHuddle01",
            new: {
              one: "---",
            },
          },
          {
            old: "useAppUtils",
            new: {
              one: "---",
            },
          },
          {
            old: "useAcl",
            new: {
              one: "---",
            },
          },
          {
            old: "useLivestream",
            new: {
              one: "---",
            },
          },
          {
            old: "useRecording",
            new: {
              one: "---",
            },
          },
        ].map((item, i) => (
          <tr
            key={i}
            className={`${i % 2 === 0 ? "bg-[#1D1F22]/40" : "bg-transparent"}`}
          >
            <td className="border border-[#1D1F22] p-2">{item.old}</td>
            <td className="border border-[#1D1F22] p-2 cursor-pointer">
              <span role="presentation" onClick={() => push(item.new.urlOne)}>
                {item.new.one}
              </span>{" "}
              <span role="presentation" onClick={() => push(item.new.UrlTwo)}>
                {item.new.two && `/ ${item.new.two}`}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default HooksTable;
