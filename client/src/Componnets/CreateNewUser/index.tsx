import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { FiUserPlus } from "react-icons/fi";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BsShieldLock } from "react-icons/bs";
import axios from "axios";

export const CreateNewUser = () => {
  const [errorText, setErrorText] = useState(false);
  const [objForm, setObjForm] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    mile: "",
    password: "",
  });

  const registerUser = () => {
    const { fullName, address, phoneNumber, mile, password } = objForm;

    axios.post("http://localhost:3001/api/user/CreateNewUser", {
      username: fullName, password: password,
      address: address, phone: phoneNumber, email: mile
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    })
  }

  return (
    <Body dir="rtl">
      <DivBorder>
        <DivIcone>
          <IconeTop>
            <FiUserPlus />
          </IconeTop>
        </DivIcone>
        <Contend>
          <DivInpute>
            <InputText
              type="text"
              placeholder="שם מלא"
              value={objForm.fullName}
              onChange={(e) => {
                setObjForm({ ...objForm, fullName: e.target.value });
              }}
            ></InputText>
            <InputText
              type="text"
              placeholder="כתובת"
              value={objForm.address}
              onChange={(e) => {
                setObjForm({ ...objForm, address: e.target.value });
              }}
            ></InputText>
          </DivInpute>

          <DivInpute>
            <InputText
              type="text"
              placeholder="מספר טלפון"
              value={objForm.phoneNumber}
              onChange={(e) => {
                setObjForm({ ...objForm, phoneNumber: e.target.value });
              }}
            ></InputText>
            <InputText
              type="text"
              placeholder="מייל"
              value={objForm.mile}
              onChange={(e) => {
                setObjForm({ ...objForm, mile: e.target.value });
              }}
            ></InputText>
          </DivInpute>

          <DivInpute>
            <InputText
              type="text"
              placeholder="סיסמא"
              value={objForm.password}
              onChange={(e) => {
                setObjForm({ ...objForm, password: e.target.value });
              }}
            ></InputText>
            <InputText
              type="text"
              placeholder="אולי עוד משהו"
              value={objForm.fullName}
              onChange={(e) => {
                setObjForm({ ...objForm, fullName: e.target.value });
              }}
            ></InputText>
          </DivInpute>
        </Contend>
        <FooterButton>
          <ButtonClick onClick={registerUser}>הרשם</ButtonClick>
          {errorText && <ErrorText>שגיאה</ErrorText>}
        </FooterButton>
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
  height: 24rem;
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
  font-size: 3rem;
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

const Contend = styled.div`
  width: 95%;
  height: 12rem;
  margin: 0 auto;
`;

const InputText = styled.input`
  width: 9rem;
  height: 2.5rem;
  font-size: 1.2rem;
  outline: none;
  border: none;
  border-radius: 15px;
  padding-right: 0.5rem;
`;

const DivInpute = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
`;
const FooterButton = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const ButtonClick = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  font-weight: bold;
  background-color: #0354f7;
  width: 6rem;
  height: 3rem;
  color: white;
`;

const ErrorText = styled.div`
  color: red;
`;
