"use client";

import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Like from "../../../../public/assets/like.7b1152ae.png";
export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 2rem 0.8rem;
  gap: 2rem;
  border-top: 1px solid #c5c5c5;
  max-width: 100%;
  width: 100vw;
  @media (max-width: 280px) {
    padding: 1rem 0.4rem;
  }
  @media (min-width: 1025px) {
    padding: 2.5rem 5rem;
  }
`;

export const LikeButton = styled.span`
  position: relative;
  width: 1.1rem;
  height: 1.1rem;
  @media (max-width: 280px) {
    width: 1rem;
    height: 1rem;
  }
`;
export const Title = styled.h2`
  font-size: 16px;
  font-weight: 800;
  font-family: "Fira Sans", sans-serif;
  @media (max-width: 280px) {
    font-size: 12px;
  }
  @media (min-width: 1025px) {
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

export const Dot = styled.span`
  width: 0.2rem;
  height: 0.2rem;
  border-radius: 100%;
  background-color: #989898;
  margin-inline: 0.25rem;
`;

export const PostInfo = styled.div`
  display: flex;
  align-items: center;
  color: #989898;
  font-size: 10px;
`;
export const Description = styled.div`
  font-size: 0.9rem;
  line-height: 1.5rem;
  font-family: "Fira Sans", sans-serif;
  @media (max-width: 280px) {
    font-size: 0.75rem;
    line-height: 1.5rem;
  }

  @media (min-width: 1025px) {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
`;
export const BottomInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 1025px) {
    font-size: 1.3rem;
  }
`;

export const BottomAuthorItem = styled.span`
  font-size: 10px;
  font-weight: 800;
  font-family: "Fira Sans", sans-serif;
  color: ${(props) => (props.color ? props.color : "#4e4e4e")};
  @media (max-width: 280px) {
    font-size: 62.5%;
    font-weight: 800;
    color: #4e4e4e;
    color: ${(props) => (props.color ? props.color : "#4e4e4e")};
  }

  @media (min-width: 1025px) {
    font-size: 0.9rem;
  }
`;
export const BottomInfoItem = styled.span`
  font-size: 10px;
  font-weight: 600;
  color: "#4e4e4e";
  font-family: "Fira Sans", sans-serif;
  @media (max-width: 280px) {
    font-size: 72.5%;
    font-weight: 600;
    color: #4e4e4e;
  }
  @media (min-width: 1025px) {
    font-size: 0.9rem;
  }
`;
const Post = ({
  title,
  description,
  author,
  date,
  readTime,
  views,
  thought,
}) => {
  return (
    <PostContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Title>{title}</Title>
        <LikeButton>
          <Image
            src={Like}
            alt="like"
            fill={true}
            sizes="(max-width: 1400px) 10vw"
          />
        </LikeButton>
      </div>
      <Description>
        {description.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </Description>

      <BottomInfo>
        <div style={{ display: "flex", gap: "0.15rem" }}>
          <BottomAuthorItem color="#3f9eed">{thought}</BottomAuthorItem>
          <BottomAuthorItem>by</BottomAuthorItem>
          <BottomAuthorItem style={{}}>{author}</BottomAuthorItem>
        </div>
        <PostInfo>
          <BottomInfoItem>
            {date.month} {date.day}
          </BottomInfoItem>
          <Dot></Dot>
          <BottomInfoItem>{readTime}min Read</BottomInfoItem>
          <Dot></Dot>
          <BottomInfoItem>{views} Views</BottomInfoItem>
        </PostInfo>
      </BottomInfo>
    </PostContainer>
  );
};

export default Post;
