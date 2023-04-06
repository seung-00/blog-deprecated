export type PostStatus = "Private" | "Public" | "PublicOnDetail"
export type PostType = "Post" | "Paper" | "Page"

export type Post = {
  id: string
  date: { start_date: string }
  type: PostType[]
  slug: string
  tags?: string[]
  category?: string[]
  summary?: string
  author?: {
    id: string
    name: string
    profile_photo?: string
  }[]
  title: string
  status: PostStatus[]
  createdTime: string
  fullWidth: boolean
  thumbnail?: string
}

export type Posts = Post[]

export type Tag = {
  [tagName: string]: number
}
export type Category = {
  [category: string]: number
}

export type ThemeType = "dark" | "light"
