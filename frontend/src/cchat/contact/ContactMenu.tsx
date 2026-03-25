// Contact Menu
import { Search, UserPlus, Users, UserCog, MailOpen } from "lucide-react"

export function ContactMenu() {
  const menuItems = [
    { id: "friends", icon: UserPlus, label: "Danh sách bạn bè", isActive: true },
    { id: "groups", icon: Users, label: "Danh sách nhóm và cộng đồng" },
    { id: "requests", icon: MailOpen, label: "Lời mời kết bạn" },
    { id: "group-invites", icon: UserCog, label: "Lời mời vào nhóm" },
  ]

  return (
    <div className="flex w-[340px] shrink-0 flex-col border-r border-zinc-200 bg-white h-full z-10">
      {/* Search Header */}
      <div className="flex flex-col px-4 pt-4 pb-3 border-b border-zinc-100">
        <div className="flex items-center gap-2">
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
        </div>
      </div>

      {/* Menu List */}
      <div className="flex flex-col flex-1 overflow-y-auto min-h-0 py-2 custom-scrollbar">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`flex items-center gap-3 px-4 py-3 mx-2 rounded-md transition-colors ${
              item.isActive 
                ? "bg-[#e5efff] text-[#005AE0] font-medium" 
                : "text-zinc-800 hover:bg-zinc-100 font-normal"
            }`}
          >
            <item.icon className="h-[22px] w-[22px]" strokeWidth={item.isActive ? 2 : 1.5} />
            <span className="text-[15px]">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
