import React from "react";
import styled from "styled-components";
import Like from "../../../../public/assets/like.7b1152ae.png";
import Heart from "../../../../public/assets/heart.cecd090a.png";
import Eye from "../../../../public/assets/views.ac8ad84e.png";
import Star from "../../../../public/assets/favourites.85074362.png";
import Image from "next/image";

const EngagementStatsStyle = styled.div`
  font-size: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  margin-top: 0.5rem;
  @media (min-width: 1025px) {
    gap: 2rem;
  }
`;

const EngagementStatsImageContainer = styled.div`
  position: relative;
  width: 1rem;
  height: 1rem;
  @media (max-width: 280px) {
    width: 1rem;
    height: 1rem;
  }
  @media (min-width: 1025px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
const EngagementStatsItem = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  font-size: 0.9rem;
  @media (max-width: 280px) {
    font-size: 1rem;
  }
  @media (min-width: 1025px) {
    font-size: 1.5rem;
  }
`;

const EngagementStatsItemText = styled.span`
  @media (max-width: 280px) {
    font-size: 0.75rem;
  }
  @media (min-width: 1025px) {
    font-size: 1.5rem;
  }
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
        <EngagementStatsItemText>
          {userDetails?.engagementStats?.likes}
        </EngagementStatsItemText>
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
        <EngagementStatsItemText>
          {" "}
          {userDetails?.engagementStats?.views}
        </EngagementStatsItemText>
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
        <EngagementStatsItemText>
          {userDetails?.engagementStats?.hearts}
        </EngagementStatsItemText>
      </EngagementStatsItem>
    </EngagementStatsStyle>
  );
}

export default EngagementStats;
