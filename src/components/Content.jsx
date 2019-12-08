import React from 'react';
import styled from 'styled-components';
import AuthContext from '../AuthContext';

const Wrapper = styled.div`
    padding : 1rem;
`;

export default function () {
    return (
        <Wrapper>
            <AuthContext.Consumer>
                {
                    user => {
                        if (Object.keys(user).length === 0) {
                            return (
                                <div>Please Sign in</div>
                            )
                        }
                        return <div>{`Welcome ${user.displayName} !`}</div>
                    }
                }
            </AuthContext.Consumer>
        </Wrapper>
    )
}