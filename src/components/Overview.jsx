import React from 'react'

const Overview = () => {
  return (
    <div className="w-full px-5 flex flex-col gap-5">
      {/* first div */}
      <div className='flex justify-between items-center'>
        <span className="text-xl font-medium">Overview</span>
        <button className="flex justify-between items-center rounded-[4px] gap-1 px-3 py-2 bg-white border">
          This Month
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-down"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      </div>
      {/* second Div */}
      <div className='flex flex-wrap items-start gap-3'>
        {/* 1 */}
        <div className="bg-light-blue text-white min-w-[300px] flex flex-col rounded-md gap-4 shadow-sm grow hover:bg-dark-blue">
          <div className="flex gap-2 items-center text-lg px-4 mt-4">
            <span>Next Payout</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="white"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
              />
            </svg>
          </div>
          <div className='flex justify-between items-baseline px-4'>
            <p className="text-white text-3xl font-medium">₹2312.55</p>
            <span className="flex underline items-center text-white font-medium">
              23 Orders{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-down -rotate-90"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </span>
          </div>
          <div className='bg-dark-blue w-full left-0 bottom-0 rounded-md flex justify-around gap-9 py-2'>
            <p>Next payment date: </p> <span>Today, 4:00PM</span>
          </div>
        </div>
        {/* 2 */}
        <div className="bg-white min-w-[300px] px-4 py-4 flex flex-col rounded-md gap-3  shadow-sm grow">
          <span className="flex gap-2 items-center text-lg text-grey-text">
            Amount Pending{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="grey"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
              />
            </svg>
          </span>
          <div className="w-full flex items-baseline justify-between">
            <span className="text-black text-3xl font-medium">₹92,321.20</span>
            <span className="flex underline items-center text-light-blue font-medium">
              13 Orders{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-down -rotate-90"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </span>
          </div>
        </div>
        {/* 3 */}
        <div className="bg-white min-w-[300px] px-4 py-4 flex flex-col rounded-md gap-3 shadow-sm grow">
          <span className="flex gap-2 items-center text-lg text-grey-text">
            Amount Processed{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="grey"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
              />
            </svg>
          </span>
          <span className="text-black text-3xl font-medium">₹23,92,312.19</span>
        </div>
      </div>
    </div>
  );
}

export default Overview
