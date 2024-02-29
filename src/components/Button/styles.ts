import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
    width: 100%;
    height: 42px;
    background-color: #005A8D;
    color: #FFF;

    border: 1px solid #005A8D;
    border-radius: 21px;

    transition: .5s;
    
    &:hover {
        opacity: .9;
        cursor:pointer;
        box-shadow: 0 0 10px black;
    }

    &:disabled {
        cursor: not-allowed; 
        opacity: .6;
    }
`