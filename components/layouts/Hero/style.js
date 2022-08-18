import styled from "styled-components";

export const Wrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    `
export const Cont = styled.div`
    display:flex;
    padding:60px;
    width:100%;
    max-width: var(--minWidth);
    @media (max-width:800px) {
        height: 70vh;
        padding:20px;

}
@media (max-width:500px) {
        height: 70vh;
        padding:0px;

}
    `

export const Row1 = styled.div` 
flex:1;
justify-content: center;
padding-left: 20px;
display: flex;
flex-direction: column;

    `

export const Row2 = styled.div`
flex:1;
padding: 10px;
width: 50%;
@media (max-width:800px) {
    display: none;
}
    `
export const HeroTitle = styled.h1`
    font-family: Roboto;
    font-size: var(--fontsize1);
    font-weight: 300;
    margin-top:0;
    margin-top:-40px;

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
export const ButtonCont = styled.div`
        margin-left:-5px;
        `
export const HeroDescr = styled.h2`
font-family: Montserrat;
font-size: var(--fontsize2);
font-weight: 400;
margin-bottom:40px;
color: var(--black2);

& b{
    color:var(--pink);
    font-weight: 700;
}
`