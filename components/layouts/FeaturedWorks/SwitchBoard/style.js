import styled from "styled-components"

export const SwitchButton = styled.button`
    background-color: #00000000;
    border-radius: 30px;
    padding: .3em .7em ;
    font-size: var(--fontsize3);
    color:white;
    border:solid 2px white;
    font-weight: 500;
    margin:5px;
    transition: all .2s;
    &.active{
        border:solid 2px var(--pink);
        /* font-weight: 600; */

        background-color: var(--pink);

    }

`
export const Cont = styled.div`
    margin-bottom:20px;
    display:flex;
    width:100%;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    `