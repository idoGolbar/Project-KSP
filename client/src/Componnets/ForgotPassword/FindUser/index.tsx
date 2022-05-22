import axios from "axios";
import { useState } from "react";
import styled from "styled-components"

interface IProps {
    setChangePassword: React.Dispatch<boolean>;
    email: string;
    setEmail: React.Dispatch<string>
}

export const FindUser = ({ setChangePassword, email, setEmail }: IProps) => {
    const [borderError, setBorderError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')

    return (
        <Body>
            <Contend>
                <DIvMiil>
                    <div>הנא הכנס את המייל לבדיקת משתמש</div>
                    <Input borderError={borderError} type="text" value={email} onChange={(e) => { setErrorMessage(''); setBorderError(false); setEmail(e.target.value) }}></Input>
                </DIvMiil>
            </Contend>
            <FooterButton>
                <Button onClick={() => {
                    if (email.length) {
                        axios.post('http://localhost:3001/api/user/FindingUser', { email })
                            .then(response => {
                                setErrorMessage(response.data.message)
                                if (response.data.message == 'success') {
                                    setChangePassword(true)

                                }
                            })
                    }
                    else {
                        setBorderError(true)
                    }
                }} type="button">שלח</Button>
                {errorMessage && <div>{errorMessage}</div>}
            </FooterButton>
        </Body>
    )
}

const Body = styled.div`
height: 75%;
`

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
    border-radius: 10px;
    padding:0.5rem 0.5rem 0.5rem;
    font-size:1rem;
    border:${(props) => props.borderError ? '1px solid red' : '1px solid black'};
    outline: none;
`

const Contend = styled.div`
  width: 95%;
  height: 80%;
  margin: 0 auto;
`;



const FooterButton = styled.div`
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div{
      height: 2rem;
      display: flex;
      align-items: center;
      justify-content:center;
  }
`;

