import React from "react";
import styled from "styled-components";
import Like from "../../../../public/like.png";
import Heart from "../../../../public/heart.png";
import Eye from "../../../../public/eye.png";
import Star from "../../../../public/star.png";
import Image from "next/image";

const EngagementStatsStyle = styled.div`
  font-size: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const EngagementStatsImageContainer = styled.div`
  position: relative;
  width: 0.9rem;
  height: 0.9rem;
`;
const EngagementStatsItem = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
`;
function EngagementStats({ userDetails }) {
  return (
    <EngagementStatsStyle>
      <EngagementStatsItem>
        <EngagementStatsImageContainer>
          <Image
            src={Star}
            alt="stars"
            fill={true}
            sizes="(max-width: 1400px) 10vw"
          />{" "}
        </EngagementStatsImageContainer>
        {userDetails?.engagementStats?.stars}
      </EngagementStatsItem>
      <EngagementStatsItem>
        <EngagementStatsImageContainer>
          <Image
            src={Like}
            alt="like"
            fill={true}
            sizes="(max-width: 1400px) 10vw"
          />{" "}
        </EngagementStatsImageContainer>
        {userDetails?.engagementStats?.likes}
      </EngagementStatsItem>
      <EngagementStatsItem>
        <EngagementStatsImageContainer>
          <Image
            src={Eye}
            alt="watch"
            fill={true}
            sizes="(max-width: 1400px) 10vw"
          />{" "}
        </EngagementStatsImageContainer>
        {userDetails?.engagementStats?.views}
      </EngagementStatsItem>
      <EngagementStatsItem>
        <EngagementStatsImageContainer>
          <Image
            src={Heart}
            alt="heart"
            fill={true}
            sizes="(max-width: 1400px) 10vw"
          />{" "}
        </EngagementStatsImageContainer>
        {userDetails?.engagementStats?.hearts}
      </EngagementStatsItem>
    </EngagementStatsStyle>
  );
}

export default EngagementStats;
