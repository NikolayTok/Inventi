import React from 'react'
import { PostsTypes } from './types'

interface DataContext {
  data: PostsTypes[]
  deletePost: (id: number) => void
}

export const Context = React.createContext<DataContext | null>(null)
