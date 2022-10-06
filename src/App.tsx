import { useEffect, useState } from 'react'
import { Route, Routes} from 'react-router-dom'
import AllArticles from './components/AllArticles'
import { PostsTypes } from './types'
import { Context } from './context'
import PostDetail from './pages/PostDetail'

function App() {
  const [data, setData] = useState<PostsTypes[]>([])

  useEffect(() => {
    const getData = async () => {
      let res = await fetch('https://jsonplaceholder.typicode.com/posts')
      let posts = await res.json()
      setData(posts)
    }
    getData()
  }, [])

  return (
    <div className='App flex justify-between'>
      <Context.Provider value={{ data }}>
        <AllArticles />
        <Routes>
          <Route path='detailPost/:id' element={<PostDetail />} />
        </Routes>
      </Context.Provider>
    </div>
  )
}

export default App
