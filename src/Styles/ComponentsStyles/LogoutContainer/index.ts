import styled from "styled-components";

export const LogoutContainer = styled.section`
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 230px;
    width: 350px;
    padding: 10px 45px;
    line-height: 50px;

    background: rgba(255, 255, 255, 0.7);
    border-radius: 8px;
    h4{
        font-size: 2.2rem;
        color: #454545;
        font-family: 'Courier New', Courier, monospace;
    }
    button{
        background-color: #360033;
        color: #f5f5f5;
        transition: 0.6s;
        
        &:hover{
            background-color: #56CCF2;
            transition: 0.6s;
        }
    }
    
`;