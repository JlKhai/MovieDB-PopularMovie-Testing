import { AnimatePresence, motion } from 'framer-motion'
import { AiFillStar } from 'react-icons/ai'

const MovieList = ({ movie }) => {
  return (
    <motion.div
      layout
      transition={{ duration: 0.5 }}
      initial={{ scale: 1, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      whileHover={{ scale: 0.9 }}
      whileTap={{ scale: 1.1 }}
      className=" card z-0 w-42 h-48 cursor-pointer bg-gray-300 rounded-xl flex flex-col gap-2 shadow-lg"
    >
      <img
        className="image h-[100%] w-[100%] relative rounded-lg hover:rounded-lg"
        src={`https://image.tmdb.org/t/p/w500` + movie?.backdrop_path}
        alt=""
      />
      <div className="flex gap-5 justify-center items-center absolute ">
        <div className="rating py-2 bg-red-600 w-12 flex items-center justify-center gap-1">
          <AiFillStar className=" text-white" />{' '}
          <span className=" text-white font-semi-bold">
            {movie?.vote_average}
          </span>
        </div>
        <h2 className="title  px-4 rounded-md bg-gray-800 hover:bg-gray-800 text-white font-semibold">
          {movie?.original_title}
        </h2>
      </div>
    </motion.div>
  )
}

export default MovieList
