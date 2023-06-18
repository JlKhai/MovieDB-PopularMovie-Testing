import Dashboard from './pages/Dashboard'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from './components/Filter'

const App = () => {
  const [movies, setMovies] = useState([])
  const [filtered, setFiltered] = useState([])
  const [activeGenre, setActiveGenre] = useState(0)

  const fetchData = async () => {
    const { data } = await axios.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=c369eb118a87e0fa65c244558687ec35',
    )
    console.log(data?.results)
    setMovies(data?.results)
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className="body">
      <Navbar filtered={filtered} />
      <Filter
        movies={movies}
        filtered={filtered}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <Dashboard
        movies={movies}
        filtered={filtered}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <Footer />
    </div>
  )
}

export default App
