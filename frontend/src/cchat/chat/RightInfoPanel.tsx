// Right Info Panel
import { Users, Bell, Clock, ShieldAlert, ChevronRight, Image as ImageIcon, FileText, Link as LinkIcon, Pin } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RightInfoPanel() {
  return (
    <div className="flex w-[340px] shrink-0 flex-col bg-white border-l border-zinc-200 h-full overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-center border-b border-zinc-200 px-4 py-[14px] shrink-0 font-medium text-[16px] text-zinc-900 shadow-sm z-10">
        Thông tin hội thoại
      </div>

      <div className="flex-1 overflow-y-auto min-h-0 custom-scrollbar">
        <div className="flex flex-col pb-6">
          
          {/* Profile Section */}
          <div className="flex flex-col items-center pt-5 pb-4 px-4 border-b border-zinc-200/60">
            <Avatar className="h-[64px] w-[64px] mb-3">
              <AvatarImage src="/avatars/01.png" className="object-cover" />
              <AvatarFallback className="bg-blue-100 text-blue-700 text-xl font-semibold border border-zinc-200">
                TD
              </AvatarFallback>
            </Avatar>
            <h2 className="text-[18px] font-semibold text-zinc-900 mb-4 text-center">Team Design</h2>
            
            {/* Quick Actions */}
            <div className="flex items-start justify-center gap-6 w-full">
              <div className="flex flex-col items-center gap-1.5 cursor-pointer group w-16">
                <div className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-zinc-100 text-zinc-700 transition-colors group-hover:bg-zinc-200">
                  <Bell className="h-[18px] w-[18px]" />
                </div>
                <span className="text-[12px] text-zinc-600 text-center leading-tight">Tắt thông báo</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 cursor-pointer group w-16">
                <div className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-zinc-100 text-zinc-700 transition-colors group-hover:bg-zinc-200">
                  <Pin className="h-[18px] w-[18px]" />
                </div>
                <span className="text-[12px] text-zinc-600 text-center leading-tight">Ghim hội thoại</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 cursor-pointer group w-16">
                <div className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-zinc-100 text-zinc-700 transition-colors group-hover:bg-zinc-200">
                  <Users className="h-[18px] w-[18px]" />
                </div>
                <span className="text-[12px] text-zinc-600 text-center leading-tight">Thêm thành viên</span>
              </div>
            </div>
          </div>

          {/* Accordion Menus */}
          <div className="flex flex-col">
             
            {/* Reminders */}
            <div className="border-b border-zinc-200/60 w-full hover:bg-zinc-50 transition-colors">
              <button className="flex items-center justify-between w-full px-4 py-3">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-zinc-500" strokeWidth={1.5} />
                  <span className="text-[15px] font-medium text-zinc-900">Danh sách nhắc hẹn</span>
                </div>
                <ChevronRight className="h-4 w-4 text-zinc-400" />
              </button>
            </div>

            {/* Media/Content */}
            <div className="border-b border-zinc-200/60 w-full py-2">
              <div className="px-4 py-2">
                <span className="text-[13px] font-semibold text-zinc-500/80 uppercase tracking-wider">Ảnh, Link, File đã gửi</span>
              </div>
              <button className="flex items-center justify-between w-full px-4 py-3 hover:bg-zinc-50 transition-colors">
                <div className="flex items-center gap-3">
                  <ImageIcon className="h-5 w-5 text-zinc-500" strokeWidth={1.5} />
                  <span className="text-[15px] font-medium text-zinc-900">Ảnh / Video</span>
                </div>
                <ChevronRight className="h-4 w-4 text-zinc-400" />
              </button>

              <div className="grid grid-cols-4 gap-1 px-4 mb-2 mt-1">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=300" className="rounded-md h-[72px] w-full object-cover hover:opacity-90 cursor-pointer border border-zinc-100" alt="Preview 1" />
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=300" className="rounded-md h-[72px] w-full object-cover hover:opacity-90 cursor-pointer border border-zinc-100" alt="Preview 2" />
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=300" className="rounded-md h-[72px] w-full object-cover hover:opacity-90 cursor-pointer border border-zinc-100" alt="Preview 3" />
                <div className="rounded-md h-[72px] w-full bg-zinc-100 flex items-center justify-center text-zinc-500 cursor-pointer hover:bg-zinc-200 transition-colors border border-zinc-100">
                  <span className="text-sm font-semibold">+262</span>
                </div>
              </div>

              <button className="flex items-center justify-between w-full px-4 py-3 hover:bg-zinc-50 transition-colors">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-zinc-500" strokeWidth={1.5} />
                  <span className="text-[15px] font-medium text-zinc-900">Tài liệu / File</span>
                </div>
                <ChevronRight className="h-4 w-4 text-zinc-400" />
              </button>
              
              <button className="flex items-center justify-between w-full px-4 py-3 hover:bg-zinc-50 transition-colors">
                <div className="flex items-center gap-3">
                  <LinkIcon className="h-5 w-5 text-zinc-500" strokeWidth={1.5} />
                  <span className="text-[15px] font-medium text-zinc-900">Link chia sẻ</span>
                </div>
                <ChevronRight className="h-4 w-4 text-zinc-400" />
              </button>
            </div>

            {/* Security */}
            <div className="border-b border-zinc-200/60 w-full hover:bg-zinc-50 transition-colors mt-2">
              <button className="flex items-center justify-between w-full px-4 py-3">
                <div className="flex items-center gap-3">
                  <ShieldAlert className="h-5 w-5 text-zinc-500" strokeWidth={1.5} />
                  <span className="text-[15px] font-medium text-zinc-900">Thiết lập bảo mật</span>
                </div>
                <ChevronRight className="h-4 w-4 text-zinc-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
