import React from "react";
import AccountPresenter from "./AccountPresenter";

export default class extends React.Component{
    state={
        join:false,
        error:null,
        errorCode:0,
        loading:false,
    };
    handleKeyUp=event=>{
        let { error }=this.state;

        this.setState( (event.getModifierState("CapsLock")) ?
            {error:error="Caps Lock 을 확인해주세요", errorCode:100} :
            {error:error=" ", errorCode:0} );
    }
    handleSubmit=event=>{
        event.preventDefault();
        const { join }=this.state;

        if(join) { 
            const hi={...event.target};

        } else {
            const {
                1:{ value:username },
                2:{ value:password }
            }={...event.target};
            const regexPassword="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}";
            console.log(regexPassword);
        }

    };
    
    changeFunc=event=>{
        event.preventDefault();
        const { join }=this.state;
        this.setState({ join: !join });
    };
    render() {
        const { join, error, errorCode, loading }=this.state;
        return <AccountPresenter
        join={join}
            error={error}
            errorCode={errorCode}
            loading={loading}
            handleKeyUp={this.handleKeyUp}
            handleSubmit={this.handleSubmit}
            changeFunc={this.changeFunc}
        />;
    };
};