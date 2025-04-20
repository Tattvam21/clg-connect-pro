
import { ChatArea } from "@/components/ChatArea";

export default function Messages() {
  return (
    <div className="p-4 md:p-8 ml-0 md:ml-64">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Messages</h1>
      <div className="max-w-3xl mx-auto">
        <ChatArea />
      </div>
    </div>
  );
}
