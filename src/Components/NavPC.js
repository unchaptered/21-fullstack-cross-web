import React from "react";
import styled from "styled-components";

export const NavPC=styled.nav`
    position: fixed;
    top:0;

    width: 100%;
    height: 50px;

    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 1980px){
        & > div {
            width: auto;
            min-width: 100px;

            display: flex;
            align-items: center;
        }
        & > div:nth-child(2) {
            justify-content: center;
        }
        & > div:nth-child(3) {
            margin-right: 50px;
            justify-content: flex-end;
        }
    }
    @media screen and (max-width: 1000px){
        background-color: white;
        & > div:nth-child(2) {
            margin-right: 100px;
            justify-content: flex-end;
        }
        & > div:nth-child(3){
            position: fixed;
            top:0;
            right: -150px;
            width: 100px;
            height:100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            background-color: red;
        }
    }
`;

export const BtnDivPC=styled.span`
    position: fixed;
    top: 0;
    right: 0;
    height: 50px;

    @media screen and (max-width: 1980px){
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        & > button:nth-child(1){
            display: none;
        }
    }
    @media screen and (max-width: 1000px){
        justify-content: flex-end;
        width: 100px;
        & > button {
            margin-right: 20px;
        }
        & > button:nth-child(1){
            display:initial;
        }
    }
`;