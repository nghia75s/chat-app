import * as React from "react"
import { Search, UserPlus, Filter, MoreHorizontal, CheckCheck } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const mockConversations = [
  { id: 1, name: "Team Design", avatar: "/avatars/01.png", fallback: "TD", lastMessage: "Jessie: Đã gửi file thiết kế mới", time: "6 phút", unread: 2, isOnline: true },
  { id: 2, name: "Nguyễn Văn A", avatar: "https://i.pravatar.cc/150?u=a", fallback: "NA", lastMessage: "Bạn: Ok chốt vậy nhé!", time: "20 phút", isOnline: true },
  { id: 3, name: "Trần Thị B", avatar: "https://i.pravatar.cc/150?u=b", fallback: "TB", lastMessage: "Trần Thị B đã gửi 1 ảnh", time: "1 giờ", isOnline: false },
  { id: 4, name: "Group Frontend", avatar: "https://i.pravatar.cc/150?u=g", fallback: "GF", lastMessage: "Bạn: Chừng nào release?", time: "Hôm qua", unread: 5, isOnline: true },
  { id: 5, name: "Lê Hoàng C", avatar: "https://i.pravatar.cc/150?u=c", fallback: "LC", lastMessage: "Thanks bro", time: "Hôm qua", isRead: true },
  { id: 6, name: "Phạm D", avatar: "https://i.pravatar.cc/150?u=d", fallback: "PD", lastMessage: "Gọi tôi lúc 5h chiều nay", time: "Thứ 2" },
  { id: 7, name: "Gia đình", avatar: "https://i.pravatar.cc/150?u=f", fallback: "GĐ", lastMessage: "Mẹ: Cuối tuần về không con?", time: "Thứ 2" },
  { id: 8, name: "Vũ E", avatar: "https://i.pravatar.cc/150?u=e", fallback: "VE", lastMessage: "Voice message", time: "25/03" },
  { id: 9, name: "Startup Founder Club", avatar: "https://i.pravatar.cc/150?u=s", fallback: "SF", lastMessage: "Lịch họp tháng này dời sang T6", time: "20/03" },
]

export function ChatListSidebar() {
  const [activeTab, setActiveTab] = React.useState("all")

  return (
    <div className="flex w-[340px] shrink-0 flex-col border-r border-zinc-200 bg-white h-full z-10">
      {/* Search Header */}
      <div className="flex flex-col px-4 pt-4 pb-2">
        <div className="flex items-center gap-2 mb-3">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-1/2 h-[16px] w-[16px] -translate-y-1/2 text-zinc-500" />
            <input
              placeholder="Tìm kiếm"
              className="w-full rounded-md bg-[#eaedf0] py-[6px] pl-[30px] pr-3 text-[14px] text-zinc-900 outline-none placeholder:text-zinc-500 focus:bg-white focus:ring-1 focus:ring-[#005AE0] transition-all"
            />
          </div>
          <button className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-md text-zinc-600 hover:bg-zinc-100 transition-colors">
            <UserPlus className="h-[18px] w-[18px]" />
          </button>
          <button className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-md text-zinc-600 hover:bg-zinc-100 transition-colors">
            <MoreHorizontal className="h-[18px] w-[18px]" />
          </button>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-between border-b border-zinc-200">
          <div className="flex items-center space-x-6">
            <button 
              onClick={() => setActiveTab("all")}
              className={`text-[14px] pb-[6px] font-medium transition-colors border-b-2 ${
                activeTab === "all" ? "border-[#005AE0] text-[#005AE0]" : "border-transparent text-zinc-500 hover:text-zinc-800"
              }`}
            >
              Tất cả
            </button>
            <button 
              onClick={() => setActiveTab("unread")}
              className={`text-[14px] pb-[6px] font-medium transition-colors border-b-2 ${
                activeTab === "unread" ? "border-[#005AE0] text-[#005AE0]" : "border-transparent text-zinc-500 hover:text-zinc-800"
              }`}
            >
              Chưa đọc
            </button>
          </div>
          <button className="flex items-center justify-center pb-[6px] text-zinc-500 hover:text-zinc-800 transition-colors">
            <Filter className="h-[16px] w-[16px]" />
          </button>
        </div>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto min-h-0 custom-scrollbar">
        <div className="flex flex-col py-1">
          {mockConversations.map((chat) => {
            const isActive = chat.id === 1

            return (
              <div
                key={chat.id}
                className={`flex items-start gap-3 px-4 py-3 transition-colors cursor-pointer relative group ${
                  isActive ? "bg-[#e5efff]" : "hover:bg-zinc-100"
                }`}
              >
                <div className="relative shrink-0">
                  <Avatar className="h-[48px] w-[48px] rounded-full border border-zinc-200/50">
                    <AvatarImage src={chat.avatar} alt={chat.name} className="object-cover" />
                    <AvatarFallback className="bg-blue-100 text-blue-700 font-semibold text-lg">
                      {chat.fallback}
                    </AvatarFallback>
                  </Avatar>
                  {chat.isOnline && (
                     <span className="absolute bottom-0 right-0 h-[12px] w-[12px] rounded-full bg-green-500 border-2 border-white"></span>
                  )}
                </div>

                <div className="flex flex-1 flex-col overflow-hidden pt-[2px] min-w-0">
                  <div className="flex items-center justify-between mb-[2px]">
                    <span className="truncate text-[15px] font-medium text-zinc-900">
                      {chat.name}
                    </span>
                    <span className={`text-[12px] whitespace-nowrap ml-2 ${chat.unread ? "text-zinc-900 font-medium" : "text-zinc-500"}`}>
                      {chat.time}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between min-w-0">
                    <div className={`truncate text-[14px] flex-1 min-w-0 pr-2 ${chat.unread ? "text-zinc-900 font-medium" : "text-zinc-500"}`}>
                      <span className={chat.lastMessage.startsWith("Bạn:") ? "text-zinc-500 font-normal" : ""}>
                         {chat.lastMessage}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-1.5 shrink-0 h-[18px]">
                      {chat.isRead && !chat.unread && (
                        <CheckCheck className="h-[14px] w-[14px] text-zinc-400" />
                      )}
                      {chat.unread && (
                        <span className="flex h-[18px] min-w-[18px] px-[5px] items-center justify-center rounded-full bg-[#ff4a4a] text-[11px] font-bold text-white shadow-sm">
                          {chat.unread > 5 ? "5+" : chat.unread}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
