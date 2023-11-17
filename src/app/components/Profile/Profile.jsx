import React from "react";
import styled from "styled-components";

import Image from "next/image";
export const ProfileWrapper = styled.main``;
export const ProfileContainer = styled.div`
  width: 100%;
  height: 50vh;
  position: relative;
  /* background-color: green; */
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
  top: 35%;
  left: 10%;
  display: flex;
  flex-direction: column;
  align-items: start;

  gap: 1rem;
`;

export const ProfileImageContainer = styled.div`
  height: 15vh;
  aspect-ratio: 1/1;
  position: relative;
  overflow: hidden;
  border-radius: 100%;
  object-fit: contain;
`;

export const ProfileImageNameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
export const ImageNameContainer = styled.div`
  display: flex;
`;
export const FollowStats = styled.div`
  display: flex;
  gap: 0.5rem;
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
  gap: 0.4rem;
`;
const ProfileSocialLinks = styled.a`
  text-decoration: none;
`;

const EngagementStats = styled.div``;
const Profile = () => {
  return (
    <ProfileContainer>
      <ImageContainer>
        <Image
          src={"/backgroundImage.jpg"}
          alt="background image"
          fill={true}
        ></Image>
      </ImageContainer>
      <ProfileInfoContainer>
        <ProfileImageNameWrapper>
          <ProfileImageContainer>
            <Image
              src={"/backgroundImage.jpg"}
              alt="profile image"
              fill={true}
            ></Image>
          </ProfileImageContainer>

          <UserInfo>
            <div>
              <h2>Anuj gosalia</h2>
            </div>
            <FollowStats>
              <div>
                <span>6482</span>
                <span></span>
              </div>
              <div>
                <span>245</span>
                <span></span>
              </div>
            </FollowStats>
          </UserInfo>
        </ProfileImageNameWrapper>

        <AboutUser>
          <p>Co-founder & CEO at Terribly Tiny Tales</p>
          <ProfileSocialLinks
            href="http://www.instagram.com/anujgosalia"
            target="_blank"
            rel="noopener noreferrer"
          >
            http://www.instagram.com/anujgosalia
          </ProfileSocialLinks>
          <EngagementStats></EngagementStats>
        </AboutUser>
      </ProfileInfoContainer>
    </ProfileContainer>
  );
};

export default Profile;
