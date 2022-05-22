import styled from "styled-components";
import { FiUserPlus } from "react-icons/fi";
import { useState } from "react";
import { FindUser } from "./FindUser";
import { PasswordUpdate } from "./PasswordUpdate";
export const ForgotPassword = () => {
  const [changePassword, setChangePassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');

  return (
    <Body dir="rtl">
      <DivBorder>
        {!changePassword ? (<FindUser setChangePassword={setChangePassword} setEmail={setEmail} email={email} />) :
          (<PasswordUpdate email={email} />)}
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
  height:100% ;
  margin: 0 auto;
  height: 24rem;
  border-radius: 15px;
  background-color: rgb(204, 204, 204, 0.5);
  box-shadow: 0px 10px 250px 0px #979797;
`;

