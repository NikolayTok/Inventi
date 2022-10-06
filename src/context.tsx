import React from 'react'
import { PostsTypes } from './types'

interface DataContext {
  data: PostsTypes[]
}

export const Context = React.createContext<DataContext | null>(null)
