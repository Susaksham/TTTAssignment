"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Post from "../Post/Post";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const Posts = () => {
  const [allPost, setAllPost] = useState([]);
  const fetchPost = async () => {
    try {
      const response = await fetch("posts.json");

      const post = await response.json();
      console.log(post);
      setAllPost(post);
      console.log(allPost);
    } catch (err) {
      console.log(err);
    }
  };

  console.log("all Posts are ", allPost);

  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <PostContainer>
      {allPost.map((post, idx) => {
        return (
          <Post
            title={post.title}
            description={post.description}
            author={post.author}
            date={post.date}
            readTime={post.readTime}
            views={post.views}
            key={idx}
          ></Post>
        );
      })}
    </PostContainer>
  );
};

export default Posts;
