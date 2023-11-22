import React from 'react';

import { useRouter } from 'next/router';

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
        <p
          className="text-center rounded-xl shadow-lg h-fit py-4 flex items-center justify-center bg-slate-800 cursor-pointer text-sm md:text-base px-4"
          role="presentation"
          onClick={() => push('/apis/create-room')}
        >
          Create Room
        </p>

        <p
          className="rounded-xl h-fit py-4 shadow-lg cursor-pointer grid place-content-center bg-slate-800 text-sm md:text-base text-center"
          role="presentation"
          onClick={() => push('/apis/join-room-token')}
        >
          Join Room Token
        </p>

        <p
          className="text-center rounded-xl shadow-lg h-fit py-4 cursor-pointer grid place-content-center bg-slate-800 text-sm md:text-base px-2"
          role="presentation"
          onClick={() => push('/apis/meeting-details')}
        >
          Meeting Details
        </p>

        <p
          className="text-center rounded-xl shadow-lg h-fit py-4 flex items-center justify-center bg-slate-800 cursor-pointer text-sm md:text-base px-4"
          role="presentation"
          onClick={() => push('/apis/get-metrics')}
        >
          Key Metrics
        </p>

        <p
          className="rounded-xl h-fit py-4 shadow-lg cursor-pointer grid place-content-center bg-slate-800 text-sm md:text-base text-center"
          role="presentation"
          onClick={() => push('/apis/get-rooms')}
        >
          Get the list of Rooms
        </p>

        <p
          className="text-center rounded-xl shadow-lg h-fit py-4 cursor-pointer grid place-content-center bg-slate-800 text-sm md:text-base px-2"
          role="presentation"
          onClick={() => push('/apis/get-recordings')}
        >
          Get the list of Recordings
        </p>
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
