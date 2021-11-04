import React from "react";
import ProductsPresenter from "./ProductsPresenter";

export default class extends React.Component{
    state={
        error:null,
        errorCode:0,
        loading:false,
    };

    render() {
        const { error, errorCode, loading }=this.state;
        return <ProductsPresenter
            error={error}
            errorCode={errorCode}
            loading={loading}
        />;
    };
};