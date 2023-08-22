import { FC } from "react"
import EmptyState from "../components/EmptyState"

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="hidden lg:block lg:pl-80 h-full">
      <EmptyState />
    </div>
  )
}

export default page
