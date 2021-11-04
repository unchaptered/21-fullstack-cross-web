import React from "react";
import ProfilePresenter from "./ProfilePresenter";

export default class extends React.Component{
    state={
        error:null,
        errorCode:0,
        loading:false,
    };
    render() {
        return <ProfilePresenter />;
    };
};