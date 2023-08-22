import getConversations from "../actions/getConversations"
import getUsers from "../actions/getUsers"
import Sidebar from "../components/sidebar/Sidebar"
import ConversationList from "./components/ConversationList"

export default async function ConversationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const converstions = await getConversations()
  const users = await getUsers()
  return (
    // @ts-expect-error Server Component
    <Sidebar>
      <div className="h-full">
        <ConversationList users={users} initialItems={converstions} />
        {children}
      </div>
    </Sidebar>
  )
}
