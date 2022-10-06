import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../context'
import { PostsTypes } from '../types'

const AllArticles = () => {
  const dataContext = useContext(Context)
  const posts = dataContext?.data

  return (
    <div className='w-[50%] h-[100vh] overflow-scroll'>
      <ul>
        {posts?.map((post: PostsTypes) => {
          return (
            <li key={post.id} className='border rounded p-4 mb-4'>
              <div className='flex items-center gap-4 text-bold text-[2rem] relative'>
                <h2 className='text-left'>
                  {post.title}
                </h2>
                <span className='absolute text-[1rem] top-[-10px] right-[-7px]'>{post.id}</span>
              </div>
              <p className='text-left mb-4'>{post.body}</p>
              <Link
                to={`detailPost/${post.id}`}
                className='transition text-center block p-4 bg-[#eeaceb] hover:bg-[#ffd7d7c9] rounded
             text-[#000000c9]'
              >
                Detail
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default AllArticles
