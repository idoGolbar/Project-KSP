import styled from "styled-components";
import { NavBar } from "../NavBar";

interface Iprops {
  children: React.ReactNode;
}

export const Hader = ({ children }: Iprops) => {
  return (
    <div>
      <NavBar />
      <Children>{children}</Children>
    </div>
  );
};

const Children = styled.div`
  margin-top: 13rem;
`;
