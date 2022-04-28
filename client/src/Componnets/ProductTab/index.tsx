import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import Iphone13 from '../../Png/iphone13.png'
import { useState } from "react";

export const ProductTab = () => {
    const [favorite, setFavorite] = useState(false);
    return (
        <Body>
            <div id='title'>iphone 13</div>
            <DivCard>
                <LeftSideTab>
                    <Content > kjkjfd;'dklfl fsdj jhfjdh hdfghghjg...</Content>
                    <div id='bottomLeftSide'>20000$</div>
                </LeftSideTab>
                <RightSideTab>
                    <img id='img' src={Iphone13}></img>
                    <div id='bottomRightSide'>
                        <div id='discountPrice'>100$</div>
                        <div id='favorite' onClick={(props) => setFavorite(!favorite)}>{favorite ? <AiFillHeart /> : <AiOutlineHeart />}</div>
                    </div>
                </RightSideTab>
            </DivCard>
        </Body>
    )
}


const Body = styled.div`
display: flex;
flex-direction:column;
border: 1px solid black;
border-radius:10px;
/* box-shadow: 0px 10px 20px 20px #d9e1ee; */
width: 48vw;
height: 18vh;
#title{
    display: flex;
    padding-top: 0.5vh;
    height:2vh ;
    align-items: center;
    justify-content: center;
    font-size:1.4rem;
    font-weight:bold;
}
`

const RightSideTab = styled.div`
display: flex;
flex-direction: column;
justify-content:space-around;
width: 50%;
height:  13vh;
#img{
    height: 100%;
    width: 100%;
}
#bottomRightSide{
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    font-size:1rem;
    height: 4rem;
}
#favorite{
    display: flex;
    align-items:center;
    justify-content: center;
    font-size:1.5rem
}
#discountPrice{
    display: flex;
    justify-content: center;
    align-items: center;
}
`;

const LeftSideTab = styled.div`
display: flex;
justify-content:space-around;
flex-direction: column;
width: 60%;
height:  13vh;

#bottomLeftSide{
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
    
`

const DivCard = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
    width: 95%;
    height: 14vh;
    margin: 0 auto;
    margin-top: 1rem;
`