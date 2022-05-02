import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Iphone13 from "../../Png/iphone-13.jpeg";
import ApleLogo from "../../Png/apleLogo.jpeg";

import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { VscSettingsGear } from "react-icons/vsc";

export const ProductTab = () => {
  const [favorite, setFavorite] = useState(false);
  return (
    <Card>
      <Body>
        <Hader>
          <HaderLeft>
            {/* <ApleLogo /> */}
            {/* <MdDeleteOutline /> */}
          </HaderLeft>
          <HaderRight>
            <div id="name">iphone 13</div>
            <div id="mkt">
              <div>MAKT</div>
              <div>12344569</div>
            </div>
          </HaderRight>
        </Hader>
        <Contents>
          <ContentsLeft>
            l;aksd;la ksd;lkasl;d kacxxcds sddsd sdsd sfs fsf sdsd sdsd sdsd
            sdsdsadssd sddadsd sadsdsdsd sdadad aaaa
          </ContentsLeft>
          <ContentsRight src={Iphone13}></ContentsRight>
        </Contents>
        <DivMoney>
          <DivMoneyLeft>{/* <VscSettingsGear /> */}</DivMoneyLeft>
          <DivMoneyRight>
            <div id="OriginalMoney">40.00$</div>
            <div>60.00$</div>
          </DivMoneyRight>
        </DivMoney>
        <Footer>
          <FooterIcon onClick={() => setFavorite(!favorite)}>
            {favorite ? <AiFillHeart /> : <AiOutlineHeart />}
          </FooterIcon>
          <FooterBuy>buy now</FooterBuy>
          <FooterAdd>Add to basket</FooterAdd>
        </Footer>
      </Body>
    </Card>
  );
};

const FooterIcon = styled.div`
  display: flex;
  width: 16%;
  height: 60%;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;
const FooterBuy = styled.div`
  display: flex;
  width: 40%;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  background-color: #325ec4;
  color: white;
  height: 60%;
  margin-right: 2px;
`;
const FooterAdd = styled.div`
  display: flex;
  width: 40%;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  background-color: #51b031;
  color: white;
  height: 60%;
  margin-right: 14px;
  /* border-bottom-right-radius: 9px; */
`;

const Card = styled.div`
  width: 25%;
  height: 100%;
  box-sizing: border-box;
  @media screen and (max-width: 700px) {
    width: 40%;
  }
  @media screen and (max-width: 1200px) {
    width: 90%;
  }
`;

const Footer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  height: 4rem;
  /* margin-bottom: 1rem; */
`;

const DivMoney = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: 4.5rem;
  padding-top: 0.2rem;
`;

const DivMoneyRight = styled.div`
  width: 30%;

  #OriginalMoney {
    text-align: right;
    font-size: 1.2rem;
    padding-right: 0.5rem;
  }
`;
const DivMoneyLeft = styled.div`
  width: 70%;
  padding-left: 0.8rem;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  font-size: 1.2rem;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 10px;
  /* box-shadow: 0px 10px 20px 20px #d9e1ee; */
  width: 95%;
  margin: 0 auto;
  height: 35.4vh;
  margin-bottom: 1rem;
  @media screen and (max-height: 750px) {
    height: 45.3vh;
  }
  @media screen and (min-height: 1000px) {
    height: 32vh;
  }
  /* @media screen and (min-height: 900px) {
    height: 28vh;
  } */
`;
const Hader = styled.div`
  display: flex;
  flex-direction: row;
  width: 98%;
  margin: 0 auto;
  height: 4rem;
`;

const HaderRight = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 0.5rem;
  #name {
    font-size: 1.5rem;
    width: 70%;
    text-align: center;
    font-weight: bold;
  }
  #mkt {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.6rem;
    width: 30%;
  }
`;

const HaderLeft = styled.div`
  width: 20%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  font-size: 1.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.5rem;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: row;
  height: 6rem;
`;

const ContentsRight = styled.img`
  width: 50%;
  height: 100%;
`;
const ContentsLeft = styled.div`
  width: 50%;
  font-size: 1.1rem;
  height: 90%;
  padding-left: 0.5rem;
  /* white-space: nowrap; */
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 0.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 4; /* number of lines to show */
  line-clamp: 4;
  -webkit-box-orient: vertical;
`;

const RightSideTab = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 50%;
  height: 13vh;
  #img {
    height: 100%;
    width: 100%;
  }
  #bottomRightSide {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    height: 4rem;
  }
  #favorite {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
  }
  #discountPrice {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const LeftSideTab = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 60%;
  height: 13vh;

  #bottomLeftSide {
    display: flex;
    align-items: center;
    /* justify-content: center; */
    color: black;
    font-weight: bold;
    height: 2.45rem;
  }
`;
const Content = styled.div`
  /* font-size: 1rem; */
  height: 100%;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const DivCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 95%;
  height: 14vh;
  margin: 0 auto;
  margin-top: 1rem;
`;
