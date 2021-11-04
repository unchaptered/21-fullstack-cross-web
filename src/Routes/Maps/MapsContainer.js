import React from "react";
import MapsPresenter from "./MapsPresenter";

export default class extends React.Component{
    state={
        error:null,
        errorCode:0,
        loading:false,
    };
    render() {
        return <MapsPresenter />;
    };
};