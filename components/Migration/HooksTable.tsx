import React from "react";
import { useRouter } from "next/router";
import { HooksData } from "./data";

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
        {HooksData.map((item, i) => (
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
