import React, { useEffect, useState, createContext, useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { auth } from "../Database/fb";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import IntroPage from "./Components/Intro";

const UserContext = createContext();

function App() {
  const [presentUser, setPresentUser] = useState(null);
  console.log(import.meta.env.VITE_PROJECT_NAME);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setPresentUser(user ? user : null);
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  return (
    <Router>
      <UserContext.Provider value={{ presentUser, setPresentUser }}>
        <Routes>
          {presentUser ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Navigate to="/" />} /> {/* Redirect unknown routes */}
            </>
          ) : (
            <>
              <Route path="/intro" element={<IntroPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="*" element={<Navigate to="/intro" />} /> {/* Redirect unknown routes */}
            </>
          )}
        </Routes>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
export const useUser = () => useContext(UserContext);
