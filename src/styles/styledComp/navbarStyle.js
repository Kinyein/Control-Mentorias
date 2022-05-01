import styled from 'styled-components'

export const ContainerNavBar = styled.div`
    nav{
        background-color: #363062;
    }
`
export const ButtonPerfil = styled.button`
    width: 35px;
    height: 35px;
    border: none;
    cursor: pointer;
    border-radius: 8px;
    transition: transform .2s;

    &:active{
        transform: scale(.8);
    }
`