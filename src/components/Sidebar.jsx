import React from 'react'

const Sidebar = () => {
  return (
    <aside className="grow flex flex-col opacity-0 fixed left-0 top-0 z-50  pointer-events-none lg:sticky lg:opacity-100 lg:pointer-events-auto transition-all duration-300 bg-sidebar text-white max-w-[224px] h-dvh px-3 py-2 shrink-0">  
      <div className="flex w-full mt-1">
        <div className='grow'>
          <img
            src="./src/assets/profile.png"
            alt="profile"
            width={"39px"}
            height={"39px"}
          />
        </div>
        <div className="flex flex-col grow">
          <p className="text-base font-medium">Dinesh Kumar</p>
          <p className="text-xs underline">Visit Store</p>
        </div>
        <div className="ml-auto flex items-center">
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
        </div>
      </div>
      {/* sideItems */}
      <div className="mt-10">
        {/* innerDiv */}
        <div className="text-base w-full flex flex-col gap-1 cursor-pointer select-none">
          <div className="flex gap-3 justify-start items-center rounded-sm font-normal text-[#D2D4D9] hover:bg-side-hover px-2 py-1 items">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#b3b6bf"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-home"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Home
          </div>
          <div className="flex gap-3 justify-start items-center rounded-sm font-normal text-[#D2D4D9] hover:bg-side-hover px-2 py-1 items">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#b3b6bf"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-book-a"
            >
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
              <path d="m8 13 4-7 4 7" />
              <path d="M9.1 11h5.7" />
            </svg>
            Orders
          </div>
          <div className="flex gap-3 justify-start items-center rounded-sm font-normal text-[#D2D4D9] hover:bg-side-hover px-2 py-1 items">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#b3b6bf"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-shopping-cart"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
            Products
          </div>
          <div className="flex gap-3 justify-start items-center rounded-sm font-normal text-[#D2D4D9] bg-side-hover px-2 py-1 items">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#b3b6bf"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-truck"
            >
              <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
              <path d="M15 18H9" />
              <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
              <circle cx="17" cy="18" r="2" />
              <circle cx="7" cy="18" r="2" />
            </svg>
            Delivery
          </div>
          <div className="flex gap-3 justify-start items-center rounded-sm font-normal text-[#D2D4D9] hover:bg-side-hover px-2 py-1 items">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#b3b6bf"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-badge-percent"
            >
              <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
              <path d="m15 9-6 6" />
              <path d="M9 9h.01" />
              <path d="M15 15h.01" />
            </svg>
            Marketing
          </div>
          <div className="flex gap-3 justify-start items-center rounded-sm font-normal text-[#D2D4D9] hover:bg-side-hover px-2 py-1 items">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#b3b6bf"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-area-chart"
            >
              <path d="M3 3v18h18" />
              <path d="M7 12v5h12V8l-5 5-4-4Z" />
            </svg>
            Analytics
          </div>
          <div className="flex gap-3 justify-start items-center rounded-sm font-normal text-[#D2D4D9] hover:bg-side-hover px-2 py-1 items">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#b3b6bf"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-dock"
            >
              <path d="M2 8h20" />
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="M6 16h12" />
            </svg>
            Payouts
          </div>
          <div className="flex gap-3 justify-start items-center rounded-sm font-normal text-[#D2D4D9] hover:bg-side-hover px-2 py-1 items">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#b3b6bf"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-badge-dollar-sign"
            >
              <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
              <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
              <path d="M12 18V6" />
            </svg>
            Discounts
          </div>
          <div className="flex gap-3 justify-start items-center rounded-sm font-normal text-[#D2D4D9] hover:bg-side-hover px-2 py-1 items">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#b3b6bf"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-users"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            Audience
          </div>
          <div className="flex gap-3 justify-start items-center rounded-sm font-normal text-[#D2D4D9] hover:bg-side-hover px-2 py-1 items">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#b3b6bf"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-sun-moon"
            >
              <path d="M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.9 4.9 1.4 1.4" />
              <path d="m17.7 17.7 1.4 1.4" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.3 17.7-1.4 1.4" />
              <path d="m19.1 4.9-1.4 1.4" />
            </svg>
            Appearance
          </div>
          <div className="flex gap-3 justify-start items-center rounded-sm font-normal text-[#D2D4D9] hover:bg-side-hover px-2 py-1 items">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#b3b6bf"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-blocks"
            >
              <rect width="7" height="7" x="14" y="3" rx="1" />
              <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3" />
            </svg>
            Plugins
          </div>
        </div>
      </div>
      {/* credits */}
      <div className="flex mt-auto bg-side-hover rounded-[4px] items-center gap-4 text-base px-2 py-1 mb-2 mx-1">
        <div className="flex items-center justify-center p-[6px] w-1/5 bg-[#4A5065] rounded-[3px]">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-wallet"
            >
              <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
              <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
            </svg>
          </div>
        </div>
        <div>
          <p className='text-sm'>Available Credits</p>
          <span className='font-semibold'>224.10</span>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar
