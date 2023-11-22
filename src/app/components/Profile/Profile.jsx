import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Diamond from "../../../../public/assets/diamond.d5647e2f.png";
import Approve from "../../../../public/assets/check.8bd88e93.png";
import EngagementStats from "../EngagementStats/EngagementStats";
export const ProfileWrapper = styled.main``;
export const ProfileContainer = styled.div`
  width: 100%;
  height: 48vh;
  position: relative;
  margin-bottom: 0.4rem;
  @media (min-width: 1025px) {
    height: 80vh;
  }
  @media (max-width: 400px) {
    margin-bottom: 2rem;
  }
`;
export const ImageContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  position: relative;
  height: 50%;

  @media (min-width: 1025px) {
    height: 60%;
  }
`;
export const ProfileInfoContainer = styled.div`
  max-height: 60%;
  width: fit-content;

  position: absolute;
  z-index: 100;
  top: 43%;
  left: 10vw;
  display: flex;
  flex-direction: column;
  align-items: start;

  gap: 2rem;

  @media (max-width: 280px) {
    left: 4vw;
    top: 46%;
  }
  @media (min-width: 1025px) {
    left: 10vw;
    top: 55%;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    min-width: 70%;
    justify-content: space-between;
  }
`;

export const ProfileImageContainer = styled.div`
  height: 14vh;
  aspect-ratio: 1/1;
  position: relative;
  overflow: hidden;
  border-radius: 100%;
  object-fit: contain;
  border: 1.5px solid #111111;
  @media (max-width: 280px) {
    height: 10vh;
  }
  @media (min-width: 1025px) {
    height: 12vw;
  }
`;

export const ProfileImageNameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (min-width: 1025px) {
    gap: 2rem;
  }
`;
export const ImageNameContainer = styled.div`
  display: flex;
`;

export const MembershipIconsContainer = styled.div`
  position: relative;
  width: 0.7rem;
  height: 0.7rem;
  @media (max-width: 280px) {
    width: 0.7rem;
    height: 0.7rem;
  }
  @media (min-width: 1025px) {
    width: 1.3rem;
    height: 1.3rem;
  }
`;

export const FollowStatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: "#989898";
  gap: 0.2rem;
  align-items: center;
`;
export const FollowStats = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const FollowStatsItem = styled.span`
  border: 1.5px solid #989898;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.5rem;
  font-weight: 600;
  padding: 0.1rem;
  color: #989898;

  @media (min-width: 1025px) {
    font-size: 1.5rem;
    padding: 0.1rem 2.5rem;
  }
`;

export const FollowerStatsText = styled.span`
  font-size: 0.625rem;
  color: #989898;
  @media (min-width: 1025px) {
    font-size: 1rem;
  }
`;
export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
  top: 1rem;

  @media (min-width: 1025px) {
    font-size: 1.5rem;
  }
`;

export const UserName = styled.span`
  font-size: 1rem;
  font-weight: 600;
  font-family: "Fira Sans", sans-serif;
  @media (min-width: 1025px) {
    font-size: 1.5rem;
  }
`;
export const AboutUser = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  position: relative;
  @media (min-width: 1025px) {
    font-size: 1.5rem;
    top: 1rem;
  }
`;
const ProfileSocialLinks = styled.a`
  text-decoration: none;
  font-size: 0.75rem;
  color: #3f9eed;
  cursor: pointer;
  @media (min-width: 1025px) {
    font-size: 1.5rem;
  }
`;
export const Bio = styled.p`
  font-size: 0.9rem;
  font-family: "Fira Sans", sans-serif;

  @media (max-width: 280px) {
    font-size: 0.8rem;
  }
  @media (min-width: 1025px) {
    font-size: 1.5rem;
  }
`;
const Profile = ({ userDetails }) => {
  return (
    <ProfileContainer>
      <ImageContainer>
        <Image
          src={
            Object.keys(userDetails).length > 0
              ? userDetails?.backgroundImage?.src
              : "/assets/NO_IMAGE.jpg"
          }
          alt={
            Object.keys(userDetails).length > 0
              ? userDetails?.backgroundImage?.alt
              : "Image not Available"
          }
          style={{ objectFit: "cover", objectPosition: "center" }}
          fill={true}
          sizes="(max-width: 1400px) 100vw"
        ></Image>
      </ImageContainer>
      <ProfileInfoContainer>
        <ProfileImageNameWrapper>
          <ProfileImageContainer>
            <Image
              src={
                Object.keys(userDetails).length > 0
                  ? userDetails?.profileImage?.src
                  : "/assets/no_profile_image.png"
              }
              alt={
                Object.keys(userDetails).length > 0
                  ? userDetails?.profileImage?.alt
                  : "No image available"
              }
              fill={true}
              sizes="(max-width: 1400px) 33vw"
            ></Image>
          </ProfileImageContainer>

          <UserInfo>
            <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
              <UserName>{userDetails?.name}</UserName>
              <span
                style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}
              >
                <MembershipIconsContainer>
                  <Image
                    src={Diamond}
                    alt="diamond-member"
                    fill={true}
                    sizes="(max-width: 1400px) 10vw"
                  />
                </MembershipIconsContainer>
                <MembershipIconsContainer>
                  <Image
                    src={Approve}
                    alt="approved-member"
                    fill={true}
                    sizes="(max-width: 1400px) 10vw"
                  />
                </MembershipIconsContainer>
              </span>
            </div>
            <FollowStats>
              <FollowStatsContainer>
                <FollowStatsItem>
                  {userDetails?.followStats?.followers}
                </FollowStatsItem>
                <FollowerStatsText>Followers</FollowerStatsText>
              </FollowStatsContainer>
              <FollowStatsContainer>
                <FollowStatsItem>
                  {userDetails?.followStats?.following}
                </FollowStatsItem>
                <FollowerStatsText>Following</FollowerStatsText>
              </FollowStatsContainer>
            </FollowStats>
          </UserInfo>
        </ProfileImageNameWrapper>

        <AboutUser>
          <Bio>{userDetails?.bio}</Bio>
          <ProfileSocialLinks
            href={userDetails?.socialLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {userDetails?.socialLink}
          </ProfileSocialLinks>
          <EngagementStats userDetails={userDetails}></EngagementStats>
        </AboutUser>
      </ProfileInfoContainer>
    </ProfileContainer>
  );
};

export default Profile;
