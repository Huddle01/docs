import React from "react";

import { useRouter } from "next/router";
import Link from "next/link";

const Container = () => {
  const { push } = useRouter();
  return (
    <div>
      <p>
        At Huddle01, we offer a variety of APIs to meet your specific needs.
        Whether you want to build your own custom applications or quickly get
        started with our pre-built applications, we have you covered. Our APIs
        are designed to provide flexibility and customization.
      </p>

      <div className="grid grid-cols-3 grid-rows-2 mt-4 gap-4 gap-y-6 items-center">
        <Link href="/apis/create-room">
          <div
            className="text-center rounded-xl shadow-lg h-fit py-4 flex items-center justify-center bg-slate-800 cursor-pointer text-sm md:text-base px-4"
            role="presentation"
          >
            Create Room
          </div>
        </Link>

        <Link href="/apis/join-room-token">
          <div
            className="rounded-xl h-fit py-4 shadow-lg cursor-pointer grid place-content-center bg-slate-800 text-sm md:text-base text-center"
            role="presentation"
          >
            Join Room Token
          </div>
        </Link>

        <Link href="/apis/meeting-details">
          <div
            className="text-center rounded-xl shadow-lg h-fit py-4 cursor-pointer grid place-content-center bg-slate-800 text-sm md:text-base px-2"
            role="presentation"
          >
            Meeting Details
          </div>
        </Link>

        <Link href="/apis/get-metrics">
          <div
            className="text-center rounded-xl shadow-lg h-fit py-4 flex items-center justify-center bg-slate-800 cursor-pointer text-sm md:text-base px-4"
            role="presentation"
          >
            Key Metrics
          </div>
        </Link>

        <Link href="/apis/get-rooms">
          <div
            className="rounded-xl h-fit py-4 shadow-lg cursor-pointer grid place-content-center bg-slate-800 text-sm md:text-base text-center"
            role="presentation"
          >
            Get the list of Rooms
          </div>
        </Link>

        <Link href="/apis/get-recordings">
          <div
            className="text-center rounded-xl shadow-lg h-fit py-4 cursor-pointer grid place-content-center bg-slate-800 text-sm md:text-base px-2"
            role="presentation"
          >
            Get the list of Recordings
          </div>
        </Link>
        {/* <p className="cursor-default">
          This API is useful when you need to access information about a
          previously created meeting, such as its start time or host wallets. It
          can also be used to retrieve the meeting link, which can be shared
          with participants who need to join the meeting.
        </p> */}
      </div>
    </div>
  );
};

export default Container;
