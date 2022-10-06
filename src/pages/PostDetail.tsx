import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PostsTypes } from '../types'

const PostDetail = () => {
  const [detail, setDetail] = useState<PostsTypes | null>(null)
  const [image, setImage] = useState('')
  const { id } = useParams()

  useEffect(() => {
    setImage(`https://picsum.photos/id/${id}/200/300`)

    const getDetail = async () => {
      let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      let data = await res.json()
      setDetail(data)
    }
    getDetail()

  }, [id])

  return (
    <div className='w-[50%] flex flex-col items-center p-4 '>
        <div className="">
            <span className='block mb-1'>#{detail?.id}</span>
            <span className='block mb-1 text-[1.5rem]'>{detail?.title}</span>
            <span className='block mb-1'>{detail?.body}</span>
        </div>
      <img className='object-cover' src={image} alt='images post' />
    </div>
  )
}
export default PostDetail
