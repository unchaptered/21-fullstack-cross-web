import React from "react";
import QuestionsPresenter from "./QuestionsPresenter";

export default class extends React.Component{
    state={
        error:null,
        errorCode:0,
        loading:false,
    };
    render() {
        return <QuestionsPresenter />;
    };
};