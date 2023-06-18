import MovieList from '../components/MovieList'
import { AnimatePresence, motion } from 'framer-motion'

const Dashboard = ({ filtered }) => {
  return (
    <motion.div className="h-[4000px] md:h-[2300px] lg:h-[2000px] xl:h-screen container mx-auto overflow-hidden flex flex-wrap justify-center gap-4 mt-10">
      <AnimatePresence>
        {filtered?.map((movie) => {
          return <MovieList key={movie.id} movie={movie} />
        })}
      </AnimatePresence>
    </motion.div>
  )
}

export default Dashboard
