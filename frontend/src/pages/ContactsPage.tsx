// Contacts Page
import { PrimarySidebar } from "../cchat/PrimarySidebar"
import { ContactMenu } from "../cchat/contact/ContactMenu"
import { ContactListArea } from "../cchat/contact/ContactListArea"

export default function ContactsPage() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-white text-zinc-900 font-sans">
      {/* Cột 1: Global Navigation */}
      <PrimarySidebar activeTab="contacts" />
      {/* Cột 2: Menu Danh bạ */}
      <ContactMenu />
      {/* Cột 3: Main Contact List Area */}
      <ContactListArea />
    </div>
  )
}
