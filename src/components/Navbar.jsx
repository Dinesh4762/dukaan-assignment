export default function Navbar() {
  return (
    <nav className="z-20 sticky top-0 left-0 w-full flex bg-white p-2 items-center justify-between gap-2 px-4 py-2 sm:gap-4 border-b">
      {/* first div */}
      <div className="flex sm:grow gap-2 sm:gap-3 items-center text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6 block lg:hidden"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
        <span className="text-lg font-medium">Payouts</span>
        <div className="flex items-center gap-1 text-sm">
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
          <span className="hidden sm:inline-block">How it works?</span>
        </div>
      </div>
      {/* second */}
      <div className="flex items-center gap-2 px-4 py-1.5 sm:py-[9px] w-[140px] bg-[#F2F2F2] text-[#808080] rounded sm:flex-grow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          width="24"
          height="24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <input
          type="text"
          name="search"
          id=""
          placeholder="Search Features, Tutorials, etc"
          className="w-full bg-transparent px-1 outline-none "
        />
      </div>
      {/* third div */}
      <div className="flex gap-2 sm:grow justify-end">
        <div className="rounded-full bg-grey w-9 h-9 grid place-content-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="4c4c4c"
            stroke=""
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-message-square-warning"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            <path d="M12 7v2" />
            <path d="M12 13h.01" />
          </svg>
        </div>
        <div className="rounded-full bg-grey w-9 h-9 grid place-content-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#111111"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
}
