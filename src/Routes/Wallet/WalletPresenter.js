import PropTypes from "prop-types";
import styled from "styled-components";
import { contentFlex, conntetFlexSizer }from "../../Components/ContentStyle";

let WalletFlex=contentFlex;
let WalletSize=conntetFlexSizer;
const WalletPresenter=({error,errorCode,loading})=>
    <WalletSize>
        <WalletFlex>
            <div>고객정보</div>
            <div>바코드</div>
            <div>
                <p>사이렌 오더</p>
                <p>상품구매</p>
                <p>선물하기</p>
            </div>
            <div>광고</div>
        </WalletFlex>
    </WalletSize>


WalletPresenter.propTypes={
    join:PropTypes.bool,
    error:PropTypes.string,
    loading:PropTypes.bool.isRequired,
};

export default WalletPresenter;