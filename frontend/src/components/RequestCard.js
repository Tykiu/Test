import React from "react";

export default function RequestCard({ request, onClick }) {
  return (
    <div
      className="border p-4 rounded bg-[#9CCDDB] cursor-pointer hover:bg-[#5790AB]"
      onClick={() => onClick(request)}
    >
      <h3 className="font-bold">{request.user_id} {request.verified ? "✅" : "⚠️"}</h3>
      <p>Số người: {request.number_of_people}</p>
      <p>Hình thức: {request.mode}</p>
      <p>Thời gian: {request.time}</p>
      {request.subject && <p>Môn học: {request.subject}</p>}
      <p>Ghi chú: {request.note}</p>
    </div>
  );
}
