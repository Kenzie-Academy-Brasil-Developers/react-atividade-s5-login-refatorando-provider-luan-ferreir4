import styled from "styled-components";

export const LoginContainer = styled.section`
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    height: 430px;
    width: 350px;
    padding: 10px 45px;
    line-height: 50px;

    background: rgba(255, 255, 255, 0.7);
    border-radius: 8px;
    h3{
        margin-top: 55px;

        font-size: 1.6rem;
        color: #454545;
        font-family: 'Courier New', Courier, monospace;
    }
`;

export const LoginForm = styled.form`
    position: absolute;
    left: 50%;
    top: 70%;
    transform: translate(-50%, -50%);
    height: 300px;
    text-align: right;

    button{
        background-color: #0b8793;
        color: #f5f5f5;
        transition: 0.6s;

        &:hover{
            background-color: #56CCF2;
            transition: 0.6s;
        }
    }
`;