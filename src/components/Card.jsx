import React from 'react'

const Card = () => {
  return (
    <div className="bg-black rounded-md shadow-md h-fit w-[300px] min-w-[280px] text-white p-3 mx-2">
      <p className="text-3xl">Heading of the Day</p>
      <p className="text-xl mt-1">description</p>
      <p className="text-sm mt-1">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore itaque
        architecto aspernatur rem, tenetur nostrum molestiae! Error impedit,
        quas, totam minus doloremque amet, explicabo esse delectus a quis
        placeat optio.
      </p>
      <button className="my-2 rounded-sm bg-white text-black p-1 flex items-center underline">
        Explore
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-right"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </div>
  );
}

export default Card
