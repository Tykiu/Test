import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import RequestCard from "../components/RequestCard";

export default function Tutor() {
  const [requests, setRequests] = useState([]);
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    fetchTutorRequests();
    fetchTutors();
  }, []);

  async function fetchTutorRequests() {
    let { data, error } = await supabase.from("tutor_requests").select("*");
    if (!error) setRequests(data);
  }

  async function fetchTutors() {
    let { data, error } = await supabase.from("users").select("*").eq("role", "tutor");
    if (!error) setTutors(data);
  }

  async function createTutorRequest(newReq) {
    let { data, error } = await supabase.from("tutor_requests").insert(newReq);
    if (!error) setRequests([...requests, ...data]);
  }

  function showDetail(req) {
    alert(`Chi tiết yêu cầu:\nTên: ${req.user_id}\nMôn học: ${req.subject}\nHình thức: ${req.mode}\nThời gian: ${req.time}\nGhi chú: ${req.note}`);
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Tutor Mode</h1>
      <button onClick={() => createTutorRequest({
        user_id: 1,
        subject: "Physics",
        mode: "Offline",
        link_or_address: "Thư viện trường",
        time: "2026-03-15 14:00",
        note: "Cần gia sư tại thư viện",
        verified: true
      })}>Tạo yêu cầu mẫu</button>

      <h2 className="mt-6 text-xl">Danh sách yêu cầu tìm gia sư</h2>
      <div className="grid grid-cols-2 gap-4 mt-2">
        {requests.map((req) => (
          <RequestCard key={req.id} request={req} onClick={showDetail} />
        ))}
      </div>

      <h2 className="mt-6 text-xl">Danh sách gia sư hiện có</h2>
      <div className="grid grid-cols-2 gap-4 mt-2">
        {tutors.map((tutor) => (
          <div key={tutor.id} className="border p-4 rounded bg-[#9CCDDB]">
            <h3>{tutor.name} ✅</h3>
            <p>MSSV: {tutor.mssv}</p>
            <p>Email: {tutor.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}