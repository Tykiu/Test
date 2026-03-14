import React from "react";

export default function UserCard({ user }) {
  return (
    <div className="border p-4 rounded bg-[#D0D7E1]">
      <img
        src={user.avatar}
        alt="avatar"
        className={`w-16 h-16 rounded-full border-4 ${user.verified ? "border-green-400" : "border-red-400"}`}
      />
      <h3 className="mt-2 text-lg font-bold">
        {user.name} {user.verified ? "✅" : "⚠️"}
      </h3>
      <p>MSSV: {user.mssv}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

