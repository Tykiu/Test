import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import RequestCard from "../components/RequestCard";

export default function StudyBuddy() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetchRequests();
  }, []);

  async function fetchRequests() {
    let { data, error } = await supabase.from("study_buddy_requests").select("*");
    if (!error) setRequests(data);
  }

  async function createRequest(newReq) {
    let { data, error } = await supabase.from("study_buddy_requests").insert(newReq);
    if (!error) setRequests([...requests, ...data]);
  }

  function showDetail(req) {
    alert(`Chi tiết yêu cầu:\nTên: ${req.user_id}\nHình thức: ${req.mode}\nThời gian: ${req.time}\nMôn học: ${req.subject}\nGhi chú: ${req.note}`);
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Study Buddy Mode</h1>
      <button onClick={() => createRequest({
        user_id: 1,
        number_of_people: 2,
        mode: "Online",
        link_or_address: "https://meet.example.com",
        time: "2026-03-12 10:00",
        subject: "Toán",
        note: "Cần bạn học cùng",
        verified: true
      })}>Tạo yêu cầu mẫu</button>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {requests.map((req) => (
          <RequestCard key={req.id} request={req} onClick={showDetail} />
        ))}
      </div>
    </div>
  );
}