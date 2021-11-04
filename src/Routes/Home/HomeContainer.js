import React from "react";
import HomePresenter from "./HomePresenter";

export default class extends React.Component{
    state={
        error:null,
        errorCode:0,
        loading:false,
    };

    render() {
        return <HomePresenter />;
    };
};