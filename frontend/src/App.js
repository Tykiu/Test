import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import UserInfo from "./pages/UserInfo";
import Chat from "./pages/Chat";
import StudyBuddy from "./pages/StudyBuddy";
import Tutor from "./pages/Tutor";

function App() {
  const user = { id: 1, name: "Nguyen Van A", mssv: "25520000", email: "a@example.com", verified: true, avatar: "https://via.placeholder.com/150" };

  return (
    <Router>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userinfo" element={<UserInfo userId={user.id} />} />
        <Route path="/chat" element={<Chat userId={user.id} />} />
        <Route path="/study-buddy" element={<StudyBuddy />} />
        <Route path="/tutor" element={<Tutor />} />
      </Routes>
    </Router>
  );
}

export default App;
