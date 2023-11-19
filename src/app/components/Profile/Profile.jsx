import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Diamond from "../../../../public/diamond.png";
import Approve from "../../../../public/approved.png";
import EngagementStats from "../EngagementStats/EngagementStats";
export const ProfileWrapper = styled.main``;
export const ProfileContainer = styled.div`
  width: 100%;
  height: 50vh;
  position: relative;
  margin-bottom: 1.5rem;
`;
export const ImageContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  position: relative;
  height: 40%;
`;
export const ProfileInfoContainer = styled.div`
  height: 60%;
  width: fit-content;

  position: absolute;
  z-index: 100;
  top: 33%;
  left: 10vw;
  display: flex;
  flex-direction: column;
  align-items: start;

  gap: 2rem;

  @media (max-width: 280px) {
    left: 4vw;
    top: 35%;
  }
`;

export const ProfileImageContainer = styled.div`
  height: 15vh;
  aspect-ratio: 1/1;
  position: relative;
  overflow: hidden;
  border-radius: 100%;
  object-fit: contain;
  border: 1.5px solid #111111;
  @media (max-width: 280px) {
    height: 10vh;
  }
`;

export const ProfileImageNameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
export const ImageNameContainer = styled.div`
  display: flex;
`;

export const MembershipIconsContainer = styled.div`
  position: relative;
  width: 15px;
  height: 15px;
  @media (max-width: 280px) {
    width: 12px;
    height: 12px;
  }
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
  padding: 1px 6px;
  font-weight: 500;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
  top: 1rem;
`;

export const AboutUser = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;
const ProfileSocialLinks = styled.a`
  text-decoration: none;
  font-size: 12px;
  color: #3f9eed;
  cursor: pointer;
`;

const Profile = ({ userDetails }) => {
  return (
    <ProfileContainer>
      <ImageContainer>
        <Image
          src={
            Object.keys(userDetails).length > 0
              ? userDetails?.backgroundImage?.src
              : "/NO_IMAGE.jpg"
          }
          alt={
            Object.keys(userDetails).length > 0
              ? userDetails?.backgroundImage?.alt
              : "Image not Available"
          }
          fill={true}
          sizes="(max-width: 1400px) 100vw"
          priority={true}
        ></Image>
      </ImageContainer>
      <ProfileInfoContainer>
        <ProfileImageNameWrapper>
          <ProfileImageContainer>
            <Image
              src={
                Object.keys(userDetails).length > 0
                  ? userDetails?.profileImage?.src
                  : "/no_profile_image.png"
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
            <div style={{ display: "flex", alignItems: "center", gap: "2vw" }}>
              <span style={{ fontSize: "1rem", fontWeight: "600" }}>
                {userDetails?.name}
              </span>
              <span
                style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}
              >
                <MembershipIconsContainer>
                  <Image src={Diamond} alt="diamond-member" fill={true} />
                </MembershipIconsContainer>
                <MembershipIconsContainer>
                  <Image src={Approve} alt="approved-member" fill={true} />
                </MembershipIconsContainer>
              </span>
            </div>
            <FollowStats>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  color: "#989898",
                }}
              >
                <FollowStatsItem>
                  {userDetails?.followStats?.followers}
                </FollowStatsItem>
                <span style={{ fontSize: "10px" }}>Followers</span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  color: "#989898",
                }}
              >
                <FollowStatsItem>
                  {userDetails?.followStats?.following}
                </FollowStatsItem>
                <span style={{ fontSize: "10px" }}>Following</span>
              </div>
            </FollowStats>
          </UserInfo>
        </ProfileImageNameWrapper>

        <AboutUser>
          <p style={{ fontSize: "14px" }}>{userDetails?.bio}</p>
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
