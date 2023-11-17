"use client";
import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import Posts from "./components/Posts/Posts";
import Profile from "./components/Profile/Profile";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar></NavBar>
      <Profile></Profile>
      <Posts></Posts>
    </main>
  );
}
