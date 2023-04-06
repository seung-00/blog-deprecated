import { useState } from "react"

import * as Cards from "./components/cards"
import * as Lists from "./components/lists"

import { Category, Posts, Tag } from "@customTypes/index"
import SearchInput from "./components/SearchInput"
import { FeedHeader } from "./components/FeedHeader"
import Footer from "./components/Footer"

type Props = {
  categories: Category
  tags: Tag
  posts: Posts
}

const Feed: React.FC<Props> = ({ categories, tags, posts }) => {
  const [q, setQ] = useState("")

  return (
    <div className="block md:grid grid-cols-12 gap-6">
      <div className="hidden lg:block col-span-2">
        <Lists.TagList data={tags} />
      </div>
      <div className="col-span-12 lg:col-span-7">
        <Cards.MobileProfileCard />
        <SearchInput value={q} onChange={(e) => setQ(e.target.value)} />
        <Lists.TagList className="block lg:hidden" data={tags} />
        <FeedHeader categories={categories} />
        <Lists.PostList q={q} posts={posts} />
        <Footer className="block lg:hidden flex justify-center pb-8" />
      </div>
      <div className="hidden lg:block lg:col-span-3">
        <Cards.ProfileCard />
        <Cards.ServiceCard />
        <Cards.ContactCard />
        <Footer className="pt-4" />
      </div>
    </div>
  )
}

export default Feed
