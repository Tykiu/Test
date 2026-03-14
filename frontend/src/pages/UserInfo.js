import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

export default function UserInfo({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    let { data, error } = await supabase.from("users").select("*").eq("id", userId).single();
    if (!error) setUser(data);
  }

  async function updateUser(updates) {
    let { data, error } = await supabase.from("users").update(updates).eq("id", userId);
    if (!error) setUser(data[0]);
  }

  return (
    <div className="p-6">
      {user && (
        <div>
          <img
            src={user.avatar}
            alt="avatar"
            className={`w-24 h-24 rounded-full border-4 ${user.verified ? "border-green-400" : "border-red-400"}`}
          />
          <h2 className="text-xl mt-2">{user.name} {user.verified ? "✅" : "⚠️ Chưa xác thực"}</h2>
          <p>Email: {user.email}</p>
          <button onClick={() => updateUser({ password: "newpassword" })} className="mt-4 bg-[#064469] text-white px-4 py-2 rounded">
            Đổi mật khẩu
          </button>
        </div>
      )}
    </div>
  );
}