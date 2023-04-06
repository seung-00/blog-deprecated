import { useRouter } from 'next/router'
import React from 'react'

type Props = {
  children: string
}

const Tag: React.FC<Props> = ({ children }) => {
  const router = useRouter()

  const handleClick = (value: string) => {
    router.push(`/?tag=${value}`)
  }
  return (
    <div
      onClick={() => handleClick(children)}
      className="text-xs text-gray-700 font-medium font-normal rounded-full bg-gray-100 px-2 py-1 cursor-pointer"
    >
      {children}
    </div>
  )
}

export default Tag
