import React from "react";
import styled from "styled-components";
import me from "../images/me.png";

const HomeDiv = styled.div`
  max-width: 1200px;
  width: 100vw;
  height: calc(100vh - 51px);
  margin: auto;
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const ColDiv = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const CircleDiv = styled.div`
  width: 250px;
  height: 300px;
  border-radius: 15%;
  border: 1px solid;
  background-image: url(${me});
  background-repeat: no-repeat;
  background-size: contain, cover;
`;

const TextDiv = styled.div`
  padding: 20px;
  color: white;
  font-size: 40px;
`;

function Home() {
  return (
    <HomeDiv>
      <ColDiv>
        <CircleDiv></CircleDiv>
        <div>
          <span>Icon 1</span>
          <span>Icon 2</span>
          <span>Icon 3</span>
          <span>Icon 4</span>
        </div>
      </ColDiv>
      <ColDiv>
        <TextDiv>
          Hey, my name is Renan, I'm a Full Stack Developer since 2017.
        </TextDiv>
        <TextDiv>Welcome to my portfolio.</TextDiv>
      </ColDiv>
    </HomeDiv>
  );
}

export default Home;
