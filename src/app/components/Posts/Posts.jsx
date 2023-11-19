"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Post from "../Post/Post";

export const PostContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-top: 1px solid #c5c5c5;
  margin-top: 1rem;
`;

export const TotalPost = styled.div`
  position: absolute;
  left: 0;
  width: 30vw;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 2px solid #c5c5c5;
  border-right: 2px solid #c5c5c5;
  top: calc(-3rem - 3.8px);
  z-index: 10;
  background-color: #ffffff;
  padding: 1rem 1rem;
  font-size: 1rem;
  font-weight: 600;
  color: #3f9eed;
  @media (max-width: 280px) {
    font-size: 0.83rem;
    top: calc(-3rem - 0.1px);
  }
`;

// export const TotalPost = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
// `;
const Posts = ({ posts }) => {
  return (
    <PostContainer>
      <TotalPost>
        <span>{posts.length} Posts</span>
      </TotalPost>
      {posts ? (
        posts.map((post, idx) => {
          return (
            <Post
              title={post.title}
              description={post.description}
              author={post.author}
              date={post.date}
              readTime={post.readTime}
              views={post.views}
              key={idx}
              thought={post.thought}
            ></Post>
          );
        })
      ) : (
        <p>Posts loading...</p>
      )}
    </PostContainer>
  );
};

export default Posts;
