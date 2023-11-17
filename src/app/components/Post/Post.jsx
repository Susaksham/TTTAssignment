"use client";

import React from "react";
import styled from "styled-components";
export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-evenly;
  padding: 1rem 1rem;
  gap: 2rem;
`;

export const LikeButton = styled.span``;
export const Title = styled.h2``;

export const Dot = styled.span`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 100%;
  background-color: green;
`;

export const PostInfo = styled.div`
  display: inline;
`;

export const BottomInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Post = ({ title, description, author, date, readTime, views }) => {
  return (
    <PostContainer>
      <div>
        <Title> {title}</Title>
        <LikeButton></LikeButton>
      </div>
      <p>{description}</p>
      <BottomInfo>
        <span>{author}</span>
        <PostInfo>
          <span>{readTime} min</span>
          <Dot></Dot>
          <span>{views} Views</span>
        </PostInfo>
      </BottomInfo>
    </PostContainer>
  );
};

export default Post;
