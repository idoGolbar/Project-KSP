import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GiCyborgFace } from "react-icons/gi";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BsShieldLock } from "react-icons/bs";
export const Login = () => {
  const [userName, setUserName] = useState("");
  const [userPassworde, setUserPassworde] = useState("");
  const [erroeName, setErroeName] = useState(false);
  const [erroePassworde, setPassworde] = useState(false);
  const [erroeText, setErroeText] = useState(false);
  return (
    <Body dir="rtl">
      <DivBorder>
        <DivIcone>
          <IconeTop>
            <GiCyborgFace />
          </IconeTop>
        </DivIcone>

        <Content>
          <DivInputName>
            <div id="title">
              <HiOutlineUserCircle />
            </div>
            <InputName
              erroeName={erroeName}
              id="name"
              type="text"
              value={userName}
              onChange={(e) => {
                setErroeText(false);
                setUserName(e.target.value);
                setErroeName(false);
              }}
            ></InputName>
          </DivInputName>
          <DivInputName>
            <div id="title">
              <BsShieldLock />
            </div>
            <InputPassword
              erroePassworde={erroePassworde}
              id="password"
              type="password"
              value={userPassworde}
              onChange={(e) => {
                setErroeText(false);
                setUserPassworde(e.target.value);
                setPassworde(false);
              }}
            ></InputPassword>
          </DivInputName>
        </Content>

        <DivFotterButton>
          <div id="newUserClik">הרשמות מחדש</div>
          <div
            id="buttonClik"
            onClick={() => {
              if (userName === "") {
                setErroeName(true);
                setErroeText(true);
              }
              if (userPassworde === "") {
                setPassworde(true);
                setErroeText(true);
                return;
              }
              if (userName !== "" && userPassworde !== "")
                console.log("נכנסתי");
            }}
          >
            כניסה
          </div>
        </DivFotterButton>

        {erroeText && <TextError>שגיאה</TextError>}
      </DivBorder>
    </Body>
  );
};

const Body = styled.div`
  width: 100%;
  height: 80vh;
  padding-top: 20vh;
  /* background-color: white; */
  background-image: linear-gradient(to right, #4c8fd2, #eb6feb);
`;

const DivBorder = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  width: 23rem;
  margin: 0 auto;
  height: 23rem;
  border-radius: 15px;
  background-color: rgb(204, 204, 204, 0.5);
  box-shadow: 0px 10px 250px 0px #979797;
`;

const IconeTop = styled.div`
  display: flex;
  color: black;
  width: 5.5rem;
  height: 5.5rem;
  top: 12rem;
  right: 9rem;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  z-index: 999;
  background-color: rgb(179, 179, 179, 0.6);
  border-radius: 50%;
`;

const DivIcone = styled.div`
  position: relative;
  bottom: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const DivInputName = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  margin: 0 auto;
  margin-top: 1.5rem;
  font-size: 2rem;
  #title {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 1.5rem;
  }
`;

const InputName = styled.input<{ erroeName: boolean }>`
  border: none;
  background: none;
  outline: none;
  border-bottom: ${(props) =>
    props.erroeName ? "1px solid red" : "1px solid black"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  width: 80%;
`;
const InputPassword = styled.input<{ erroePassworde: boolean }>`
  border: none;
  background: none;
  outline: none;
  border-bottom: ${(props) =>
    props.erroePassworde ? "1px solid red" : "1px solid black"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  width: 80%;
`;

const DivFotterButton = styled.div`
  height: 8rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  #buttonClik {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    font-weight: bold;
    background-color: #0354f7;
    width: 6rem;
    height: 3rem;
    color: white;
  }
  #newUserClik {
    margin-bottom: 1.5rem;
    color: #5e5d5d;
  }
`;
const TextError = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 15rem;
  color: red;
  margin: 0 auto;
`;

const Content = styled.div``;
