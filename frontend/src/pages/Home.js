import React from "react";

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Chào mừng đến với Study Buddy</h1>
      <p className="mt-2">Ứng dụng giúp sinh viên tìm bạn học và gia sư dễ dàng.</p>
      <div className="mt-4 flex gap-4">
        <a href="/login" className="bg-[#064469] text-white px-4 py-2 rounded">Đăng nhập</a>
        <a href="/register" className="bg-[#5790AB] text-white px-4 py-2 rounded">Đăng ký</a>
        <a href="/verify" className="bg-[#9CCDDB] text-black px-4 py-2 rounded">Xác thực MSSV</a>
      </div>
    </div>
  );
}
