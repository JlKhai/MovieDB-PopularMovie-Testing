import { BsFillBookmarkHeartFill } from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className="sticky top-0 z-10 bg-gray-900 flex justify-around items-center gap-4 p-6">
      <h2 className="font-bold text-md md:text-4xl text-red-600  hover:text-red-700 cursor-pointer select-none">
        <span className="  font-bold text-lg md:text-4xl text-sky-600  hover:text-sky-700 cursor-pointer select-none">
          React
        </span>{' '}
        Movies
      </h2>
      <input
        disabled
        placeholder="Search disabled"
        type="text"
        className="w-[300px] md:w-[400px] lg:w-[600px] outline-none shadow-lg px-4 py-2 bg-gray-300  rounded-full"
      />
      <div className="relative ">
        <BsFillBookmarkHeartFill className="font-bold text-4xl md:text-5xl text-red-600  hover:text-red-700 cursor-pointer select-none" />
        <span className="hidden lg:block absolute bottom-8 left-12 font font-bold  text-xs text-red-700 ">
          SAVED
        </span>
      </div>
    </div>
  )
}

export default Navbar
