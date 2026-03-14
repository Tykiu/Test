import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import ChatList from "../components/ChatList";

export default function Chat({ userId }) {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    fetchChats();
  }, []);

  async function fetchChats() {
    let { data, error } = await supabase.from("chats").select("*").or(`sender_id.eq.${userId},receiver_id.eq.${userId}`);
    if (!error) setMessages(data);
  }

  async function sendMessage(receiverId) {
    let { data, error } = await supabase.from("chats").insert({
      sender_id: userId,
      receiver_id: receiverId,
      message: text
    });
    if (!error) setMessages([...messages, ...data]);
    setText("");
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Chat</h1>
      <ChatList messages={messages} userId={userId} />
      <div className="mt-4 flex gap-2">
        <input value={text} onChange={(e) => setText(e.target.value)} className="border px-2 py-1 flex-1" />
        <button onClick={() => sendMessage(2)} className="bg-[#064469] text-white px-4 py-2 rounded">Gửi</button>
      </div>
    </div>
  );
}