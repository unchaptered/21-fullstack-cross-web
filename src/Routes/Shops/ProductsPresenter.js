import styled from "styled-components";
import PropTypes from "prop-types";
import { contentGrid, contentSizer }from "../../Components/ContentStyle";

let ShopsGrid=contentGrid;
let ShopSize=contentSizer;

const ShopsPresenter=({ error, errorCode, loading })=>
<ShopSize>
    <ShopsGrid>
        <span>hi</span>
        <span>hi</span>
        <span>hi</span>
        <span>hi</span>
        <span>hi</span>
        <span>hi</span>
        <span>hi</span>
        <span>hi</span>
        <span>hi</span>
        <span>hi</span>
        <span>hi</span>
        <span>hi</span>
        <span>hi</span>
        <span>hi</span>
        <span>hi</span>
    </ShopsGrid>
</ShopSize>;

ShopsPresenter.propTypes={
    join:PropTypes.bool,
    error:PropTypes.string,
    loading:PropTypes.bool.isRequired,
};

export default ShopsPresenter;