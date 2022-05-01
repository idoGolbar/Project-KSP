import styled from "styled-components";
import { Hader } from "../Hader";
import { NavBar } from "../NavBar";
import { ProductTab } from "../ProductTab";

export const Exsmpel = () => {
  return (
    <Hader>
      <Diva>
        <ProductTab />
        <ProductTab />
        <ProductTab />
        <ProductTab />
        <ProductTab />
        <ProductTab />
        <ProductTab />
        <ProductTab />
        <ProductTab />
      </Diva>
    </Hader>
  );
};

const Diva = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-flow: wrap;
  /* margin-top: 13rem; */
`;
