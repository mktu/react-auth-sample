import React from 'react';
import styled from 'styled-components';
import AuthContext from '../AuthContext';
import { login, logout } from '../auth';

const Wrapper = styled.header`
    background-color : #00796b;
    color : white;
    display : flex;
    justify-content : flex-end;
    padding : 1rem;
    & > button {
        color : white;
        background-color : transparent;
        text-decoration: none;
        border : none;
        outline : none;
        cursor : pointer;
        font-size : 1.2rem;
        padding : 0;
    }
`;

export default function () {
    return (
        <Wrapper>
            <AuthContext.Consumer>
                {user =>
                    Object.keys(user).length === 0 ? (
                        <button onClick={() => { login(); }} >LOGIN</button>
                    ) : (
                            <button onClick={() => { logout(); }} >LOG OUT</button>
                        )}
            </AuthContext.Consumer>

        </Wrapper>
    )
}