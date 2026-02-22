import { MessageSquare } from "lucide-react";

const ChatBubble = () => {
    return (
        <button
            className="fixed bottom-4 left-4 bg-[#013220] text-white p-4 rounded-full shadow-lg hover:bg-black transition-colors z-40"
            aria-label="Chat with us"
            title="Chat with us"
        >
            <MessageSquare className="h-6 w-6" />
        </button>
    );
};

export default ChatBubble;
