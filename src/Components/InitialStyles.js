import { createGlobalStyle } from "styled-components";
import reset from "styled-reset"

const initialStyles=createGlobalStyle`
    ${reset};
    a {
        color:inherit;
        text-decoration:initial;
    }
    button {
        color:inherit;
        border: initial;
        background-color: initial;
        padding:0;
        margin:0;
    }
    input {
        opacity: 0.5;
        color:inherit;
        border: initial;
        background-color: inherit;
        &:focus {
            outline: none;
        }
    }
    * {
        box-sizing: border-box;
    }
    body {
        font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 15px;

        /* color: rgba(255,255,255,1);
        background-color: rgba(25,25,25,1); */

        padding-top: 50px;
        width: 100%;
        height: calc(100vh - 50px);
        overflow: hidden;
    }
    svg {
        width: 20px;
        padding: 0;
        margin: 0;
    }
`;

export default initialStyles;