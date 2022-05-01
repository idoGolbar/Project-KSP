import { memoryUsage } from "process";
import { AiOutlineSearch } from "react-icons/ai";
import styled from "styled-components";

export const SearchNav = () => {
  return (
    <DivSearch>
      <Input type="string"></Input>
      <Icone>
        <AiOutlineSearch />
      </Icone>
    </DivSearch>
  );
};
const DivSearch = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  margin-top: 0.9rem;
`;
const Input = styled.input`
  display: flex;
  font-size: 1.2rem;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  /* border-radius: 15px; */
  height: 2rem;
  width: 80%;
  padding-right: 2.7rem;
  outline: none;
  border: none;
  background: none;
  background: #eeeeee;
`;
const Icone = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  right: 15.5vw;
  @media screen and (max-width: 500px) {
    right: 13.5vw;
    font-size: 1.8rem;
  }
  @media screen and (min-width: 600px) {
    right: 17vw;
    font-size: 1.8rem;
  }
`;
