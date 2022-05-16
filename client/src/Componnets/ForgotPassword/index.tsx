import styled from "styled-components";
import { FiUserPlus } from "react-icons/fi";
import { useState } from "react";
export const ForgotPassword = () => {
    const [changePassword, setChangePassword] = useState<boolean>(false);
    const [borderError, setBorderError] = useState(false);
    const [email, setEmail] = useState<string>('');
    return (
        <Body dir="rtl">
            <DivBorder>
                <Contend>
                    <DIvMiil>
                        <div>הנא הכנס את המייל לבדיקת משתמש</div>
                        <Input borderError={borderError} type="text" value={email} onChange={(e) => setEmail(e.target.value)}></Input>
                    </DIvMiil>
                </Contend>
                <FooterButton>
                    <Button type="button">שלח</Button>
                    <div>dsds</div>
                </FooterButton>
            </DivBorder>
        </Body>
    );
};


const Button = styled.button`
display: flex;
align-items: center;
justify-content:center;
text-align:center;
    width: 4rem;
    height: 2rem;
    border-radius: 10px;
    border: none;
    font-size: 1rem;
`

const DIvMiil = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-around;
`
const Input = styled.input<{ borderError: boolean }>`
    height: 2rem;
    width:95%;
    border:${(props) => props.borderError ? '1px slod red' : '1px solid black'};
    outline: none;
`

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
  height: 100%;
  margin: 0 auto;
`;


const InputName = styled.input<{ errorName: boolean }>`
  width: 9rem;
  height: 2.5rem;
  font-size: 1.2rem;
  outline: none;
  border: none;
  border-radius: 15px;
  padding-right: 0.5rem;
  border:${(props) => props.errorName ? '1px solid red' : ''};
`;
const InputAddress = styled.input<{ errorAddress: boolean }>`
  width: 9rem;
  height: 2.5rem;
  font-size: 1.2rem;
  outline: none;
  border: none;
  border-radius: 15px;
  padding-right: 0.5rem;
  border:${(props) => props.errorAddress ? ' 1px solid red' : ''};
`;
const InputPhoneNumber = styled.input<{ errorPhone: boolean }>`
  width: 9rem;
  height: 2.5rem;
  font-size: 1.2rem;
  outline: none;
  border: none;
  border-radius: 15px;
  padding-right: 0.5rem;
  border:${(props) => props.errorPhone ? ' 1px solid red' : ''};

`;

const InputEmail = styled.input<{ errorEmail: boolean }>`

    width: 97%;
    margin: 0 auto;
    margin-top:0.5rem;
  height: 2.5rem;
  font-size:  1.2rem;
  outline: none;
  border: none;
  border-radius: 15px;
  border:${(props) => props.errorEmail ? ' 1px solid red' : ''};
  
`;
const InputPassword = styled.input<{ errorPassword: boolean }>`
  width: 9rem;
  height: 2.5rem;
  font-size: 1.2rem;
  outline: none;
  border: none;
  border-radius: 15px;
  padding-right: 0.5rem;
  border:${(props) => props.errorPassword ? ' 1px solid red' : ''};
`;
const DivInpute = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
`;
const FooterButton = styled.div`
  height: 30%;
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
