import CONFIG from "@/site.config"
import Tag from "@components/Tag"
import { Post } from "@/src/types"
import { formatDate } from "@/src/libs/utils"
import Image from "next/image"
import React from "react"

type Props = {
  data: Post
}

const PostHeader: React.FC<Props> = ({ data }) => {
  return (
    <>
      <h1 className="font-bold text-4xl text-black dark:text-white divide-y pb-5">
        {data.title}
      </h1>
      {data.type[0] !== "Paper" && (
        <nav className="my-4 text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-3 mb-10">
              <div className=" mr-2 md:ml-0">
                  {formatDate(
                      data?.date?.start_date || data.createdTime,
                      CONFIG.lang
                  )}
              </div>
              <div className="flex items-center">
                  {data.tags && (
                      <div className="flex flex-nowrap max-w-full overflow-x-auto article-tags gap-2">
                          {data.tags.map((tag: string) => (
                              <Tag key={tag}>{tag}</Tag>
                          ))}
                      </div>
                  )}
              </div>
          </div>
          {data.thumbnail && (
            <div className="relative w-full pb-[66%] lg:pb-[50%] bg-gray-200 dark:bg-zinc-700 mb-7 rounded-3xl overflow-hidden">
              <Image
                src={data.thumbnail}
                className="object-cover"
                layout="fill"
                alt={data.title}
              />
            </div>
          )}
        </nav>
      )}
    </>
  )
}

export default PostHeader
