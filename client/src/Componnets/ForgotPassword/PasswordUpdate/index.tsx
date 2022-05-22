import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

interface IProps {
    email: string;
}

export const PasswordUpdate = ({ email }: IProps) => {
    const [password, setPassworde] = useState<string>('');
    const [borderError, setBorderError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')
    return (
        <Body>
            <Contend>
                <DIvMiil>
                    <div>הנה אכנס את הסיסמא החדשה</div>
                    <Input borderError={borderError} type="text" value={password} onChange={(e) => { setErrorMessage(''); setBorderError(false); setPassworde(e.target.value) }}></Input>
                </DIvMiil>
            </Contend>
            <FooterButton>
                <Button onClick={() => {
                    if (password.length) {
                        axios.post('http://localhost:3001/api/user/UpdateUser', { password: password, email })
                            .then(response => {
                                setErrorMessage(response.data.message)
                                if (response.data.message == 'success') {

                                    console.log('hxxxx');

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

