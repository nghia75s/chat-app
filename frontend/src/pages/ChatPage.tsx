// Chat Page
import { PrimarySidebar } from "../cchat/PrimarySidebar"
import { ChatListSidebar } from "../cchat/chat/ChatListSidebar"
import { MainChatArea } from "../cchat/chat/MainChatArea"
import { RightInfoPanel } from "../cchat/chat/RightInfoPanel"

export default function ChatPage() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-white text-zinc-900 font-sans">
      {/* Cột 1: Global Navigation */}
      <PrimarySidebar activeTab="chat" />

      {/* Cột 2: Danh sách hội thoại */}
      <ChatListSidebar />

      {/* Cột 3: Khu vực nhắn tin chính */}
      <MainChatArea />

      {/* Cột 4: Thông tin hội thoại */}
      <RightInfoPanel />
    </div>
  )
}
