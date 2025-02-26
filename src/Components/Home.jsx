import React, { useEffect, useState } from "react";
import { useUser } from "../App";
import { doc, getDoc } from "firebase/firestore";
import { db, auth } from "../../Database/fb";
import { motion } from "framer-motion";
import Navigation from "./Navigation";

const Home = () => {
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
    >
      <Navigation />
    </motion.div>
  );
};

export default Home;
