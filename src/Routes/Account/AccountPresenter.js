import styled from "styled-components";
import PropTypes from "prop-types";

const AccountContainer=styled.div`
    @media screen and (max-width: 1980px){
        padding: 0 30px;
        width: 100%;
        height: calc(100vh - 50px);
        
        gap: 30px;
        display: flex;
        align-items: flex-start;
        justify-content: center;
    }
    @media screen and (max-width: 1000px){
        padding: 0 10px;
    }
`;
const Form=styled.form`
    gap: 15px 30px;
    display: grid;
    grid-template-rows: repeat(auto-fill, 30px);
    grid-template-columns: 1fr 3fr;

    header,
    input[type="submit"],
    span {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    header {
        grid-column: 1/-1;
    }
    input[type="submit"]{
        grid-column: 1/3;
    }
    label {
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: uppercase;
    }
    label[for="password"]{
        height: auto;
        grid-row: ${props=>props.join ? "5/7" : "4/5" };
    }
    label[for="password"],
    input[name="password"],
    input[name="password2"] {
        opacity: ${props=>props.errorCode===100 ? "0.5" : "initial"};
        font-weight: ${props=>props.errorCode===100 ? "600" : "initial"};

        color: ${props=>props.errorCode===100 ? "rgba(248, 205, 220, 1)" : "initial"};
        background-color: ${props=>props.errorCode===100 ? "rgba(196, 69, 105,1)" : "initial"};
        &::placeholder{
            color: ${props=>props.errorCode===100 ? "rgba(248, 205, 220, 1)" : "initial"};
        }
    }
    input {
        border: 1px solid black;
    }
    input::placeholder {
        font-size: 12px;
        text-align: center;
        color:black;
    }
    option{
        text-align: center;
    }
    header,
    select,
    label,
    input,
    button,
    span {
        transition: all 0.25s ease-in;
        height: 30px;
        &:hover,
        &:focus{
            background-color: rgba(0,0,0,0.3);
        }
    }
    @media screen and (max-width: 1980px){
        transform: translateY(50px);
        grid-column: 4/-4;
        width: 700px;
        transition: all 0.2s ease-in-out;
    }
    @media screen and (max-width: 1000px){
        grid-column: 2/-2;
        width: 450px;
    }
`;
const AccountPresenter=({ join, error, errorCode=0, loading, handleKeyUp, handleSubmit, changeFunc })=>
    <AccountContainer>
        <>
            { 
                window.addEventListener("keyup", handleKeyUp)
            },
            {join!==true ?
                <Form className="loginForm" join={join} errorCode={errorCode} onSubmit={handleSubmit}>
                    <header>???????????????</header>
                    <label htmlFor="type">??????</label>
                    <select>
                        <option>??????</option>
                        <option>????????? ??????</option>
                        <option>????????? ??????</option>
                    </select>
                    <label htmlFor="email" type="email">????????? / ????????????</label>
                    <input name="email" placeholder="?????????"/>
                    <label htmlFor="password" type="password">????????????</label>
                    <input name="password" placeholder="????????????"/>
                    <input type="submit" value="?????????"/>
                    <button onClick={changeFunc}>??????????????????</button>
                    <span> { (!error) ? " " : error } </span>
                </Form> :
                <Form className="joinForm" join={join} errorCode={errorCode}     onSubmit={handleSubmit} >
                    <header>????????????</header>
                    <label htmlFor="type">??????</label>
                    <select>
                        <option>??????</option>
                        <option>????????? ??????</option>
                        <option>????????? ??????</option>
                    </select>
                    <label htmlFor="email">?????????</label>
                    <input name="email" placeholder="?????????" type="email"/>

                    <label htmlFor="username">????????????</label>
                    <input name="username" placeholder="????????????" type="text"/>

                    <label htmlFor="password">????????????</label>
                    <input name="password" placeholder="????????????" type="password"/>
                    <input name="password2" placeholder="???????????? ??????" type="password"/>
                    <input type="submit" value="??????"/>
                    <button onClick={changeFunc}>???????????????</button>
                    <span> { (!error) ? " " : error } </span>
                </Form>
            }
        </>
    </AccountContainer>;

AccountPresenter.propTypes={
    join:PropTypes.bool,
    error:PropTypes.string,
    loading:PropTypes.bool.isRequired,
    handleKeyUp: PropTypes.func,
    handleSubmit: PropTypes.func,
    changeFunc: PropTypes.func,
};
export default AccountPresenter;