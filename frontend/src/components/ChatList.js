import React from "react";

export default function ChatList({ messages, userId }) {
  return (
    <div className="border p-4 rounded bg-[#D0D7E1] h-96 overflow-y-scroll">
      {messages.map((msg) => (
        <div key={msg.id} className="mb-2">
          <strong>{msg.sender_id === userId ? "Bạn" : "Người khác"}:</strong> {msg.message}
        </div>
      ))}
    </div>
  );
}
