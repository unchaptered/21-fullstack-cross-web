import React from "react";
import { Link, withRouter } from "react-router-dom"
import styled from "styled-components";

import { NavPC, BtnDivPC} from "./NavPC";
import { NavMobile, BtnDivMobile} from "./NavMobile";

const isMobile=/iPhone|iPad|iPod|Android/i.test(window.navigator.userAgent);
let Nav=styled.nav``;
Nav=(isMobile) ?
    NavMobile :
    NavPC ;
const ALink=styled(Link)`
    color:black;
    text-decoration: none;
    margin: 5px 10px;
    font-size: 14px;
    font-weight: ${props=>props.current ? 600 : 100};
`;
const LLink=styled(Link)`
    font-size: 24px;
`;
let BtnDiv=styled.span``;
BtnDiv=(isMobile) ?
    BtnDivMobile :
    BtnDivPC ;

function folded(){
    console.log("hi");
};
export default withRouter (({ location: { pathname } })=>(
    <Nav>
        <div>
            <ALink current={pathname==="/profile" ? "/profile" : null} to="/profile">마이페이지</ALink>
            <ALink current={pathname==="/wallet" ? "/wallet" : null} to="/wallet">마이월렛</ALink>
            <ALink current={pathname==="/shops" ? "/shops" : null} to="/shops">상품</ALink>
            <ALink current={pathname==="/account" ? "/account" : null} to="/account">로그인</ALink>
        </div>
        <div>
            <LLink current={pathname==="/" ? "/" : null} to="/">WEB</LLink>
        </div>
        <div >
            <ALink current={pathname==="/menus" ? "/menus" : null} to="/menus">메뉴소개</ALink>
            <ALink current={pathname==="/maps" ? "/maps" : null} to="/maps">매장찾기</ALink>
            <ALink current={pathname==="/questions" ? "/questions" : null} to="/questions">고객센터</ALink>
        </div>
        <BtnDiv>
            <button className="menu">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
            </button>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
            </button>
        </BtnDiv>
    </Nav>)
);