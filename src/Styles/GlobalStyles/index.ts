import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        border: 0;
        box-sizing: border-box;
    }
    input{
        padding: 8px 20px;
        border-radius: 8px;
        background-color: #EAEDED;
        outline: none;
        caret-color: #00C8B4;
    }
    button{
        cursor: pointer;
        transition: 0.4s;
        border-radius: 10px;
        padding: 12px 40px;
        &:hover{
            transition: 0.4s;
        }
    }
`;