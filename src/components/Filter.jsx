import { Center, SegmentedControl } from '@mantine/core'
import { useEffect } from 'react'

const Filter = ({
  movies,
  filtered,
  setFiltered,
  activeGenre,
  setActiveGenre,
}) => {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(movies)
      return
    }
    const filterMovie = movies?.filter((movie) =>
      movie.genre_ids.includes(activeGenre),
    )
    setFiltered(filterMovie)
  }, [activeGenre])
  return (
    <div className="container mx-auto sticky top-20 z-10">
      <SegmentedControl
        transitionDuration={500}
        fullWidth
        color="gray"
        className="bg-gray-400"
        data={[
          {
            label: (
              <Center onClick={() => setActiveGenre(0)}>
                <p className="hover:text-gray-200">All</p>
              </Center>
            ),
            value: 'All',
          },
          {
            label: (
              <Center onClick={() => setActiveGenre(28)}>
                <p className="hover:text-gray-200">Action</p>
              </Center>
            ),
            value: 'Action',
          },
          {
            label: (
              <Center onClick={() => setActiveGenre(18)}>
                <p className="">Drama</p>
              </Center>
            ),
            value: 'Drama',
          },
          {
            label: (
              <Center onClick={() => setActiveGenre(35)}>
                <p className="">Comedy</p>
              </Center>
            ),
            value: 'Comedy',
          },
          {
            label: (
              <Center onClick={() => setActiveGenre(16)}>
                <p className="">Animation</p>
              </Center>
            ),
            value: 'Animation',
          },
        ]}
      />
    </div>
  )
}

export default Filter
