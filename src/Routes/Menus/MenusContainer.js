import React from "react";
import MenusPresenter from "./MenusPresenter";

export default class extends React.Component{
    state={
        error:null,
        errorCode:0,
        loading:false,
    };
    render() {
        return <MenusPresenter />;
    };
};