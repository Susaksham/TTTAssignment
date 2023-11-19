"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import Posts from "./components/Posts/Posts";
import Profile from "./components/Profile/Profile";

export default function Home() {
  const [userDetails, setUserDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const fetchUserDetails = async () => {
    try {
      setLoading(true);
      const response = await fetch("user.json");

      const user = await response.json();

      setUserDetails(user);
      setLoading(false);
    } catch (err) {
      console.log(err);
      throw new Error("Something went wrong");
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);
  return (
    <main className={styles.main}>
      <NavBar></NavBar>
      <Profile userDetails={userDetails}></Profile>
      {userDetails?.posts && <Posts posts={userDetails?.posts}></Posts>}
    </main>
  );
}
