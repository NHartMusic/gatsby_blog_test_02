import styled from 'styled-components'

export const Button = styled.button`
    padding: 8px 16px;
    background: pink;
    color: black;
    border-radius: 4px;  
    transition: 0.3s;
    cursor: pointer;  
    border: 1px solid #ddd;
    box-shadow: none;
    ${props => props.block ? 'display: block; width 100%;' : ''}

    &:hover {
        color: white;
        background: red;
    }
`
