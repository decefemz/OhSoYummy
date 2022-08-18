import styled from "styled-components"

export const Title = styled.h1`
    font-family: Roboto;
    font-size: var(--fontsize1);
    font-weight: 300;
    margin-top:0;
    margin-top:40px;
    text-align:center;
    color:var(--black);
    & b{
        color:var(--pink);
        font-weight: 700;
        position: relative;
        margin-right: 1rem;
        position: relative;
        ::after{
            content: "";
            position: absolute;
            bottom: -0.125rem;
            left: -0.5rem;
            right: -0.5rem;
            height: 0.75rem;
            /* z-index: -1; */
            background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/664131/underline.svg');
            background-repeat: no-repeat;
            background-size: cover;
        }
    }
    `
export const Cont = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    `

export const Para = styled.h2`
font-family: Montserrat;
font-size: var(--fontsize2);
padding:20px;
align-items: center;
text-align: center;
font-weight: 400;
margin-bottom:40px;
color: var(--black2);
max-width: 800px;
& b{
    color:var(--pink);
    font-weight: 700;
}`