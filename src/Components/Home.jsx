import React, { useEffect, useState } from "react";
import { useUser } from "../App";
import { doc, getDoc } from "firebase/firestore";
import { db, auth } from "../../Database/fb";
import { motion } from "framer-motion";

const Dashboard = () => {
  const { presentUser } = useUser(); 
  const [userData, setUserData] = useState(null); 

  useEffect(() => {
    if (presentUser) {
      console.log("Authenticated user UID:", presentUser.uid); // Should print a valid UID

      const fetchUserData = async () => {
        try {
          const userDocRef = doc(db, "users", presentUser.uid);
          const docSnap = await getDoc(userDocRef);

          if (docSnap.exists()) {
            setUserData(docSnap.data());
          } else {
            setUserData({
              fullName: presentUser.displayName || "Anonymous",
              email: presentUser.email || "",
            });
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };

      fetchUserData();
    }
  }, [presentUser]);

  return (
    <motion.div 
      initial={{ y: -200, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ duration: 0.6 }}
      className="p-4"
    >
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      {userData ? (
        <div className="mb-4">
          <p>
            <strong>Name:</strong> {userData.fullName}
          </p>
          <p>
            <strong>Email:</strong> {userData.email}
          </p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}

      <motion.button 
        whileHover={{ scale: 1.1, backgroundColor: "black" }} 
        transition={{ duration: 0.3 }} 
        className="mt-5 bg-gray-800 text-white px-4 py-2 rounded hover:cursor-pointer outline outline-offset-8 hover:bg-gray-700"
        onClick={() => auth.signOut()}
      >
        Logout
      </motion.button>
    </motion.div>
  );
};

export default Dashboard;
