import {
  NotionRenderer,
  Equation,
  Code,
  Collection,
  CollectionRow,
} from "react-notion-x"
import { Post } from "@/src/types"
import React from "react"
import PostHeader from "./PostHeader"
import Footer from "./PostFooter"
import CommentBox from "./CommentBox"
import Category from "@components/Category"

const mapPageUrl = (id: string) => {
  return "https://www.notion.so/" + id.replace(/-/g, "")
}

type Props = {
  blockMap: any
  data: Post
}

const PostDetail: React.FC<Props> = ({ blockMap, data }) => {
  const category = (data.category && data.category?.[0]) || undefined

  return (
      <div className="m-auto max-w-3xl my-10">
        <article className="my-10">
          {data.type[0] === "Post" && <PostHeader data={data} />}
          {blockMap && (
            <div className="-mt-4 ">
              <NotionRenderer
                recordMap={blockMap}
                components={{
                  equation: Equation,
                  code: Code,
                  collection: Collection,
                  collectionRow: CollectionRow,
                }}
                mapPageUrl={mapPageUrl}
              />
            </div>
          )}
        </article>
        {data.type[0] === "Post" && (
            <>
              <Footer />
              <CommentBox data={data} />
            </>
        )}
      </div>
  )
}

export default PostDetail
