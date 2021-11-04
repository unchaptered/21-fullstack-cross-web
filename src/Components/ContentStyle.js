import styled from "styled-components";

export const contentGrid=styled.div`
    display: grid;
    grid-template: repeat(12, auto) / repeat(12,1fr);
    & > span {
        border: 1px solid black;
        padding-top: 100%;
        min-width: 100px;
        min-height: 0;
    };
    @media screen and (max-width: 1980px){
        gap: 30px;
        padding: 0 25px;
        & > span {
            grid-area: span 2 / span 2;
        }
    }
    @media screen and (max-width: 1485px){
        gap: 25px;
        padding: 0 20px;
        & > span {
            grid-area: span 3 / span 3;
        }
    }
    @media screen and (max-width: 990px){
        gap: 20px;
        padding: 0 15px;
        & > span {
            grid-area: span 4 / span 4;
        }
    }
    @media screen and (max-width: 700px){
        gap: 20px;
        padding: 0 10px;
        & > span {
            grid-area: span 6 / span 6;
        }
    }
`;

export const contentSizer=styled.div`
    max-width:100%;
    @media screen and (min-width: 1486px){
        padding: 0 400px;
    }
    @media screen and (min-width: 991px){
        padding: 0 80px;
    }
    @media screen and (max-width: 990px){
        width: 100%;
    }
    @media screen and (max-width: 700px){
        width: 100%;
    }
`;

export const conntetFlexSizer=styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;

    overflow: hidden;
`;
export const contentFlex=styled.div`
background-color: rgba(150,0,0,0.5);
transition: all 0.2s ease-out;
& > div:nth-child(1){
}
@media screen and (max-width: 1980px){
    width: 500px;
}
@media screen and (max-width: 1485px){
    width: 500px;
}
@media screen and (max-width: 990px){
    width: 500px;
}
@media screen and (max-width: 600px){
    width: 500px;
}
`;