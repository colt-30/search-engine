<<<<<<< HEAD
import "./Header.css";

const Header = () => {
  return (
    <div className="g-sign">
      <span onClick={() => window.scroll(0, 0)} className="header">
        🎬 Entertainment Hub 🎥
      </span>
    </div>
  );
};
export default Header;
=======
import "./Header.css";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { auth, signInWithGoogle, db, logout } from "./Login/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {collection, getDocs, where, query} from "firebase/firestore";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();
  useEffect(() => {
    if (loading) {
      return;
    } 
    if (user) {
      
    }
  });
  const [name, setName] = useState("");
  const navigate = useHistory();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) {
      return (
        <><span onClick={logout} className="header">
        🎬 Entertainment Hub 🎥 <span>Logged in as {name} and {user?.email} and click here to logout</span>
      </span>
      </>
      );
    };
    if (!user) return;
    fetchUserName();
  }, [user, loading]);

  return (
    <><span onClick={signInWithGoogle} className="header">
        🎬 Entertainment Hub 🎥 <span>...Click here to login...</span>
      </span>
      </>
  );
};
export default Header;
>>>>>>> 33dfb18353a0f0444eb0cadb538e07d211578da5
