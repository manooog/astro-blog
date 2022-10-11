import axios from "axios"

export interface ListRes<T> {
  data: ListItem<T>[]
  meta: {
    pagination: any
  }
}

export interface ListItem<T> {
  id: number
  attributes: T
}

// TODO 可以与后端模型共享类型吗？
export type Post = {
  title: string
  richContent: string
}

export const instance = axios.create({ baseURL: process.env.API_PREFIX })
