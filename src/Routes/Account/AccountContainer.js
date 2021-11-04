import React from "react";
import AccountPresenter from "./AccountPresenter";

export default class extends React.Component{
    state={
        login:true,
        error:null,
        loading:false,
    };
    handleSubmit=event=>{
        event.preventDefault();
        console.log(event);
    };
    changeFunc=event=>{
        event.preventDefault();
        const { login }=this.state;
        this.setState({ login: !login })
    };
    render() {
        const { login, error, loading }=this.state;
        return <AccountPresenter
            login={login}
            error={error}
            loading={loading}
            handleSubmit={this.handleSubmit}
            changeFunc={this.changeFunc}
        />;
    };
};