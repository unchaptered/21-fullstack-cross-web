import React from "react";
import WalletPresenter from "./WalletPresenter";

export default class extends React.Component{
    state={
        error:null,
        errorCode:0,
        loading:false,
    };
    render() {
        const { error, errorCode, loading }=this.state;
        return <WalletPresenter
            error={error}
            errorCode={errorCode}
            loading={loading}
        />;
    };
};