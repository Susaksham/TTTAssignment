"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Post from "../Post/Post";

export const PostsWrapper = styled.div`
  width: 100%;
`;
export const PostsContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
`;

export const TotalPost = styled.div`
  position: relative;
  top: 2px;
  left: 0;
  width: 30vw;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #c5c5c5;
  border-right: 1px solid #c5c5c5;

  z-index: 10;
  background-color: #ffffff;
  padding: 1rem 1rem;
  font-size: 1rem;
  font-weight: 600;
  color: #3f9eed;
  border-top-right-radius: 5px;
  @media (max-width: 280px) {
    font-size: 0.83rem;
    top: 2px;
  }
  @media (min-width: 1025px) {
    font-size: 1.3rem;
  }
`;
const Posts = ({ posts }) => {
  return (
    <PostsWrapper>
      <TotalPost>
        <span>{posts.length} Posts</span>
      </TotalPost>
      <PostsContainer>
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
      </PostsContainer>
    </PostsWrapper>
  );
};

export default Posts;
