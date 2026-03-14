// src/components/Navbar.js
import React from "react";

export default function Navbar({ user }) {
  return (
    <nav className="bg-[#072D44] text-[#D0D7E1] flex justify-between p-4">
      <div className="font-bold text-xl">Study Buddy</div>
      <div className="flex gap-4">
        <a href="/">Trang chủ</a>
        <a href="/study-buddy">Study Buddy Mode</a>
        <a href="/tutor">Tutor</a>
        <a href="/chat">Chat</a>
      </div>
      <div>
        {user ? (
          <img src={user.avatar} alt="avatar" className="w-8 h-8 rounded-full" />
        ) : (
          <a href="/login">Đăng nhập</a>
        )}
      </div>
    </nav>
  );
}
